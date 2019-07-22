I. Hướng dẫn cài đặt
1. Vào thư mục của server local (www/htdoc) và mở termial tại thư mục đó
2. Gõ lệnh: 
    - git clone https://lab.admicro.vn/sungkv/snap-page-v1
    - cd snap-page-v1
3. Tạo databse với tên: snap_page_v1
4. Đổi tên file .env.example thành .env và thay đổi một số config
    - DB_CONNECTION=mysql
    - DB_HOST=yourhost
    - DB_PORT=3306
    - DB_DATABASE=snap_page_v1
    - DB_USERNAME=username
    - DB_PASSWORD=password
5. Mở lại terminal và gõ lệnh:
    - php artisan key:generate
    - php artisan migrate
    - php artisan db:seed
6. Đã cài project xong.

II. Hướng dẫn mở project trên máy local
1. Mở trình duyệt trên máy
2. truy cập qua localhost với đường dẫn: 127.0.0.1/{yourpath}/snap_page_v1/public