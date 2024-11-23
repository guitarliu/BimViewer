import tkinter as tk
import json
import os

# 设置保存路径为桌面
data_file = r'C:/Users/whuli/Desktop/BimViewer/structures_data.json'

# 读取现有数据
def load_data():
    if os.path.exists(data_file):
        with open(data_file, 'r') as f:
            return json.load(f)
    return []

# 保存数据到 JSON 文件
def save_data(data):
    # 确保路径存在
    os.makedirs(os.path.dirname(data_file), exist_ok=True)
    
    with open(data_file, 'w') as f:
        json.dump(data, f, indent=4)

# 添加新的模型数据
def add_model_data():
    model_url = model_url_entry.get()
    title = title_entry.get()
    price = price_entry.get()

    # 检查是否有任何字段为空
    if not model_url or not title or not price:
        # 如果有为空的字段，弹出提示框
        error_label.config(text="所有字段都不能为空！", fg="red")
        return

    # 创建新的模型数据
    new_model = {
        'modelUrl': model_url,
        'title': title,
        'price': price
    }

    # 读取现有数据
    data = load_data()
    data.append(new_model)

    # 保存新的数据
    save_data(data)

    # 清空输入框
    model_url_entry.delete(0, tk.END)
    title_entry.delete(0, tk.END)
    price_entry.delete(0, tk.END)

    # 更新模型列表显示
    update_model_list()

    # 清除错误提示
    error_label.config(text="")

# 更新模型列表显示
def update_model_list():
    model_listbox.delete(0, tk.END)
    data = load_data()
    for model in data:
        model_listbox.insert(tk.END, f"Model: {model['title']}, Price: {model['price']}")

# 创建主窗口
root = tk.Tk()
root.title("Model Data Entry")

# 创建界面元素
model_url_label = tk.Label(root, text="Model URL:")
model_url_label.pack()
model_url_entry = tk.Entry(root, width=50)
model_url_entry.pack()

title_label = tk.Label(root, text="Title:")
title_label.pack()
title_entry = tk.Entry(root, width=50)
title_entry.pack()

price_label = tk.Label(root, text="Price:")
price_label.pack()
price_entry = tk.Entry(root, width=50)
price_entry.pack()

add_button = tk.Button(root, text="Add Model", command=add_model_data)
add_button.pack()

# 错误提示标签
error_label = tk.Label(root, text="", fg="red")
error_label.pack()

# 列出所有模型数据
model_list_label = tk.Label(root, text="Model List:")
model_list_label.pack()
model_listbox = tk.Listbox(root, width=50, height=10)
model_listbox.pack()

# 加载并显示已有的模型数据
update_model_list()

# 运行主循环
root.mainloop()
