const { mdLinks } = require('../src/md-links.js');
const path = require('path');

const mdLinksReject = [
  {
    href: 'https://www.linkedin.com/feed/',
    text: 'https://www.linkedin.com/feed/',
    file: path.resolve('prueba/prueba2.md')
  }
]


const mdLinksWithStatus = [
 
  {
    href: 'https://www.google.com/404',
    text: 'https://www.google.com/404',
    file: path.resolve('prueba4.md'),
    status: 404,
    message: 'fail'
  }
]


describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('debe retornar un mensaje, advirtiendo que la ruta no existe', ()=>{
      const resultado = mdLinks('prueba4.md')
      resultado.then((res)=> expect(res).toStrictEqual('Path does not exist')).catch((rej)=>rej);
  });
  it('debe retornar un mensaje, advirtiendo que no hay archivos .md', ()=>{
    const resultado = mdLinks('src')
    resultado.then((res)=> expect(res).toStrictEqual('There is no md files')).catch((rej)=>rej);
  });
  it('debe retornar un mensaje, advirtiendo que no hay links', ()=>{
    const resultado = mdLinks('prueba/prueba1.md')
    resultado.then((res)=> expect(res).toStrictEqual('There is no links')).catch((rej)=>rej);
  });
  it('debe retornar en un array de objetos con las propiedades de los links, pertenecientes solo a archivos .md de la ruta que se ingresa, cuando no ha sido validado (options)', () => {
      const resultado = mdLinks(('prueba'),{ validate: false });
      resultado.then((res) => expect(res).toStrictEqual(mdLinksReject));
  });
  it('debe retornar en un array de objetos con las propiedades de los links más sus status pertenecientes solo a archivos .md de la ruta que se ingresa si ha sido validado (options)', () => {
      const resultado = mdLinks(('prueba4.md'),{ validate: true });
      resultado.then((res) => expect(res).toStrictEqual(mdLinksWithStatus));
  });

});
