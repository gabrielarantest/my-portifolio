
function sendMail() {
    const name = document.getElementById('InputName').value;
    const email = document.getElementById('InputEmail').value;
    const phone = document.getElementById('InputPhone').value;
    const subject = document.getElementById('InputSubject').value;
    const message = document.getElementById('InputMessage').value;

    // Formatando o corpo do e-mail
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;

    // Criando o link mailto
    window.location.href = `mailto:gabriel_arantes_t@hotmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  }