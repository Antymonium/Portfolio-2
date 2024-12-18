
// Toggle Menu (abre/fecha o menu de navegação)
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('active');
}

// Efeito do botão do currículo virar uma bolinha durante o scroll
document.addEventListener("DOMContentLoaded", () => {
    const botaoCurriculo = document.getElementById("botao-curriculo");
    const textoCurriculo = document.getElementById("texto-curriculo");
    let timeout = null;

    window.addEventListener("scroll", () => {
        // Ocultar apenas o texto rapidamente
        textoCurriculo.classList.add("oculto");

        // Manter o comportamento da bolinha
        botaoCurriculo.classList.add("bolinha");

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            botaoCurriculo.classList.remove("bolinha");
            textoCurriculo.classList.remove("oculto"); // Reexibe o texto após parar
        }, 300);
    });
});



// Controle do botão "Voltar ao Topo"
document.addEventListener("DOMContentLoaded", () => {
    const botaoTopo = document.getElementById("btn-topo");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            botaoTopo.style.display = "flex";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// Botão Recomeçar e Formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formContato');
    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#email');
    const mensagemInput = document.querySelector('#mensagem');
    const nomeErro = document.querySelector('#nome-erro');
    const emailErro = document.querySelector('#email-erro');
    const mensagemErro = document.querySelector('#mensagem-erro');
    const botaoEnviar = document.querySelector('#enviar');
    const botaoRecomecar = document.querySelector('#recomecar');

    // Função para resetar o formulário
    function recomeçarFormulario() {
        // Limpar os valores dos campos
        nomeInput.value = '';
        emailInput.value = '';
        mensagemInput.value = '';

        // Limpar mensagens de erro
        nomeErro.textContent = '';
        emailErro.textContent = '';
        mensagemErro.textContent = '';

        // Remover classes de erro
        nomeInput.classList.remove('erro-input');
        emailInput.classList.remove('erro-input');
        mensagemInput.classList.remove('erro-input');

        // Desabilitar o botão "Enviar" novamente
        botaoEnviar.disabled = true;
    }

    // Evento para o botão Recomeçar
    botaoRecomecar.addEventListener('click', recomeçarFormulario);

    // Validação para o campo Nome
    function validarNome() {
        const nomeValor = nomeInput.value.trim();
        if (nomeValor === '') {
            nomeErro.textContent = 'O campo Nome não pode ficar vazio.';
            nomeInput.classList.add('erro-input');
            return false;
        } else if (nomeValor.length > 50) {
            nomeErro.textContent = 'O campo Nome deve conter no máximo 50 caracteres.';
            nomeInput.classList.add('erro-input');
            return false;
        } else {
            nomeErro.textContent = '';
            nomeInput.classList.remove('erro-input');
            return true;
        }
    }

    // Validação para o campo Email
    function validarEmail() {
        const emailValor = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValor === '') {
            emailErro.textContent = 'O campo Email não pode ficar vazio.';
            emailInput.classList.add('erro-input');
            return false;
        } else if (!emailRegex.test(emailValor)) {
            emailErro.textContent = 'Insira um endereço de e-mail válido.';
            emailInput.classList.add('erro-input');
            return false;
        } else {
            emailErro.textContent = '';
            emailInput.classList.remove('erro-input');
            return true;
        }
    }

    // Validação para o campo Mensagem
    function validarMensagem() {
        const mensagemValor = mensagemInput.value.trim();

        if (mensagemValor === '') {
            mensagemErro.textContent = 'O campo Mensagem não pode ficar vazio.';
            mensagemInput.classList.add('erro-input');
            return false;
        } else if (mensagemValor.length > 300) {
            mensagemErro.textContent = 'O campo Mensagem deve conter no máximo 300 caracteres.';
            mensagemInput.classList.add('erro-input');
            return false;
        } else {
            mensagemErro.textContent = '';
            mensagemInput.classList.remove('erro-input');
            return true;
        }
    }

    // Função para verificar os campos e habilitar o botão Enviar
    function verificarCampos() {
        const nomeValido = validarNome();
        const emailValido = validarEmail();
        const mensagemValida = validarMensagem();

        if (nomeValido && emailValido && mensagemValida) {
            botaoEnviar.disabled = false;
        } else {
            botaoEnviar.disabled = true;
        }
    }

    // Eventos de input para validação em tempo real
    nomeInput.addEventListener('input', verificarCampos);
    emailInput.addEventListener('input', verificarCampos);
    mensagemInput.addEventListener('input', verificarCampos);

    // Eventos de blur para validação ao sair dos campos
    nomeInput.addEventListener('blur', validarNome);
    emailInput.addEventListener('blur', validarEmail);
    mensagemInput.addEventListener('blur', validarMensagem);

    // Validação final no envio do formulário
    form.addEventListener('submit', (e) => {
        const nomeValido = validarNome();
        const emailValido = validarEmail();
        const mensagemValida = validarMensagem();

        if (!nomeValido || !emailValido || !mensagemValida) {
            e.preventDefault(); // Impede o envio do formulário
        }
    });
});

