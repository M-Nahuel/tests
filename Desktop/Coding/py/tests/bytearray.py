from os import strerror

data = bytearray(ord('a'))

for i in range(len(data)):
    data[i] = 10 + i

try:
    bf = open('file.bin', 'wb')
    bf.write(data)
    bf.close()
except IOError as e:
    print('se produjo un error de E/S: ', strerr(e.errno))

