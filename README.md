# Tarjeta de crédito válida DEV003
***
## Resumen del proyecto

Card-Validation es un proyecto en el que se busca construir una aplicación web que permita validar el número de una tarjeta de crédito mediante el algoritmo de Luhn. Además de esto se deben dejar a la vista solo los últimos cuatro dígitos de la tarjeta a validar. La lógica del proyecto esta implementada a través de Vanilla Javascript, HTML y CSS. El control de versiones será con git y se desplegara el proyecto en GitHub.

## Definición del proyecto
***
### Principales usuarios del proyecto:

Al ser una pagína de finalización de compra, los usuarios son todas aquellas personas que realicen una compra en línea. Situados en el contexto de Chile la cifra de personas que compra en línea llega al 63% de la población (1) por lo que generar una aplicación web que facilite este proceso resulta una necesidad. La página puede ser adaptada según el cliente/tipo de comercio que lo solicite. Cualquier tienda podría usar esta plataforma de pago.

### Necesidades que cubre el proyecto:

La principal necesidad y problema que cubre es ser una aplicación web para realizar el pago online de un producto y/o servicio, mediante una tarjeta de crédito desde cualquier lugar. Principalmente enfocado a tiendas online facilitando el proceso en sus ventas. 

### Primer prototipo:

La idea del primer prototipo es la que se presenta en la imagen, sin embargo con el paso de los sprint este diseño se fue modificando en base a los requerimientos del proyecto y en función del tiempo disponible también.
***
Primer prototipo

![primer prototipo](https://postimg.cc/B8mYHsCr)
***
Diseño final

![segundo prototipo]([https://postimg.cc/TKM3vvnv)

***
El diseño final se simplifico para priorizar la implementación de las funciones en JS
***
## Definiciones Tecnicas
***
Para este proyecto se trabajo con el algoritmo de Luhn

_Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10._
#### Deploy
Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

## Recursos

### Enlaces de recursos utilizados

* [Algoritmo de Luhn](http://bit.ly/3iWMWxF)
* [Guia visual Flexbox](https://flexbox.malven.co/)
* [Fuentes de google](https://fonts.google.com/)
* [Descarga de imagenes ](https://www.freepik.es/)
* [El Mostrador, 2022](https://bit.ly/3YjPFl4)
