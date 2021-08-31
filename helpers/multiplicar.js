const fs = require('fs'); //FileSystem
const colors = require('colors');

const creadArchivo = async(base = 5,listar,hasta = 10) => {

    try 
    {
        let salida = ''; 
        let consola = ''; 

        for(let i=1;i<=hasta;i++)
        {
            salida += `${base} x ${i} = ${base*i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`;
        }

        //Si le es true imprimo
        if(listar)
        {
            console.log('=================='.green);
            console.log('tabla del:'.green, colors.blue(base));
            console.log('=================='.green);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        
        return `Tabla-${base}.txt`;
    }
    catch (error) 
    {
        throw error;
    }
    
    // catch 'error al crear archivo');
   
}

module.exports={
    creadArchivo
}





// const creadArchivo = (base = 5) => {

//     console.log('==================');
//     console.log('tabla del:',base);
//     console.log('==================');

//     return new Promise((resolve,rejects)=>
//     {
//         let salida = ''; 

//         for(let i=1;i<=10;i++)
//         {
//             salida += `${base} x ${i}=${base*i} \n`;
//         }

//         console.log(salida);

//         (fs.writeFileSync(`tabla-${base}.txt`,salida))
//         ?resolve(`Tabla-${base}.txt`)
//         : rejects('error al crear archivo');
//     }); 
// }

//==============================================================

// const creadArchivo = (base = 5) => {

//     console.log('==================');
//     console.log('tabla del:',base);
//     console.log('==================');

//     let salida ='';
//     for(let i=1;i<=10;i++)
//     {
//         salida += `${base} x ${i}=${base*i} \n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`,salida);

//     console.log(`Tabla-${base}.txt creado`);
// }