const messages = {
    EMPTY_PASSWORD: "Vui lòng nhập mật khẩu!",
    EMPTY_COFIRM_PASSWORD: "Vui lòng nhập mật khẩu xác nhận!",
    EMPTY_USER_NAME: "Vui lòng nhập tên đăng nhập!",
    EMPTY_NAME: "Vui lòng nhập họ tên!",
    CHECK_SPECIAL_CHARCTERS: "Không được chứa kí tự đặc biệt và khoảng trắng!",
    COMPARE_PASSWORD: "Mật khẩu xác nhận không trùng khớp!",
    CHECK_PHONE: "Sai định dạng số điện thoại",
    WRONG_PASSWORD: "Mật khẩu của bạn không chính xác!",
    WRONG_ACCOUNT: "Tài khoản không tồn tại!",
    GET_FIELD_LENGTH: (min, max) => {
        return `Độ dài phải từ ${min} đến ${max} kí tự!`;
    }
}