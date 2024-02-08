function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
     if(lastName==='' && firstName === '' && phone ===''){
      alert('Họ Tên và số điện thoại là bắt buộc. Vui lòng nhập đủ thông tin.');
    }
    else if(lastName==='' && firstName === ''){
      alert('Họ và Tên là bắt buộc. Vui lòng nhập đủ thông tin.');
    }
    else if (firstName === '') {
      alert('Họ là bắt buộc. Vui lòng nhập đủ thông tin.');
      }
     else if( phone === '' || phone.length<10 || phone.length>10) {
      alert('Số điện thoại không hợp lệ. Vui lòng nhập đủ thông tin.');
    
    }
    else if(lastName===''){
      alert('Tên là bắt buộc. Vui lòng nhập đủ thông tin.');
    }
    else{
      alert('Đăng ký thành công')
    }
  }

  function resetForm() {
    document.getElementById('registrationForm').reset();
}