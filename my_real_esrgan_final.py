#pip install git+https://github.com/sberbank-ai/Real-ESRGAN.git
import torch
from PIL import Image
import numpy as np
#from RealESRGAN import RealESRGAN
import RealESRGAN
from datetime import datetime

import threading
from threading import Thread
import os
import sys

import cv2
import skvideo
#skvideo.setFFmpegPath("/usr/local/bin")
#skvideo.setFFmpegPath("c:/!Monitoring-2023/python/hacks-ai/real_esrgan/bin-ffmpeg")
import skvideo.io
#from skvideo.io import VideoWriter

# Если поставить значение count_sec = 0, то обрабатываться будет весь файл:
count_sec = 30

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


#path_folder = "rutube_hackaton_khabarovsk/test/"
path_folder = "rutube_hackaton_khabarovsk/train/"
image_dataset = os.listdir(path=path_folder)
image_dataset.sort()

list_pics = []
fps = 0

def FrameCapture(path):
    global fps
    vidObj = cv2.VideoCapture(path)
    fps = vidObj.get(cv2.CAP_PROP_FPS)
    print(f'fps = {fps}')
    count = 0
    success = 1
    while success:
        try:
            success, image = vidObj.read()
            #print(image.size)
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            list_pics.append(Image.fromarray(image).resize((428,240)))
            count += 1
        except:
            pass
        #break

#for file in image_dataset:
for i_k in range(0,len(image_dataset)):
    file = image_dataset[i_k]
    
    list_pics = []
    path = os.path.join(path_folder, file)
    print('')
    print('--------------------------------------')
    print(f'start convert to frames file {file}...')
    print(f'Start  load   image = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')
    FrameCapture(path)
    print(f'fps = {fps}')
    print(f'list_pics[0].size = {list_pics[0].size}')
    print(f'End    load   image = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')
    #input()
    #list_pics[0].show()

    print(f'Start predict image = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')
    
    sr_image = []
    total_data = 0
    if count_sec == 0:
        total_data = len(list_pics)
    else:
        total_data = round(count_sec*fps)
    for i in range(0,total_data): #count_sec*fps):#len(list_pics)-2750):#-2999):
        if i % 100 == 0:
            print(f'{i} from {len(list_pics)}:')
            #if i % 2 == 0:
            #print(f'{i} from {len(list_pics)}:')
            #sr_image.append(model.predict(list_pics[i],batch_size=4, patches_size=192,padding=24,pad_size=15).convert('RGB'))
        sr_image.append(model.predict(list_pics[i]).convert('RGB'))
        """
            img = model.predict(list_pics[i]).convert('RGB')
            if i > 1:
                sr_image.append(cv2.addWeighted(np.asarray(img).astype(np.uint8),0.5,np.asarray(sr_image[len(sr_image)-1]).astype(np.uint8),0.5,0.0))
                sr_image.append(img)
            elif i == 0:
                sr_image.append(img)
        """
    #sr_image[0].
    #print(type(sr_image[0]))
    print(f'Finish predict image = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')
    
    height, width = sr_image[0].size
    size = (width,height)
    vid_path_out = f'results/{file[:-7]+"480.mp4"}'
    #skvideo.io.FFmpegWriter(f'results/{file[:-7]+"480.mp4"}',sr_image)
    #cv2.destroyAllWindows()
    
    sr_image_2 = []
    for i in range(len(sr_image)):
        sr_image_2.append(np.asarray(sr_image[i]))#.astype(np.uint8))

    """
    if device.type == 'cuda':
        params = cv2.cudacodec_VideoReaderInitParams()
        params.targetSz = (width,height)
        codec = cv2.cudacodec.H264
        #frame = cv.cuda.GpuMat(height,width,cv.CV_8UC3)
        writer = cv2.cudacodec.createVideoWriter(vid_path_out,params.targetSz,codec)
        #n_frames = 0
        #start = time.time()
        #ret, _ = reader.nextFrame(frame)
        #while(ret):
        for i in range(len(sr_image_2)):
            #n_frames += 1
            writer.write(sr_image_2[i])
            #ret, _ = reader.nextFrame(frame)
        writer.release()
        #end = time.time()
    """
    
    skvideo.io.vwrite(f'results/{file[:-7]+"480.mp4"}',sr_image_2)#,
    
    """
                      inputdict={
                                         '-framerate': str(fps),
                                         #'-f' : 'rawvideo',
                                         '-s' : '{}x{}'.format(width, height)
                                         },
                      outputdict={
                                         '-vcodec' : 'libx264', # h.264 codec
                                         #'-crf' : 0,
                                         #'-preset' : 'veryslow',
                                         '-framerate' : str(fps),
                                         })
    """
    """
    writer = skvideo.io.FFmpegWriter(f'results/{file[:-7]+"480.mp4"}',
                                     inputdict={
                                         '-framerate': str(fps),
                                         '-f' : 'rawvideo',
                                         '-s' : '{}x{}'.format(width, height)
                                         },
                                     outputdict={
                                         '-vcodec' : 'libx264', # h.264 codec
                                         '-crf' : 0,
                                         #'-preset' : 'veryslow',
                                         '-framerate' : str(fps),
                                         })
    for i in range(len(sr_image_2)):
        writer.writeFrame(sr_image_2[i])
    writer.close()
    """
    
    """
    writer = VideoWriter(f'results/{file[:-7]+"480.mp4"}',frameSize=size)
    writer.open()
    for i in range(len(list_pics)):
        writer.write(np.asarray(list_pics[i]))
    writer.release()
    """
    """
    #fps = 1.0
    out = cv2.VideoWriter(f'results/{file[:-7]+"480.mp4"}',cv2.VideoWriter_fourcc(*'mp4v'), fps, size, True)
    print(f'count frames = {len(list_pics)}')
    for i in range(len(list_pics)):
        #out.write(cv2.cvtColor(np.array(sr_image[i]),cv2.COLOR_RGB2BGR))#np.array(sr_image[i]))
        out.write(np.array(list_pics[i]))#np.array(sr_image[i]))
        #print(f'{i}')
    out.release()
    """
    #cv2.destroyAllWindows()
    
    print(f'Finish saving  video = {datetime.strftime(datetime.now(),"%d.%m.%Y %H:%M:%S.%f")}')
    #break
