# Hải Sản Biển Việt — Client

Giao diện web cho nhân viên vận hành nhà hàng: theo dõi bàn, đặt chỗ, xử lý đơn hàng và thanh toán. Frontend gọi API riêng qua biến môi trường `NEXT_PUBLIC_API_URL`.

## Chức năng

- Theo dõi bàn theo trạng thái: trống, đang phục vụ hoặc đã đặt.
- Tìm kiếm, lọc và xem chi tiết bàn.
- Tạo, đổi bàn, nhận khách hoặc hủy đặt chỗ.
- Mở đơn cho bàn, thêm món, theo dõi trạng thái món và thanh toán.
- Tìm kiếm, lọc danh sách đơn và xem chi tiết từng đơn.

Trang gốc `/` chuyển đến `/tables`. Giao diện mặc định dùng tiếng Việt.

## Công nghệ

- Next.js 16 và React 19
- TypeScript
- Material UI
- TanStack Query để tải và cập nhật dữ liệu API
- Zustand để quản lý một số trạng thái giao diện
- Tailwind CSS

## Yêu cầu

- Node.js và npm
- API backend đang chạy

## Chạy local

Cài dependency:

```bash
npm ci
```

Tạo file `.env.local` ở thư mục gốc và đặt địa chỉ API. Ví dụ khi backend chạy ở cổng `3000`:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Frontend thêm các đường dẫn như `/tables`, `/orders`, `/dishes` và `/reservations` vào URL này, vì vậy hãy đặt URL gốc, không thêm dấu `/` ở cuối.

Khởi động giao diện ở cổng `3001`:

```bash
npm run dev -- --port 3001
```

Mở `http://localhost:3001`. Nếu API chạy ở cổng khác, cập nhật `NEXT_PUBLIC_API_URL` rồi khởi động lại Next.js.

## Các lệnh khác

```bash
npm run build
npm run start -- --port 3001
npm run lint
npm run typecheck
```

## Triển khai

Ứng dụng có thể triển khai trên Vercel. Cấu hình `NEXT_PUBLIC_API_URL` trong môi trường deploy và bảo đảm backend cho phép CORS từ domain frontend.

Demo hiện có: [ain-no-purojekuto-client-gamma.vercel.app](https://ain-no-purojekuto-client-gamma.vercel.app)
