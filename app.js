const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("formStatus");

// CHANGE THIS to your client's real WhatsApp number later
const whatsappNumber = "2349032020918";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    statusMessage.textContent = "Please fill in all required fields.";
    statusMessage.style.color = "red";
    return;
  }

  const whatsappMessage = `
Hello Sammy,

My name is ${name}.
Email: ${email}
Phone: ${phone}

Message:
${message}
  `;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

  statusMessage.textContent = "Redirecting to WhatsApp...";
  statusMessage.style.color = "green";

  form.reset();
});
