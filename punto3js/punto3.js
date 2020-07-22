'usar estricto';
 


function getData(){ 
    let nombres=document.getElementById('nombre').value; 
    let edades=document.getElementById('edad').value;
    let correos=document.getElementById('correo').value; 
    let telefonos=document.getElementById('telefono').value;
    let profesiones=document.getElementById('profesion').value; 
    let direcciones=document.getElementById('direccion').value;
    
    let user= new Map();
    user.set('key', nombres)
    user.set('tiene:', edades)
    user.set('su correo es:', correos)
    user.set('su telefono:', telefonos)
    user.set('su direccion:', direcciones)
    user.set('user profesion:', profesiones)
    console.log(user)
}




/* function getData(){ 
    let nombres=document.getElementById('nombre').value; 
    let edades=document.getElementById('edad').value;
    let correos=document.getElementById('correo').value; 
    let telefonos=document.getElementById('telefono').value;
    let profesiones=document.getElementById('profesion').value; 
    let direcciones=document.getElementById('direccion').value;
    

let user="su nombre es:"+ nombres+
                ", con edad de: "+ edades+
                ", su numero de telefono es:"+ telefonos+
                ", su profesion es: "+ profesiones+
                ", correo: "+ correos+
                ", su direccion es:"+ direcciones;
                
 console.log(user)
} */