# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

En un principio debería recorrer el string pasando por cada uno de los paréntesis. Para que se cumpla la condición al recorrerlo el primer
paréntesis de cierre debe corresponderse con el último paréntesis de apertura, y así sucesivamente. Por lo tanto se podría ir acumulando 
los de apertura en un stack (LIFO) e ir comparandolo cuando nos encontremos con uno de cierre.

Para la comparación se puede utilizar un objeto donde los de apertura sean las key y los de cierre los value correspondientes. Utilizamos un
array vacío para guardar los paréntesis de apertura. Recorremos el string, si el caracter es una key del objeto quiere decir que es un
paréntesis de apertura y por lo tanto lo pusheamos al array. Si por el contrario es un value dentro del objeto, utlizamos pop() para sacar
el último paréntesis de paertura que visitamos del array y lo utilizamos para obtener el value (paréntesis de cierre) de nuestro objeto de
comparación. Si el paréntesis coincide continuamos, si son diferentes devolvemos false. Si luego del loop no se retorno false quiere decir
que es true y que cada paréntesis se cierra correctamente.