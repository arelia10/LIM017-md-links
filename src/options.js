//Obtener el total de links
const totalLinks = (arrayLinks) => arrayLinks.map((el) => el.href).length;

//Obtener los links únicos dentro de la lista del array que fueron encontrados en el path
const uniqueLinks = (arrayLinks) => {
    const linksSet = new Set ([]);// almacena valores únicos irrepetibles
    arrayLinks.forEach((element) => linksSet.add(element.href));
    return linksSet.size
};
//Obtener los links rotos dentro de la lista del array que fueron encontrados en el path
const brokenLinks = (arrayLinks) => {
    const broken = arrayLinks.filter((e)=> e.message=== 'fail');
    return broken.length;
};


const help= `
────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────                                                        ────
─────────────▄▀▄─────▄▀▄────────────────────            ¿ＮＥＣＥＳＩＴＡＳ  ＡＹＵＤＡ？
────────────▄█░░▀▀▀▀▀░░█▄───────────────────                                                        ────
────────▄▄──█░░░░░░░░░░░█──▄▄───────────────     --validate : Obtienes el href, title, status y     ────
───────█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█──────────────                  message de cada link.                 ────
███████╗██████╗ ██████╗  █████╗ ██████╗─────        --stats : Obtienes como resultado               ────
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗────                  Total (total de links) y              ────
█████╗  ██████╔╝██████╔╝██║  ██║██████╔╝────                  Unique (total de links únicos).       ────
██╔══╝  ██╔══██╗██╔══██╗██║  ██║██╔══██╗────                                                        ────
███████╗██║  ██║██║  ██║╚█████╔╝██║  ██║────     --validate --stats : Obtienes como resultado       ────
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ ╚═╝  ╚═╝────                          Total, Unique y Broken        ────
────────────────────────────────────────────                          (total de links fail).        ────
────────────────────────────────────────────                                                        ────
────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────────────────────────────────`

const about = `


            ███╗   ███╗██████╗     ██╗     ██╗███╗   ██╗██╗  ██╗███████╗
            ████╗ ████║██╔══██╗    ██║     ██║████╗  ██║██║ ██╔╝██╔════╝
            ██╔████╔██║██║  ██║    ██║     ██║██╔██╗ ██║█████╔╝ ███████╗
            ██║╚██╔╝██║██║  ██║    ██║     ██║██║╚██╗██║██╔═██╗ ╚════██║
            ██║ ╚═╝ ██║██████╔╝    ███████╗██║██║ ╚████║██║  ██╗███████║
            ╚═╝     ╚═╝╚═════╝     ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
            ____________________________________________________________

            It is a command line interface (CLI) that helps the user to 
            check if the Mark down (md) files contain links and if they 
            work or not. Created by Juana LC, my repository:
            https://github.com/arelia10/LIM017-md-links.git
            ____________________________________________________________`

module.exports = {totalLinks, uniqueLinks, brokenLinks, help, about};