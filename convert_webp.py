import os
from PIL import Image

# 设置你要转换的文件夹路径
input_folder = './images'  # 修改为你的图片文件夹路径

# 支持的图片扩展名
img_exts = ['.png', '.jpg', '.jpeg']

# 创建输出文件夹（可选）
output_folder = os.path.join(input_folder, 'webp')
os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    name, ext = os.path.splitext(filename)
    ext_lower = ext.lower()
    if ext_lower in img_exts:
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, f"{name}.webp")
        try:
            with Image.open(input_path) as img:
                img.save(output_path, 'webp', quality=90)
            print(f"Converted: {input_path} -> {output_path}")
        except Exception as e:
            print(f"Failed: {input_path} ({e})")
