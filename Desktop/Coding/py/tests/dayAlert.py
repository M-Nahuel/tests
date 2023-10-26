import datetime
from os import strerror

today = datetime.datetime.now().weekday()

outp = 'C:\\users\\bingo\\desktop\\coding\\py\\tests\\Alerta.txt'

flag = True

firstWeek = ["realizar pedido hoy", "realizar pedido mañana"]
secondWeek = ["realizar pedido mañana", "realizar pedido hoy"]

actions = (
    firstWeek if flag else secondWeek
)

index = (
    0 if flag else 1
)

try:
    fo = open(outp, 'wt')
    fo.write(actions[index])
    fo.close()
except IOError as e:
    print('Se produjo un error de E/S: ', strerror(e.errno))
