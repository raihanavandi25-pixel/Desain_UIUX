const inp_valas = document.getElementById('valas');
const inp_nilai = document.getElementById('nilai');
const inp_rupiah = document.getElementById('rupiah');

const kurs = {
    "usd": 9915,
    "sgd": 13472,
    "rm": 874,
    "yen": 120,
    "eur": 15888,
    "sar": 3592
};

function hitung_kurs() {
    const nilai = Number(inp_nilai.value);
    const valas = inp_valas.value;

    if (!nilai || !kurs[valas]) {
        inp_rupiah.value = "";
        return;
    }

    const rupiah = nilai * kurs[valas];
    inp_rupiah.value = rupiah.toLocaleString("id-ID");
}

inp_valas.addEventListener("change", hitung_kurs);
inp_nilai.addEventListener("input", hitung_kurs);
