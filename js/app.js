const contenedorForm = document.getElementById('contenedorForm')

    const btnSubmit = document.getElementById('btnSubmit')

    btnSubmit.addEventListener('click', (e)=>{
        e.preventDefault()
        let datos = {
         nombre: document.getElementById('from_name').value,
         empresa: document.getElementById('from_name_business').value,
         telefono: document.getElementById('from_number').value,
         asunto: document.getElementById('subject').value,
         email: document.getElementById('from_email').value,
         mensaje: document.getElementById('message').value,
         metodoPago: document.getElementById('selectPagos').value,
        }
        console.log(datos);

        enviarEmail(datos)
    })
    
// })

function enviarEmail(datos) {
        var data = {
            service_id: 'service_587qnht',
            template_id: 'template_isnaw6t',
            user_id: 'user_WLyYGWyyqbiWsSDZn4FQH',
        template_params: {
            from_name: datos.nombre,
            from_email: datos.email,
            from_number:datos.telefono,
            from_name_business: datos.empresa,
            subject: datos.asunto,
            message: datos.mensaje,
            from_pago:datos.metodoPago
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Your mail is sent!');
        contenedorForm.innerHTML=''
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}


