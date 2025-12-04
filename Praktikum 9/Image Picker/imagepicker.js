const select = document.getElementById("imageSelect");
const preview = document.getElementById("preview");

select.addEventListener("change", function () {
    const filename = select.value;

    if (filename === "") {
        preview.innerHTML = "<span>Belum ada gambar</span>";
        return;
    }

    alert("Ini gambar " + filename);

    preview.innerHTML = `<img src="images/${filename}" alt="gambar">`;
});
