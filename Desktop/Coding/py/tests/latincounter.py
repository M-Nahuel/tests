from os import strerror

def islatin(ch):
    if ord(ch.upper()) not in range(65, 91):
        return False
    return True

dictionary = {}

def list(ch):
    if ch not in dictionary:
        dictionary[ch] = 1
    else:
        dictionary[ch] = dictionary[ch]+1


inp = input('Ingrese el nombre del archivo que desea inspeccionar: ')
try:
    src = open(inp, 'rt')
except IOError as e:
    print('No se puede abrir el archivo.', strerror(e.errno))
    exit(e.errno)

count = 0

try:
    lines = src.readlines()
    if len(lines) > 0:
        for line in lines:
            for ch in line:
                if islatin(ch):
                    list(ch)
                    count += 1
except IOError as e:
    print('No se pudo terminar el proceso.')
    exit(e.error)

print(count, ' Letras latinas contadas.')
print('Cantidad de cada letra: ')
for i in dictionary:
    print(i + ' -> ' + str(dictionary[i]))
src.close()
