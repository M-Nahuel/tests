from os import strerror

def isLatin(ch):
    if ord(ch.upper()) not in range(65, 91):
        return False
    return True

def list(ch):
    if ch not in chars:
        chars[ch] = 1
    else:
        chars[ch] += 1

chars = {}

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
                if isLatin(ch):
                    list(ch)
                    count += 1
except IOError as e:
    print('No se pudo terminar el proceso.', strerror(e.errno))
    exit(e.error)

print(count, 'Letras latinas contadas.')
print('Cantidad de cada letra: ')
try:
    wrt = open(inp + '.hist', 'wt')
except IOError as e:
    print('No se pudo escribir el histograma.', strerror(e.errno))
    exit(e.error)

for i in sorted(chars, key = lambda a : chars[a], reverse = True):
    output = i + ' -> ' + str(chars[i])
    wrt.write(output + '\n')
    print(output)
src.close()
wrt.close()
