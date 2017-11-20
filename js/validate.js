(function(){

  const formulario = document.getElementById('formulario')
  const nombre = document.getElementById('nombre')
  const direcion = document.getElementById('direccion')
  const telefono = document.getElementById('telefono')
  const email = document.getElementById('email')
  const enviar = document.getElementById('enviar')
  const expresion = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i"

 


  /*let validarPromos = (e) => {
    let promos = $("[type='checkbox']").prop('checked')
    console.log(promos)
    if (promos != true){
      alert('Selecciona una promo')
      e.preventDefault()
    }
  }*/

  let validarNombre = (e) => {
    if(nombre.value == null || nombre.value.length < 8 || /^\s+$/.test(nombre.value)){
      alert('Ingresa un nombre válido! Debe tener más de 8 caracteres')
      e.preventDefault()
    }

  }

  let validarDireccion = (e) => {
    if(direccion.value == null || direccion.value.length < 14 || /^\s+$/.test(direccion.value)){
      alert('Ingresa una dirección válida')
      e.preventDefault()
    }
  }

  let validarTelefono = (e) => {
    if( telefono.value == 0){
      alert('Debe ingresar un número telefónico')
      e.preventDefault()
    } else{
      if(isNaN(telefono.value)){
        alert('Inserte un número válido')
        e.preventDefault()
      }
      else if( telefono.value.length < 7){
        alert('El número debe tener más de 7 digitos')
        e.preventDefault()
      } else if ( telefono.value.length > 14) {
        alert('El número debe tener menos digitos')
        e.preventDefault()
      }
    }
  }

  let validarEmail = (e) => {
    if(!(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value))){
      alert('Ingresa un email válido')
      e.preventDefault()
    }
  }



  let validar = (e)=>{
   //validarPromos(e)
    validarNombre(e)
    validarDireccion(e)
    validarTelefono(e)
    validarEmail(e)
  }


  enviar.addEventListener('click',validar)


}())
