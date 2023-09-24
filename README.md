# holoscale

**Папка откуда берутся видео:** `"../rutube_hackaton_khabarovsk/test/"`

**Run:**
```
python main.py
```

## Подготовка окружения:

```
sudo apt update && sudo apt upgrade
```   

Установка библиотек:

Универсальные инструменты:

        sudo apt install build-essential cmake pkg-config unzip yasm git checkinstall
        
    
 Библиотеки ввода-вывода изображений
    ``` 
    $ sudo apt install libjpeg-dev libpng-dev libtiff-dev
    ``` 
Библиотеки видео/аудио - FFMPEG, GSTREAMER, x264 и так далее.
    ```
    sudo apt install libavcodec-dev libavformat-dev libswscale-dev libavresample-dev
    sudo apt install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev
    sudo apt install libxvidcore-dev x264 libx264-dev libfaac-dev libmp3lame-dev libtheora-dev 
    sudo apt install libfaac-dev libmp3lame-dev libvorbis-dev
    sudo apt-get install gstreamer1.0-plugins-bad
    ```

Библиотеки для python3:
    ```
    sudo apt-get install python3-dev python3-pip
    sudo -H pip3 install -U pip numpy
    sudo apt install python3-testresources
    pip install sk-video
    pip install transformers
    pip install huggingface_hub
    pip install RealESRGAN
    pip install torch[cuda]
    ```
Библиотека параллелизма C++ for CPU
    ```
    sudo apt-get install libtbb-dev
    ```

Библиотеки оптимизации для OpenCV
    ```
    sudo apt-get install libatlas-base-dev gfortran
    ```


Установка CUDA Toolkit 12.2
```
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.1-1_all.deb
sudo dpkg -i cuda-keyring_1.1-1_all.deb
sudo apt-get update
sudo apt-get -y install cuda
```

```
sudo apt install nvidia-cuda-toolkit
```

Установка cuDNN от 
```
https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html#installwindows
```

Установка opencv-4.x

```
go get https://github.com/opencv/opencv -b 4.x
go get https://github.com/opencv/opencv_contrib -b 4.x

cd opencv
mkdir build && cd build
```

```
cmake -D CMAKE_BUILD_TYPE=RELEASE \
-D CMAKE_INSTALL_PREFIX=/usr/local \
-D WITH_TBB=ON \
-D ENABLE_FAST_MATH=1 \
-D CUDA_FAST_MATH=1 \
-D WITH_CUBLAS=1 \
-D WITH_CUDA=ON \
-D BUILD_opencv_cudacodec=ON \
-D WITH_CUDNN=ON \
-D OPENCV_DNN_CUDA=ON \
-D CUDA_ARCH_BIN=7.5 \
-D WITH_V4L=ON \
-D WITH_QT=OFF \
-D WITH_OPENGL=ON \
-D WITH_GSTREAMER=ON \
-D OPENCV_GENERATE_PKGCONFIG=ON \
-D OPENCV_PC_FILE_NAME=opencv.pc \
-D OPENCV_ENABLE_NONFREE=ON \
-D OPENCV_PYTHON3_INSTALL_PATH=~/.local/lib/python3.10/site-packages \
-D PYTHON_EXECUTABLE=usr/bin/python3.10 \
-D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib/modules \
-D CUDA_TOOLKIT_ROOT_DIR=/usr/local/cuda \
-D CUDNN_LIBRARY=/usr/local/cuda/lib64/libcudnn.so.7.6.5 \
-D CUDNN_INCLUDE_DIR=/usr/local/cuda/include \
-D INSTALL_PYTHON_EXAMPLES=OFF \
-D INSTALL_C_EXAMPLES=OFF \
-D WITH_NVCUVID=ON \
-D BUILD_EXAMPLES=OFF ..
```

```
make -j8
sudo make install
```

```
sudo /bin/bash -c 'echo "/usr/local/lib" >> /etc/ld.so.conf.d/opencv.conf'
sudo ldconfig
```

