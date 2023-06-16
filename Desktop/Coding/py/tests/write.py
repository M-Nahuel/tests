from os import strerror

try:
    fo = open('C:\\users\\bingo\\desktop\\coding\\py\\tests\\test.txt', 'wt')
    fo.write('lorem ipsum dolor ametasdfasdfsgasdasd]\nasdafsgsdf')
    fo.close()
except IOError as e:
    print('Se produjo un error de E/S: ', strerr(e.errno))

