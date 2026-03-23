// Seleciona o formulário
const form = document.querySelector("form");

// Evento de envio
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const mensagem = form.querySelector("textarea").value.trim();

    // Validação simples
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Validação de email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    // Sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa formulário
    form.reset();
});


// 🌙 Tema claro/escuro
const botaoTema = document.createElement("button");
botaoTema.textContent = "🌙 Alternar tema";
botaoTema.style.position = "fixed";
botaoTema.style.top = "10px";
botaoTema.style.right = "10px";

document.body.appendChild(botaoTema);

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
