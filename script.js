
const players = document.getElementById("players");

for (let i = 1; i <= 5; i++) {
  players.innerHTML += `
    <label>Pemain ${i} - Nama</label>
    <input type="text" placeholder="Nama pemain ${i}" required>

    <label>Pemain ${i} - ID dan Server</label>
    <input type="text" placeholder="ID (Server)" required>
  `;
}

document.getElementById("registrationForm")
.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Form berhasil diisi! Penyimpanan data belum diaktifkan.");
});
