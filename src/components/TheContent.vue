<template>
  <div class="content">
    <div class="content-container">
      <div class="content-header">
        <form class="content-header-search">
          <input class="content-header-input" type="text" />
          <i class="content-header-search-icon icon"></i>
        </form>
        <div class="content-header-right">
          <button
            class="content-header-add button button-default cursor-pointer"
          >
            Thêm
          </button>
          <button class="content-header-export button cursor-pointer">
            Xuất khẩu
          </button>
          <button class="content-header-more button"></button>
        </div>
      </div>
      <div class="content-body">
        <div class="table-container">
          <table border="1px solid #d5d8e6" id="tb-employee-list">
            <thead>
              <tr class="table-header">
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">Số hiệu cán bộ</td>
                <td class="text-align-left">Họ và tên</td>
                <td class="text-align-center">Số điện thoại</td>
                <td>Tổ chuyên môn</td>
                <td>QL theo môn</td>
                <td>QL kho, phòng</td>
                <td class="text-align-center">Đào tạo QLTB</td>
                <td class="text-align-center">Đang làm việc</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">NV1234</td>
                <td class="text-align-left">Test1</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv5591122333</td>
                <td class="text-align-left">Mai Sơn Trà</td>
                <td class="text-align-center"></td>
                <td>Phòng sản xuất</td>
                <td>Phòng sản xuất</td>
                <td>Phòng sản xuất</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv559901674421</td>
                <td class="text-align-left">Hồ Văn ANh</td>
                <td class="text-align-center"></td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv55990167442</td>
                <td class="text-align-left">tryng</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv5599057441</td>
                <td class="text-align-left">Hồ Văn ANh</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv559</td>
                <td class="text-align-left">Mạnh Nguyễn A</td>
                <td class="text-align-center"></td>
                <td>Phòng đào tạo</td>
                <td>Phòng đào tạo</td>
                <td>Phòng đào tạo</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv559905744544</td>
                <td class="text-align-left">Nam đế</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv55990167447</td>
                <td class="text-align-left">Nam dương</td>
                <td class="text-align-center"></td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv5599057447</td>
                <td class="text-align-left">Quách Tĩnh</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv559905744</td>
                <td class="text-align-left">Dương Khang</td>
                <td class="text-align-center"></td>
                <td>Phòng đào tạo</td>
                <td>Phòng đào tạo</td>
                <td>Phòng đào tạo</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv4811</td>
                <td class="text-align-left">Mạnh Nguyễn</td>
                <td class="text-align-center"></td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv38947388</td>
                <td class="text-align-left">Mai Sơn Trà</td>
                <td class="text-align-center"></td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv88374984</td>
                <td class="text-align-left">Đào Dương</td>
                <td class="text-align-center"></td>
                <td>Phòng sản xuất</td>
                <td>Phòng sản xuất</td>
                <td>Phòng sản xuất</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv6600</td>
                <td class="text-align-left">to van tai</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv076393</td>
                <td class="text-align-left">Nguyen ngoc</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv55990265444762</td>
                <td class="text-align-left">nam abc</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv5599016744277</td>
                <td class="text-align-left">Nguyen quang manh</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">NV22012000</td>
                <td class="text-align-left">Mai Sơn Trà 2345</td>
                <td class="text-align-center"></td>
                <td>Phòng đào tạo</td>
                <td>Phòng đào tạo</td>
                <td>Phòng đào tạo</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nvaung1</td>
                <td class="text-align-left">nvaung</td>
                <td class="text-align-center"></td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv0393113</td>
                <td class="text-align-left">nvaung</td>
                <td class="text-align-center"></td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv267</td>
                <td class="text-align-left">to van tai</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv9956</td>
                <td class="text-align-left">ádasasdas</td>
                <td class="text-align-center"></td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td>Phòng tuyển sinh</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-align-center"><input type="checkbox" /></td>
                <td class="text-align-center">nv55990265444761</td>
                <td class="text-align-left">Loằng tà loằng ngoằng</td>
                <td class="text-align-center"></td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td>Phòng nhân sự</td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    src="../../assets/Icons/ic_Check.png"
                    width="25"
                    height="25"
                  />
                </td>
                <td class="text-align-center">
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Edit.png"
                    width="25"
                    height="25"
                  />
                  <img
                    class="cursor-pointer"
                    src="../../assets/Icons/ic_Remove.png"
                    width="25"
                    height="25"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="content-footer">
        <div class="content-footer-container">
          <div class="content-footer-first-page content-footer-icon"></div>
          <div class="content-footer-pre-page content-footer-icon"></div>
          <div class="content-footer-page">1</div>
          <div class="content-footer-next-page content-footer-icon"></div>
          <div class="content-footer-last-page content-footer-icon"></div>
          <div>1/2 trang</div>
          <div class="totol-teacher">(56 giáo viên)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheContent",
};
</script>

<style scoped>
@import url(../../css/layout/content.css);
@import url(../../css/layout/content_footer.css);
@import url(../../css/layout/header.css);
</style>
