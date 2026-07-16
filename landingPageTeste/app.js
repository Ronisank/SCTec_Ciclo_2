const botao = document.getElementById("btnAgendar");
const btnModalSubmit = document.getElementById("btnSubmitModal");
const botaoFechar = document.getElementById("btnCloseModal");
const btnEnviarContato = document.getElementById("btnSubmitForm");
const formName = document.getElementById("nameForm");
const formEmail = document.getElementById("emailForm");
const formMessage = document.getElementById("messageForm");

botao.addEventListener("click", () => {
    document.getElementById("modalForm").style.display = "flex";
});

botaoFechar.addEventListener("click", () => {
    document.getElementById("modalForm").style.display = "none";
});

btnEnviarContato.addEventListener("click", (e) => {
    e.preventDefault();
    if (!formName.value || !formEmail.value || !formMessage.value) {
        alert("Por favor, preencha todos os campos antes de enviar a mensagem.");
        return;
    }
    else{
        alert("Prezado(a) " + formName.value + ", sua mensagem foi enviada com sucesso! Em breve entraremos em contato pelo email: " + formEmail.value);
        console.log("Mensagem:" + formMessage.value);
        document.getElementById("contactForm").reset();
    }
});

btnModalSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!document.getElementById("serviceForm").checkValidity()) {
        alert("Por favor, preencha todos os campos do formulário de agendamento.");
        return;
    }
    else{
        alert("Serviço agendado com sucesso!");
        document.getElementById("serviceForm").reset();
        document.getElementById("modalForm").style.display = "none";
    }
});
