const functions = require ('../src/index.js');
const mdLinks = (path, option = {}) => {
    return new Promise ((resolve, reject) => {
        const route = functions.absolutePath(path)

        if(!functions.existRoute(route)){
            reject('Path does not exist');
        } else {
                const validateMdFile= functions.mdRoute(route);
                if (validateMdFile.length === 0 ){
                    reject('There is no md files')
                }
                else{
                    const linksResult = functions.getLinks(route);
                    if(linksResult.length===0){
                        reject('there is no links')
                    }
                    else{
                            if(!(option.validate)){
                                resolve(linksResult);
                            } else {
                                const statusLink = functions.getLinksStatus(linksResult);
                                resolve(statusLink);
                            }
                        }
                }
        }
    });
}

/*const result = mdLinks('../prueba4.md', { validate: true })
result
.then((res)=> console.log(res))
.catch((err) => console.log(err));*/

module.exports= { mdLinks};
