from os import strerror

data = bytearray(100)

try:
    bf = open('file.bin', 'rb')
    bf.readinto(data)
    bf.close()

    for b in data:
        print(hex(b), end=' ')
except IOError as e:
    print('Se produjo un error de E/S: ', strerr(e.errno))

# Without bytearray:
try:
    bf = open('file.bin', 'rb')
    byte = bf.read()
    bf.close()

    for b in byte:
        print(b)
except IOError as e:
    print('Se produjo un error de E/S: ', strerr(e.errno))

