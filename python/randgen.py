import json
import os
import random
# global variables
sz=[40,40]
path='../public/DATA'
an=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']
def randString(x):
    s=""
    for _ in range(x):
        s+=an[random.randint(0,35)]
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
    dic[file.split('.')[0]]=randString(40)
jsonStr = json.dumps(dic)
print(jsonStr)