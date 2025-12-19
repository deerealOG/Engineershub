import struct
import glob
import os

def get_image_info(file_path):
    with open(file_path, 'rb') as f:
        data = f.read(25)
        # PNG signature
        if data[:8] == b'\x89PNG\r\n\x1a\n':
            w, h = struct.unpack('>LL', data[16:24])
            return w, h
    return None, None

files = glob.glob('C:/Users/Golden/.gemini/antigravity/brain/cce5eaa1-8eab-43b5-9418-f3c9d54992a4/*.png')
for p in files:
    w, h = get_image_info(p)
    print(f"{os.path.basename(p)}: {w}x{h}")
