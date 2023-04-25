from os import strerror

def islatin(ch):
    if ord(ch.upper()) not in range(65, 91):
        return False
    return True


inp = input('Ingrese el nombre del archivo que desea inspeccionar.')
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
                    count += 1
except IOError as e:
    print('No se pudo terminar el proceso.')
    exit(e.error)

print(count, 'Letras latinas contadas.')
src.close()

