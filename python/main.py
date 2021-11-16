from PIL import Image
import cv2
import numpy as np
import json
import os
# global variables
sz=[40,40]
path='../public/DATA'
#global variables end
def encodeIntoAlphaNumeric(x):
    an=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']
    s=""
    temp=0
    for i in x:
        for j in i:
            temp*=2
            temp+=0 if j==0 else 1
            if temp>=36:
                s+=an[int(temp%36)]
                temp/=36
    return s

def compress(file):
    foo = Image.open(path+"/"+file)
    foo = foo.resize((sz[0],sz[1]),Image.ANTIALIAS)
    foo.save("temp/"+file)
    return foo

def getEncodedImage(file):
    compress(file)
    img = cv2.imread("temp/"+file, 2)
    bw = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)
    x = np.array(bw[1])
    s=encodeIntoAlphaNumeric(x)
    os.remove("temp/"+file)
    return s

def getAllImages(path):
    images=[]
    directories = os.listdir(path)
    for file in directories:
        images.append(file)
    return images

images=getAllImages(path)
dic={}
for file in images:
    dic[file.split('.')[0]]=getEncodedImage(file)
jsonStr = json.dumps(dic)
print(jsonStr)