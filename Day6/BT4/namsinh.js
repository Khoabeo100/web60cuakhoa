function validateForm() {
    var ngay = document.getElementById('ngay').value;
    var thang = document.getElementById('thang').value;
    var nam = document.getElementById('nam').value;

    var ngaySinh = new Date(nam, thang - 1, ngay);
    var ngayHienTai = new Date();

    if (ngaySinh > ngayHienTai) {
        document.getElementById('ngaysinhError').innerText = 'Ngày sinh không được vượt quá ngày hiện tại.';
        return false;
    } else {
        document.getElementById('ngaysinhError').innerText = '';
        return true;
    }
}



function populateDateDropdowns() {
    var ngayDropdown = document.getElementById('ngay');
    var thangDropdown = document.getElementById('thang');
    var namDropdown = document.getElementById('nam');

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; 
    var currentDay = currentDate.getDate();

    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        ngayDropdown.add(option);
    }

    for (var i = 1; i <= 12; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        thangDropdown.add(option);
    }


    for (var i = 1900; i <= currentYear; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        namDropdown.add(option);
    }

    ngayDropdown.value = currentDay;
    thangDropdown.value = currentMonth;
    namDropdown.value = currentYear;
}

populateDateDropdowns();