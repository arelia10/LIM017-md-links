# Markdown Links
![md-links](https://ibb.co/16fkjTM)
Mdlinks-Claudia es una librería creada a través de [Node.js](https://nodejs.org/), que lee y analiza archivos
en formato `Markdown`, para verificar los links que contiene y reportar algunas estadísticas, como el total y los links rotos.

## Instrucciones de uso
Instale la libreria ingresando:

`npm i mdlinks-areli10`

##### Modo de uso
* Podrá ingresar dos opciones: *--validate*, *--stats*  y/o *--validate --stat* o ninguna de ellas
* Para ejecutarlo en el terminal: md-links <path> [options] 
* ejemplo:
```sh
*md-links prueba/prueba2.md --validate*
href: https://www.linkedin.com/feed/
text: https://www.linkedin.com/feed/                                 d
file: C:\Users\Arel\Documents\GitHub\LIM017-md-links\prueba\prueba2.mprueba\prueba2.md
status: 200
message: ok  
```
```sh
*md-links prueba4.md --stats* 
 md-links prueba4.md --stats
Total: 1 Unique: 1
```
```sh
*md-links prueba4.md --validate --stats*
 md-links prueba4.md --validate --stats
Total: 1 
    Unique: 1
    Broken: 1
 ```

## 4. Herramientas usadas
* [File System](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#file-system)
* [Path module](https://nodejs.org/dist/latest-v17.x/docs/api/path.html)
* [Node-fetch](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#file-system)
* [Marked](https://www.npmjs.com/package/marked)

## 5. Autor
* [Areli Ceopa- Laboratoria LIM 017](https://github.com/arelia10)