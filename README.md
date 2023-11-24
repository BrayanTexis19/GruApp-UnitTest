# Project GruApp
Aplicación web para la Secretaría de Movilidad y Transporte del Estado de Puebla, que tiene como propósito
calcular y regular los costos asociados al servicio de arrastre de grúas requerido por usuarios conductores involucrados en algún accidente. Haciendo uso de tecnologías basadas en Geolocalización. Garantizando transparencia en el proceso de cotización de dicho servicio.

## Recursos

### OpenStreetMap

##### ¿Qué es?

Es un proyecto internacional para crear un mapa gratuito del mundo. Se puede definir como:

- Un mapa web gratuito.
- Un mapa libre del mundo, creado por una comunidad.
- Colección de herramientas de código abierto pra mapear el mundo.

Es un mapa editable y libre del mundo entero que está siendo elaborado por voluntarios y publicado con una licencia de contenido abierto.

### Documentación de OSM

[OpenStreetMap](https://wiki.openstreetmap.org/)

##### Recursos utlizados

- Libreria React Leaflet
- Nominatim

# Leaflet 

![](https://rosolutions.com.mx/blog/wp-content/uploads/2018/11/leafletjs-card.png)

**Leaflet** es una librería de JavaScript de código abierto para mapas interactivos que contiene varias funciones para generar un mapa y mostrar diferentes componentes, como el uso de marcadores.

# React Leaflet 

![](https://react-leaflet.js.org/img/logo-title.svg)

En nuestro caso utilizamos react-leaflet, ya que es una librería  existente para react, donde provee a React con componentes para Leaflet.

Dicha librería trabaja con las siguientes versiones:

- "leaflet": "^1.9.3"
- "react": "^18.2.0"

####Intalación 

Desde CDN, se pueden importar mediante URL
```
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
```

npm

Para agregar React Leaflet y sus dependencias  se utiliza: 

`npm install react react-dom leaflet`

`npm install react-leaflet`

Despues basta con importar todos los componentes. 
```
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
```
#### Configuración 

Despues de la instalación agregamos el siguiente código que nos muestra un funcionamiento correcto. 

```
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
````
#### Resultado

![](https://camo.qiitausercontent.com/466a3c9dd499f3fbf7e86f9f3676984876282afd/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3237373233332f65333163343065342d663232362d373036382d373933372d3330393332643731336630362e706e67)

> Imagen de referencia al código anterior

# Nominatim 

Es una herramienta que nos da la posibilidad de buscar datos de OpenStreetMap por nombre y dirección (geocodificación).

# Trazado de rutas

Para el trazado de rutas hicimos uso de una librería de Leaflet en particular.

## Leaflet Routing Machine

![](https://user-images.githubusercontent.com/7645519/47955002-1a24bf00-dfc4-11e8-9ce5-1435d69137a2.png)

Es una extensión para Leaflet, una librería de código abierto para mapas interactivos en JavaScript. Esta extensión agrega funcionalidad de enrutamiento y direcciones a tus mapas Leaflet, permitiéndote calcular y mostrar rutas entre diferentes ubicaciones en el mapa. Leaflet Routing Machine se utiliza comúnmente para crear aplicaciones web de mapas que incluyen funcionalidades de navegación y enrutamiento.

Nos ofrece algunas de las siguientes caracteristicas: 

- Enrutamiento de inicio a destino, con posibilidad de puntos vía.
- Agregar, Editar y eliminar puntos de referencia mediante la entrada de direcciones y el uso del mapa.
- Soporte de múltiples idioma
- Alta personalización

## Instalación

 Agregamos lo siguiente 

```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
<link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
```

Tambien se puede instalar utilizando npm, unicamente agregado: 

`
npm install --save leaflet-routing-machine
`
Y por ultimo importantando dentro de tu proyecto: 

```
import 'leaflet-routing-machine';  // Importa la extensión de Leaflet para enrutamiento.
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'; // Importa los estilos CSS para la extensión de enrutamiento.
```
## Leaflet-control-geocoder

Es una extensión para Leaflet, una librería de mapas interactivos en JavaScript, que proporciona una forma fácil de agregar controles de búsqueda y geocodificación a tus mapas Leaflet. Esta extensión es útil cuando deseas permitir a los usuarios buscar ubicaciones, introducir direcciones o nombres de lugares, y convertirlos en coordenadas geográficas en tu aplicación.


![](https://www.drupal.org/files/issues/2019-09-11/address_search_input_and_geocode_control.jpg)

## Instalación 

Para realizar la instalación con npm:

```
npm install leaflet-control-geocoder

```
Despues realizamos las importacion extras a tu proyecto. 

```
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'; // Importa los estilos CSS del geocodificador.
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'; // Importa la librería Leaflet-Geocoder.
```

# Muestra del trazado

Al agregar correctamente lo anteriormente mostrado el trazado de la ruta debe tener un parecido a lo siguiente: 

![](https://i.stack.imgur.com/iec9g.jpg)

# React Router

![](https://blog.karenying.com/static/b17f2b049068979741a79588250ad8cb/nav-bar-with-dot.png)

React Router es una librería de para React que facilita la navegación entre páginas para aplicaciones de una sola página.

## Instalación

Se instalará mediante npm con el siguiente comando.

`
npm install react-router-dom
`
Y por ultimo importantando dentro de tu proyecto: 

```
import {BrowserRouter} from 'react-router-dom' //Componente para gestionar la navegación de la aplicación.
import {Routes, Route} from 'react-router-dom' //Definición de las rutas.
import {Link} from 'react-router-dom' //Se utiliza para crear enlaces para navegar en la aplicación.
```


# Referencias
[React-leaflet](https://react-leaflet.js.org/) :fa-leaf:

[Nominatim](https://nominatim.org/) :fa-globe:

[Wiki de Openstreetmap](https://wiki.openstreetmap.org/) :fa-globe:

[Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/#about)

[React Router](https://reactrouter.com/en/main)

