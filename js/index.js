const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

//Eventos
function generationQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando QRCode...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "QR code concluído";
    qrCodeBtn.style.backgroundColor = "#4BB543";
  });
}

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generationQrCode();
  }
});

qrCodeBtn.addEventListener("click", () => {
  generationQrCode();
});

//Limpar área do QR CODE

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR code";
  }
});
