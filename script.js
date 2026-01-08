document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const data = new FormData(this);
  const subject = encodeURIComponent("Contacto Epicur Solutions");
  const body = encodeURIComponent(
    `Nombre: ${data.get("name")}
Email: ${data.get("email")}

Mensaje:
${data.get("message")}`
  );

  window.location.href =
    `mailto:guillermorodrigo00@gmail.com?subject=${subject}&body=${body}`;
});
