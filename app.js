// Xử lý form tạo namecard
function createNamecard() {
  // Lấy dữ liệu từ form
  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const phone = document.querySelector("input[name='phone']").value;
  const company = document.querySelector("input[name='company']").value;
  const position = document.querySelector("input[name='position']").value;
  const address = document.querySelector("input[name='address']").value;
  const website = document.querySelector("input[name='website']").value;

  // Tạo dữ liệu namecard
  const namecard = {
    name: name,
    email: email,
    phone: phone,
    company: company,
    position: position,
    address: address,
    website: website,
  };

  // Gửi dữ liệu lên server
  fetch("/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(namecard),
  })
    .then((response) => response.json())
    .then((data) => {
      // Nếu tạo thành công, hiển thị thông báo
      if (data.success) {
        alert("Tạo namecard thành công!");
      } else {
        // Nếu thất bại, hiển thị thông báo lỗi
        alert(data.error);
      }
    });
}

// Bắt sự kiện submit form
document.querySelector("form").addEventListener("submit", createNamecard);
