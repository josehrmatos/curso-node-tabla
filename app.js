const{creadArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

creadArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado!'))
.catch(err => console.log(err));



















// console.log(process.argv);
// console.log(argv);


// console.log('base:yargs',argv.b);
// const [,,arg3='base =5'] = process.argv;
// const [,base = 5] = arg3.split('=');
//mandar l aqui 

// console.log(base);

// const base = 5;



// (err)=>{

//     if(err)
//     {
//         console.log(err);
//         throw err;
//     }

//     console.log(`tabla-5${base}.txt creado`)

// }


