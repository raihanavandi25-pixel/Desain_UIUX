document.getElementById("ticketForm").addEventListener("submit", function (e) {
    e.preventDefault(); // cegah reload halaman

    let nama = document.getElementById("nama");
    let email = document.getElementById("email");
    let jam = document.getElementById("jam");
    let tujuan = document.getElementById("tujuan");
    let tiket = document.getElementById("tiket");

    // Reset error text & border
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");
    document.querySelectorAll("input, select").forEach(el => el.classList.remove("input-error"));

    let valid = true;

    // === VALIDASI NAMA ===
    if (nama.value.trim() === "") {
        document.getElementById("err_nama").innerHTML = "Nama wajib diisi!";
        nama.classList.add("input-error");
        valid = false;
    } else if (nama.value.length > 30) {
        document.getElementById("err_nama").innerHTML = "Maksimal 30 karakter!";
        nama.classList.add("input-error");
        valid = false;
    }

    // === VALIDASI EMAIL ===
    let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        document.getElementById("err_email").innerHTML = "Email wajib diisi!";
        email.classList.add("input-error");
        valid = false;
    } else if (!emailFormat.test(email.value)) {
        document.getElementById("err_email").innerHTML = "Format email tidak valid!";
        email.classList.add("input-error");
        valid = false;
    }

    // === VALIDASI JAM ===
    let jamFormat = /^([01]\d|2[0-3])\.[0-5]\d$/;
    if (jam.value.trim() === "") {
        document.getElementById("err_jam").innerHTML = "Jam wajib diisi!";
        jam.classList.add("input-error");
        valid = false;
    } else if (!jamFormat.test(jam.value)) {
        document.getElementById("err_jam").innerHTML = "Format jam harus 00.00 - 23.59!";
        jam.classList.add("input-error");
        valid = false;
    }

    // === VALIDASI TUJUAN ===
    if (tujuan.value === "") {
        document.getElementById("err_tujuan").innerHTML = "Tujuan harus dipilih!";
        tujuan.classList.add("input-error");
        valid = false;
    }

    // === VALIDASI TIKET ===
    let t = parseInt(tiket.value);
    if (isNaN(t) || t < 1 || t > 10) {
        document.getElementById("err_tiket").innerHTML = "Jumlah tiket 1 - 10!";
        tiket.classList.add("input-error");
        valid = false;
    }

    // === KALAU VALID TAMPILKAN DATA ===
    if (valid) {
        document.getElementById("hasil").innerHTML = `
            <h3>Data Pemesanan Tiket</h3>
            <b>Nama Pelanggan:</b> ${nama.value} <br>
            <b>Email:</b> ${email.value} <br>
            <b>Jam Keberangkatan:</b> ${jam.value} <br>
            <b>Tujuan:</b> ${tujuan.value} <br>
            <b>Jumlah Tiket:</b> ${tiket.value}
        `;
    }
});
