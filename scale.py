import torch
from PIL import Image
import numpy as np

import RealESRGAN
from datetime import datetime

import threading
from threading import Thread
import os
import sys

import cv2
import skvideo
import skvideo.io

def FrameCapture(path):
    list_pics = []
    vidObj = cv2.VideoCapture(path)
    fps = vidObj.get(cv2.CAP_PROP_FPS)
    count = 0
    success = 1
    
    while success:
        try:
            success, image = vidObj.read()
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            list_pics.append(Image.fromarray(image).resize((428,240)))
            count += 1
        except:
            pass
    return fps, list_pics

# Если поставить значение count_sec = 0, то обрабатываться будет весь файл:
def UpscaleVideo(path_folder, file, model, count_sec):
    path = os.path.join(path_folder, file)
    
    print('')
    print('--------------------------------------')
    print(f'start convert to frames file {file}...')
    print(f'Start  load   image = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')
    
    fps, list_pics = FrameCapture(path)
    
    print(f'fps = {fps}')
    print(f'list_pics[0].size = {list_pics[0].size}')
    print(f'End    load   image = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')

    print(f'Start predict image = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')
    
    sr_image = []
    total_data = 0
    
    if count_sec == 0:
        total_data = len(list_pics)
    else:
        total_data = round(count_sec*fps)
    
    for i in range(0,total_data):
        sr_image.append(model.predict(list_pics[i]).convert('RGB'))
        
    print(f'Finish predict image = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')

    sr_image_2 = []
    
    for i in range(len(sr_image)):
        sr_image_2.append(np.asarray(sr_image[0]))
        sr_image.pop(0)

    skvideo.io.vwrite(f'results/{file[:-7]+"res.mp4"}',sr_image_2)
    
    sr_image_2.clear()
    
    print(f'Finish saving  video = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')