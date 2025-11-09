# Hướng dẫn Deploy lên Vercel

## Environment Variables cần thiết

Bạn **PHẢI** thêm các biến môi trường sau trên Vercel trước khi deploy:

### 1. Sanity Configuration (BẮT BUỘC)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-10-10
SANITY_VIEWER_TOKEN=your_viewer_token_here
```

### 2. Email Configuration (Nếu dùng form feedback)
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
```

## Cách thêm Environment Variables trên Vercel

1. Vào **Vercel Dashboard** → Chọn project của bạn
2. Vào **Settings** → **Environment Variables**
3. Thêm từng biến một:
   - **Key**: Tên biến (ví dụ: `NEXT_PUBLIC_SANITY_DATASET`)
   - **Value**: Giá trị của biến
   - **Environment**: Chọn cả 3 (Production, Preview, Development)
4. Sau khi thêm xong, **Redeploy** project

## Cách lấy thông tin Sanity

1. Vào https://sanity.io/manage
2. Chọn project của bạn
3. Vào **Settings** → **API**
4. Lấy:
   - **Project ID** → `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - **Dataset** → `NEXT_PUBLIC_SANITY_DATASET` (thường là "production")
   - **API Version** → `NEXT_PUBLIC_SANITY_API_VERSION` (mặc định: "2025-10-10")
5. Tạo **Viewer Token**:
   - Vào **API** → **Tokens** → **Add API token**
   - Chọn quyền **Viewer**
   - Copy token → `SANITY_VIEWER_TOKEN`

## Lưu ý quan trọng

- ⚠️ **KHÔNG** commit file `.env` lên GitHub (đã được ignore)
- ✅ **PHẢI** thêm tất cả biến môi trường trên Vercel
- ✅ Sau khi thêm biến môi trường, phải **Redeploy** để áp dụng

