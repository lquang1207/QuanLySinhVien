//File lien ket voi backend

var SinhVienService = function () {
  this.themMoi = function (sinhVien) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/ThemSinhVien",
      method: "POST",
      data: sinhVien,
    });
  };
  this.xoa = function (maSV) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/" + maSV,
      method: "DELETE",
    });
  };
  this.capNhat = function (sinhVien) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien",
      method: "PUT",
      data: sinhVien,
    });
  };
  this.layDanhSachSinhVien = function () {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
      method: "GET",
    });
  };
  this.layThongTinSinhVien = function (maSV) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/" + maSV,
      method: "GET",
    });
  };
};
