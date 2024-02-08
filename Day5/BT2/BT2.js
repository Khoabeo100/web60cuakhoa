function Kiemtrachanle (so) {
    if (so % 2 === 0) {
        return "Số " + so + " là số chẵn.";
    }
    else {
        return "Số " + so + " là số lẻ.";
    }
}

var Socankiemtra = prompt("Nhập số cần kiểm tra");

document.write(Kiemtrachanle(Socankiemtra));
