import os
init_path = '.'
old_name='\xe9\xa1\xb5\xe9\x9d\xa2'
new_name='y'
def rename(path):
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path,file))==True:
            newFile=file.replace(old_name,new_name)
            os.rename(os.path.join(path,file),os.path.join(path,newFile))
            print file,'ok'
        else:
            rename(os.path.join(path,file))
if __name__ == '__main__':
    rename(init_path)
