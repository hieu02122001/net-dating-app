# GUIDE

## 1. Khởi tạo dự án
- Xem template có sẵn
```
dotnet new --list
```
- Khởi tạo file sln
```
dotnet new sln -n DatingApp
```
- Khởi tạo file ignore
```
dotnet new ignore
```
- Khởi tạo webapi
```
dotnet new webapi -n DatingApp.API -o DatingApp.API
```
- Add project webapi đó vào sln
```
dotnet sln add DatingApp.API
```
- Cài Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.Design, Pomelo.EntityFrameworkCore.MySql ở Nuget

## 2. Các bước
- Tạo folder /Database/Entities -> Tạo các class
- Tạo file DataContext.cs ở /Database
- Thêm connection string vào file appsettings.Dev
```json
"ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=DatingApp;Trusted_Connection=True;"
  }
```
- Đăng ký database vào file Program.cs
```cs
// Add services to the container.
var serverVersion = new MySqlServerVersion(new Version(8, 0, 29));
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<DataContext>(options => 
    options.UseMySql(connectionString, serverVersion));
```
- Add Migrations
```
dotnet ef migrations add InitialDB -p ./DatingApp.API -o Database/Migrations
```
- Update vào DB
```
dotnet ef database update -p ./DatingApp.API/
```
## 3. Các lệnh của angular
- Tạo một angular app
```
ng new dating-app
```
- Chạy server
```
ng serve
```
- Tạo một component
```
ng g c navbar --skip-tests
```
- Tạo một service
```
ng g s _services/users --skip-tests
```