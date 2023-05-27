const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
if (event.type === 'touchstart') event.preventDefault();
const nav = document.getElementById('nav');
nav.classList.toggle('active');
const active = nav.classList.contains('active');
event.currentTarget.setAttribute('aria-expanded', active);
if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
} else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
}
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o formulário
    var form = document.querySelector("form");

    // Adicionar um ouvinte de evento de envio ao formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impedir o envio padrão do formulário

        // Limpar erros anteriores
        var errorElement = document.getElementById("form-errors");
        errorElement.style.display = "none";
        errorElement.innerHTML = "";

        // Obter os valores dos campos de entrada
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Validar os campos de entrada
        var errors = [];

        if (name.trim() === "") {
            errors.push("Por favor, digite seu nome.");
        }

        if (email.trim() === "") {
            errors.push("Por favor, digite seu e-mail.");
        } else if (!validateEmail(email)) {
            errors.push("Por favor, digite um e-mail válido.");
        }

        if (message.trim() === "") {
            errors.push("Por favor, digite sua mensagem.");
        }

        // Exibir erros, se houver
        if (errors.length > 0) {
            errorElement.style.display = "block";
            errors.forEach(function(error) {
                errorElement.innerHTML += "<p>" + error + "</p>";
            });
        } else {
            // Enviar o formulário (implemente a lógica de envio aqui)
            alert("Formulário enviado com sucesso!"); // Apenas um exemplo, você pode personalizar essa ação
            form.reset(); // Limpar os campos do formulário
        }
    });

    // Função para validar o formato de e-mail
    function validateEmail(email) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }
});
