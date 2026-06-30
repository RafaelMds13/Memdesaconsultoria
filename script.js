// Confirma que o site carregou
console.log("Site carregado ✅");

// Scroll suave no menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Confirma envio do formulário
function enviarFormulario() {
    setTimeout(() => {
        alert("Mensagem enviada com sucesso! ✅");
    }, 300);
}