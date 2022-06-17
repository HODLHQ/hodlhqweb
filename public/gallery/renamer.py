import os
path = '/Users/Shadow/Documents/GitHub/hwebsite/website/public/gallery/'
files = os.listdir(path)
c = 0
for index, file in enumerate(files):
    if(file.split('.')[-1] != "py"):
        print(file)
        os.rename(os.path.join(path, file), os.path.join(path, file.lower()))
        c+=1