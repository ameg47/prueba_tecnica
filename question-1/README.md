# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Para llegar al peldaño 1 hay solo una combinación (1), para llegar al 2 hay 2 (1+1, 2), para 3 hay 3 (1+1+1, 2+1, 1+2) pero para 4 hay 5
(1+1+1+1, 1+2+1, 1+1+2, 2+1+1, 2+2)

Suponiendo que la escalera conste de 10 peldaños quiere decir que puedo llegar al ultimo desde el peldaño 9 o 8. A su vez para llegar al peldaño 9 se puede llegar desde el 8 y 7, y al 8 desde el 7 y el 6. Por ende la combinacion de formas para llegar a X es la suma de combinaciones para llegar a X-1 y X-2.

Por lo tanto F(x)= F(x-1) + F(x-2)

Todo esto me lleva a pensar en recursión para solucionar el problema donde la base para iniciar es 1 o 2 ya que es la cantidad que se pueden subir de una vez. Es decir, hasta que no me encuentre en el 1er o 2do escalon computo F(x-1) + F(x-2).

PS: Sin embargo para calcular 100 peldaños requiere un gran capacidad de procesamiento ya que hay miles de millones de combinaciones.