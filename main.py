#pip install git+https://github.com/sberbank-ai/Real-ESRGAN.git
import torch
import RealESRGAN
import os
from scale import *
from pathlib import Path


if __name__ == "__main__":
    Path("results").mkdir(parents=True, exist_ok=True)
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    
    if device.type == 'cuda':
        print(f'device = {device}')
        print(f'name = {torch.cuda.get_device_name(0)}')

    scale_x = 2
    if scale_x == 2:
        model_s = 'weights/RealESRGAN_x2.pth'
    elif scale_x == 4:
        model_s = 'weights/RealESRGAN_x4.pth'
    elif scale_x == 8:
        model_s = 'weights/RealESRGAN_x8.pth'

    model = RealESRGAN.RealESRGAN(device, scale=scale_x)
    
    model.load_weights(model_s, download=True)

    print(f'scale = x{scale_x}')

    path_folder = "../rutube_hackaton_khabarovsk/test/"

    image_dataset = os.listdir(path=path_folder)
    image_dataset.sort()
    
    for i_k in range(len(image_dataset)):
        UpscaleVideo(path_folder, image_dataset[i_k], model, 0)