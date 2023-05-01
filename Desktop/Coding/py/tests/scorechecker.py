class ExcepcionDatosAlumnos(Exception):
	pass

class LineaErronea(ExcepcionDatosAlumnos):
	def __init__(self, msg):
	    self.msg = msg

class ArchivoVacio(ExcepcionDatosAlumnos):
	def __init__(self,msg):
	    self.msg = msg

def error(data):
    for i in range(0, len(data)):
        if i < 2:
            if data[i].isdigit():
                return True
            if not data[i].isalpha():
                return True
            else:
                return False
        if not data[i].replace('.','').isdigit():
            return True
        return False

	
inp = input('Ingrese el nombre del archivo que desea inspeccionar: ')

try:
    src = open(inp, 'rt')
    
    lines = src.readlines()
    
    if len(lines) < 1:
        raise ArchivoVacio('El archivo proporcionado no contiene informacion para ser analizada.')
    
    dic = {}
    
    for line in lines:
    
        data = line.split()
        
        if len(data) != 3:
            if len(data) > 3:
                msg = 'Los datos proporcionados exceden el formato requerido ([Nombre][Apellido][Puntuacion].'
            else:
                msg = 'Los datos proporcionados son insuficientes para cumplir con el formato requerido ([Nombre][Apellido][Puntuacion].'
            raise LineaErronea(msg)
        
        if error(data):
            raise LineaErronea('La linea proporcionada tiene valores invalidos, el formato valido es : [alfabetico][alfabetico][numerico].')
            
        student = data[0] + ' ' + data[1]
        score = float(data[2])
            
        if student not in dic:
            dic[student] = score
        else:
            dic[student] += score
    
    for key in sorted(dic):
        print(key + ' \t ' + str(dic[key]))
                
except ArchivoVacio as a:
    print(a.msg)
except LineaErronea as a:
    print(a.msg)
