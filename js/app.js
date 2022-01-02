const contenedorForm = document.getElementById('contenedorForm')
let btnMinorista = document.getElementById('pedidoMinorista')


btnMinorista.addEventListener('click', ()=>{
    contenedorForm.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3 form-group">
                <label class="form-label">
                    Nombre y Apellido:
                </label>
                <input class="form-control" type="text" id="from_name">
                </input>
            </div>
            <div class="col-sm-6 col-sm-offset-3 form-group">
                <label class="form-label">
                    Nombre empresa:
                </label>
                <input class="form-control" type="text" id="from_name_business">
                </input>
            </div>
            <div class="col-sm-6 col-sm-offset-3 form-group">
                <label class="form-label">
                    Telefono:
                </label>
                <input class="form-control" type="number" id="from_number">
                </input>
            </div>
            <div class="col-sm-6 col-sm-offset-3 form-group">
                <label class="form-label">
                    Asunto:
                </label>
                <input class="form-control" type="text" id="subject">
                </input>
            </div>
            <div class="col-sm-6 col-sm-offset-3 form-group">
                <label class="form-label">
                    Fechas:
                </label>
                <input class="form-control" type="date" id="date">
                </input class="form-label">
            </div>
            <div class="col-sm-6 col-sm-offset-3 form-group">
                <label class="form-label">
                    Correo:
                </label>
                <input class="form-control" type="email" id="from_email">
                </input>
            </div>
            <div class="col-sm-6 col-sm-offset-3 form-group">
                <label class="form-label">
                    Pedido:
                </label>
                <textarea class="form-control" id="message">
                </textarea>
            </div>
            <div class="col-sm-6 col-sm-offset-3 form-group">
                <select id="selectPagos">
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="Tarjeta">Tarjeta</option>
                </select>
            </div>
            <div class="col-sm-6 m-5 col-sm-offset-3 text-center">
                <button class="btn btn-success" id="btnSubmit">
                    Enviar
                </button>
            </div>
        </div>
    </div>
    `
    const btnSubmit = document.getElementById('btnSubmit')

    btnSubmit.addEventListener('click', ()=>{
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
    
})

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


