# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

Para correr el script es necesario realizar npm i para installar el paquete necesario para leer el csv!

Primero debí encontrar una forma para leer el archivo csv. Al leerlo la información puede tratarse como un array de objetos, donde cada objeto
tiene el formato de BrowsingEvents { user: x, entityId: x, entityType: x, eventType: x}. Para luego utilizar y crear el output necesito 
guardar en una variable esa información que leo. El resultado final debe mostrar los clicks, impressions etc de cada producto por ende la 
información se agrupa al rededor de esa variable.

En un principio lo pense como un array de objetos pero para accesibilidad más fácil consideré guardarlo dentro de un objeto, es decir, el 
objeto contiene como propiedades las id unicas de cada producto, para identificarlo mas facilmente. Dentro de esa propiedad se guarda el 
objeto (la fila) que se renderizara en la tabla final.

Entonces, se lee/recorre el csv, por cada elemento se evalua si el producto ya existe en el objeto, es decir, si la propiedad que equivale a 
entityId se encuentra en el objeto. Si no es así, se agrega el mismo con la porpiedad entityId y estableciendo en 1 la propiedad impression o 
click según corresponda. Si existe se le suma 1 a impression o click según el caso y se calcula el ctr.

Una vez se hayan pasado todos los elementos se procede a crear el archivo output con la tabla correspondiente. Para ello en la función 
extractAsCSV se crean los headers de la tabla y se recorre el objeto pasando a un array los productos. Se concatenan ambos y con esa 
información se crea el archivo output.csv

