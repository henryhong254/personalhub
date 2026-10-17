# Personal Hub — Hồng Thiên Ý

Website tĩnh trong `dist/`. Không cần cài thư viện để chạy.

Chạy xem tại máy: `python -m http.server 4173 --bind 127.0.0.1 --directory dist`

- `dist/index.html`: nội dung và các section.
- `dist/styles.css`: giao diện và bố cục responsive.
- `dist/script.js`: danh sách cột mốc. Điền thuộc tính `image` bằng đường dẫn ảnh trong `assets/` để thay các khung chữ. Không cần sửa bố cục.
- Các nút `data-destination` hiện có `disabled`, không URL, không sự kiện. Khi có link chính thức, đổi thành thẻ `a` và gắn href.
- Ảnh workshop được chú thích là khóa trước, không được dùng như bằng chứng kết quả của Bootcamp mới.
- Các ảnh nguồn ở thư mục cha được giữ nguyên.
