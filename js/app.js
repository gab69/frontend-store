

const btn1=document.querySelector("#btn")
btn1.addEventListener("click", agregar);

function agregar(){
    let cantidad=(document.querySelector("#cantidad")).value;

    if(cantidad<=0){
        alert("Ingrese un valor valido");
    }else{
        alert("Producto agregado");
    }
}