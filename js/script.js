const message = document.querySelector(".action > div > form");
const hero = document.querySelector(".hero > div >h1");

document.addEventListener("DOMContentLoaded", () => {
  let namaUser = prompt("Masukkan Nama Anda");
  while (namaUser.trim() === "") {
    namaUser = prompt("Masukkan Nama Anda");
    hero.innerHTML = `Hi ${namaUser}, Welcome To Website`;
  }

  hero.innerHTML = `Hi ${namaUser}, Welcome To Website`;
});

message.addEventListener("submit", (e) => {
  e.preventDefault();
  const gender = document.querySelector("input[name=gender]:checked");
  const nama = document.querySelector(
    ".action > div > form > input[type=text]"
  );
  const tanggalLahir = document.querySelector(
    ".action > div > form > input[type=date]"
  );
  const text = document.querySelector(".action > div > form > textarea");
  const messageReadOnly = document.querySelector(".action > div > textarea");
  if (
    nama.value === "" ||
    tanggalLahir.value === "" ||
    text.value === "" ||
    gender.value === ""
  ) {
    alert("Data Tidak Boleh Kosong");
    return;
  }

  const data = {
    nama: nama.value,
    tanggalLahir: tanggalLahir.value,
    text: text.value,
    gender: gender.value,
    tanggalKirim: new Date(),
  };

  messageReadOnly.innerHTML = `Current Time : ${data.tanggalKirim} 
  
Nama : ${data.nama}
Tanggal Lahir : ${data.tanggalLahir}
Jenis Kelamin : ${data.gender}
Pesan : ${data.text}`;
});
