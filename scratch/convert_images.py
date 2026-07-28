import os
from PIL import Image

def convert_png_to_webp(directory, quality=85):
    print(f"Scanning directory: {directory}")
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.png'):
                png_path = os.path.join(root, file)
                webp_path = os.path.splitext(png_path)[0] + '.webp'
                
                print(f"Converting {png_path} -> {webp_path}")
                try:
                    with Image.open(png_path) as img:
                        # Save as webp with specified quality
                        img.save(webp_path, 'WEBP', quality=quality)
                    
                    # Verify the file was created and is non-empty
                    if os.path.exists(webp_path) and os.path.getsize(webp_path) > 0:
                        orig_size = os.path.getsize(png_path)
                        new_size = os.path.getsize(webp_path)
                        saving = (orig_size - new_size) / orig_size * 100
                        print(f"  Success! Size: {orig_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({saving:.1f}% saved)")
                    else:
                        print(f"  Warning: WebP file created is empty or missing: {webp_path}")
                except Exception as e:
                    print(f"  Error converting {png_path}: {e}")

if __name__ == '__main__':
    public_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public'))
    convert_png_to_webp(public_dir)
