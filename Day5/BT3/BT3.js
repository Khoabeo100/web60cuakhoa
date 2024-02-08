function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function guessNumber() {
    var randomNumber = getRandomNumber();
    var Doandung = false;

    do {
        var Doanxem = parseInt(prompt("Hãy đoán số từ 1 đến 10:"));

        if (Doanxem >= 1 && Doanxem <= 10) {
            if (Doanxem === randomNumber) {
                Doandung = true;
                alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber);
            } else {
                alert("Số bạn đoán không đúng. Hãy thử lại!");
            }
        } else {
            alert("Vui lòng nhập số từ 1 đến 10. Hãy thử lại!");
        }
    } while (!Doandung);
}

window.onload = function () {
    guessNumber();
};
