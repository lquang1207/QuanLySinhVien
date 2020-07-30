//tao doi tuong service tuong tac backend
var svService = new SinhVienService();
//hien thi danh sach sinh vien
var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();
  promise
    .then(function (res) {
      //Tao ds Sinh Vien
      var tbody = "";
      for (let i = 0; i < res.data.length; i++) {
        tbody += `<tr>
        <td>${res.data[i].MaSV}</td>
        <td>${res.data[i].HoTen}</td>
        <td>${res.data[i].Email}</td>
        <td>${res.data[i].SoDT}</td>
        <td>${res.data[i].DiemToan}</td>
        <td>${res.data[i].DiemLy}</td>
        <td>${res.data[i].DiemHoa}</td>
        <td></td>
      </tr>`;
      }
      document.getElementById("tblSinhVien").innerHTML = tbody;
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err, err.response.data);
    });
};

renderSinhVien();

//Them moi sinh vien
var themSinhVien = function () {
  //get thong tin sinh vien tu GUI
  var newSinhVien = new SinhVien();
  newSinhVien.MaSV = document.getElementById("MaSV").value;
  newSinhVien.HoTen = document.getElementById("HoTen").value;
  newSinhVien.Email = document.getElementById("Email").value;
  newSinhVien.SoDT = document.getElementById("SoDT").value;
  newSinhVien.DiemToan = document.getElementById("DiemToan").value;
  newSinhVien.DiemLy = document.getElementById("DiemLy").value;
  newSinhVien.DiemHoa = document.getElementById("DiemHoa").value;
  //console.log(newSinhVien);
  let promise = svService.themMoi(newSinhVien);
  promise
    .then(function (res) {
      //save successfully
      console.log(res.data);
      renderSinhVien();
    })
    .catch(function (error) {
      console.log("Error", error);
      alert("Thêm sinh viên không thành công!" + error);
    });
};

//Lay Thong Tinh Sinh Vien
var timSinhVien = function (masv) {
  let promise = svService.layThongTinSinhVien(masv);
  promise
    .then(function (res) {
      console.log("Tim sinh vien ", res.data);
      return res.data;
    })
    .catch(function (error) {
      console.log("Error", error);
    });
};
