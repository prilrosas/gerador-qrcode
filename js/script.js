const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const QrCodeImg = document.querySelector("#qr-code img");

// função
// Gerar Qr Code
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  QrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  QrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });
}

// Evento
// Apartir do click
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

// evento a apartir do enter
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

// Limpar a area do Qr Code
qrCodeInput.addEventListener("keyup", (e) => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
