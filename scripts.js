document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName('accordion-title');
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }

    // Manejar el formulario de inicio de sesión
    var loginForm = document.getElementById('login-form');
    var errorMessage = document.getElementById('error-message');
    var studentInfo = document.getElementById('student-info');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var curp = document.getElementById('curp').value;
        var matricula = document.getElementById('matricula').value;

        if (curp === 'SAHA070528HVZLRLA2' && matricula === '221620239-6') {
            // Esconder el formulario de inicio de sesión y mostrar la información del estudiante
            loginForm.style.display = 'none';
            studentInfo.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            // Mostrar mensaje de error
            errorMessage.style.display = 'block';
        }
    });
});
