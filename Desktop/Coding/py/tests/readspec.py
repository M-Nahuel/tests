from os import strerror

data = bytearray(10)

for i in range(len(data)):
    data[i] = 10 + i

try:
    bf = open('file.bin', 'wb')
    bf.write(data)
    bf.close()
except IOError as e:
    print('Se produjo un error de E/S: ', strerr(e.errno))

# Read with max bytes specified
try:
    bf = open('file.bin', 'rb')
    data = bytearray(bf.read(5))#The first 5 bytes will be read, the next 5 will be left waiting to be processed
    bf.close()

    for b in data:
        print(hex(b), end=' ')
except IOError as e:
    print('Se produjo un error de E/S: ', strerr(e.errno))
