const modal = document.getElementById("modalForm");
const contactsForm = document.getElementById("contact-Form");
const serviceForm = document.getElementById("serviceForm");

const elements = {
    botao: document.getElementById("btnAgendar"),
    btnModalSubmit: document.getElementById("btnSubmitModal"),
    btnEnviarContato: document.getElementById("btnSubmitForm"),
    formName: document.getElementById("nameForm"),
    formEmail: document.getElementById("emailForm"),
    formMessage: document.getElementById("messageForm"),
};

// Funções reutilizáveis
const toggleModal = (show) => {
    modal.style.display = show ? "flex" : "none"; // Exibe ou oculta o modal
};

const isEmpty = (...fields) => {
    return fields.some(field => !field.value.trim()); // Verifica se algum campo está vazio
};

// Eventos
elements.botao.addEventListener("click", () => toggleModal(true)); // Abre o modal

modal.addEventListener("click", function (event) { // Fecha o modal ao clicar fora do conteúdo
    if (event.target === modal) {
        modal.style.display = "none";
        toggleModal(false);
        
    }
    
});

elements.btnEnviarContato.addEventListener("click", (e) => {
    e.preventDefault();

    const { formName, formEmail, formMessage } = elements;

    if (isEmpty(formName, formEmail, formMessage)) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    alert(`Prezado(a) ${formName.value}, sua mensagem foi enviada!`);
    console.log("Email: ", formEmail.value, "Mensagem:", formMessage.value);

    e.target.closest("form").reset();
});

elements.btnModalSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if (!serviceForm.checkValidity()) { // Verifica se o formulário é válido
        alert("Preencha todos os campos do agendamento.");
        return;
    }

    alert("Serviço agendado com sucesso!");
    serviceForm.reset();
    toggleModal(false);
});