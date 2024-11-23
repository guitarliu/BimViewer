import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function initModelViewer(element, modelUrl) {
    const width = element.clientWidth;
    const height = element.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 3000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);  // 添加更清晰的渲染
    element.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // 增加阻尼效果，使交互更平滑

    const loader = new GLTFLoader();
    loader.load(
        modelUrl,
        (gltf) => {
            scene.add(gltf.scene);
            const box = new THREE.Box3().setFromObject(gltf.scene);
            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());

            controls.maxDistance = boxSize * 10;
            camera.position.copy(boxCenter);
            camera.position.z += boxSize * 0.5;
            camera.position.x += boxSize * 0.5;
            camera.position.y += boxSize * 0.5;
            camera.lookAt(boxCenter);
            controls.target.copy(boxCenter);
        },
        undefined,
        (error) => {
            console.error('Error loading the model:', error);
        },
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    // Resize event
    function onWindowResize() {
        const newWidth = element.clientWidth;
        const newHeight = element.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }
    
    // 使用 ResizeObserver 更精确地监听 element 大小变化
    const resizeObserver = new ResizeObserver(onWindowResize);
    resizeObserver.observe(element);

    window.addEventListener('resize', onWindowResize); // 同时监听 window 大小调整
}

// 初始化模型查看器
function initializeModelViewers() {
    const modelViewers = document.querySelectorAll('.model-viewer');
    modelViewers.forEach((viewer) => {
        const modelUrl = viewer.getAttribute('data-model-url');
        initModelViewer(viewer, modelUrl);

        // 使用 MutationObserver 监听 data-model-url 的变化
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-model-url') {
                    const newModelUrl = viewer.getAttribute('data-model-url');
                    // 移除旧的渲染器和场景
                    while (viewer.firstChild) {
                        viewer.removeChild(viewer.firstChild);
                    }
                    // 重新初始化模型查看器
                    initModelViewer(viewer, newModelUrl);
                }
            });
        });

        observer.observe(viewer, { attributes: true });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initializeModelViewers();
});