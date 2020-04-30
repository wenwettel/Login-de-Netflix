// validar formulario

const inputs = document.querySelectorAll('form .campo input');


//Listener a los inputs
/*en este caso no funciona un eventListener cuando es un array(nodeList)*/

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});


inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});

function validarInput(e) {
   
    const estado = ['valido', 'no-valido'];

    let clase;
    if(e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }

    //para remover la clase una vez que se llene el input
    e.target.classList.remove(...estado);

    //para el label
    e.target.nextElementSibling.classList.remove(...estado);

    // para agregarle la clase al input
    e.target.classList.add(clase);

    //para el label
    e.target.nextElementSibling.classList.add(clase);
    

    //inyectar dinamicamente el div con el error
    if (clase === 'no-valido') {
        if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
             //construir un mensaje de error
             const errorDiv = document.createElement('div');
             errorDiv.appendChild( document.createTextNode('Este campo es obligatorio'));
             errorDiv.classList.add('alerta');

             //insertar error
             e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling );  
        }

    } else {
        //limpiar el error existente 
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
     }
}

//Mostrar y ocular Password

const mostrarPasswordBtn = document.querySelector('form .campo span');

mostrarPasswordBtn.addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');

    if(e.target.classList.contains('mostrar')){
        //mostrar texto
        e.target.classList.remove('mostrar');
        //cambiar el texto
        e.target.textContent = 'Mostar';

        // cambiamos a password
        passwordInput.type = 'password';

    }else {
        //mostrar el password
        e.target.classList.add('mostrar');
        //cambiar el texto
        e.target.textContent = 'Ocultar';

        // cambiamos a password
        passwordInput.type = 'text';
    }
})

