///tambah angka atau operator ke layar
function add(val) {
    display.value += val;
}

///hapus semua isi layar
function clearDisplay() {
    display.value = "";
}

///hitung hasil
function hitung() {
    display.value = eval(display.value); ///hitung ekspresi
}

///ubah ke persen
function percent() {
    display.value = parseFloat(display.value) / 100;
}

///ubah positif / negatif
function toggleSign() {
    display.value = display.value * -1;
}