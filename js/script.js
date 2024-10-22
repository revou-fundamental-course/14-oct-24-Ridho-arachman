const message = document.querySelector(".action > div > form");
const nama = document.querySelector(".action > div > form > input[type=text]");
const tanggalLahir = document.querySelector(
  ".action > div > form > input[type=date]"
);
const text = document.querySelector(".action > div > form > textarea");
const messageReadOnly = document.querySelector(".action > div > textarea");
const hero = document.querySelector(".hero > div >h1");

document.addEventListener("DOMContentLoaded", () => {
  const namaUser = prompt("Masukkan Nama Anda");
  hero.innerHTML = `Hi ${namaUser}, Welcome To Website`;
});

message.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    nama: nama.value,
    tanggalLahir: tanggalLahir.value,
    text: text.value,
    tanggalKirim: new Date(),
  };
  messageReadOnly.innerHTML = `Current Time : ${data.tanggalKirim} 
  
Nama : ${data.nama}
Tanggal Lahir : ${data.tanggalLahir}
Pesan : ${data.text}`;
});
