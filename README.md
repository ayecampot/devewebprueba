## Introducción

La página es html estático pero se utiliza en environment de nodejs para
minificar y correr los tests de lighthouse.

## Setup

    $ npm install
    
## Servidor de desarrollo 

Para correr el servidor de desarrollo se usa el comando:

    $ npm run serve

Tener en cuenta que en este modo parceljs no minifica los .js ni los .css.

## Correr reporte de lighthouse

Para correr el reporte primero hay que hacer un build que minifica y copia los archivos a dist/

    $ npm run build
    
Y luego:

    $ npm run test

## CSS Responsive

La página usa css3 sin ningún framework. Para que se adapte mejor a los distintos tipos de pantalla favor de seguir las siguientes recomendaciones.

### Tamaño de fuentes y márgenes.

Definir los tamaños de las fuentes usando unidades em o rem en su defecto. Lo mismo para los márgenes y padding de los elementos. Tratar de aplicar el estilo al elemento de jerarquía mas baja (hijos) para evitar que se diluya mucho el tamaño cuando se usa em ya que toma como referencia el tamaño del padre. Usar rem para elementos que se van a reutilizar en todas la página así no afecta el tamaño (ej: botones.)

### Tamaños de cajas.

Para los tamaños de cajas preferir el uso de porcentajes y en caso de que sea necesario usar vmin y vmax. No utilizar unidades fijas como pixeles. Para los bordes o cosas pequeñas si se debe usar píxeles.

### Variables de colores.

Usar las variables de CSS3 para los colores comunes.
