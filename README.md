SPA с авторизацией на JWT, возможность добавления товаров с изображениями, пагинация + сортировка + фильтрация на стороне сервера

Как запустить?

1. Клонируй репозиторий
2. Перейди в папку client и установи зависимости "npm install"
3. Перейди в папку server и установи зависимости "npm install"
4. Открой pgAdmin и создай новую БД
5. Копируй .env.example и назови его .env, внеси данные для подключения к БД - логин, пароль и имя БД
6. В папке сервера выполни npx prisma generate и далее npx prisma db push
7. Запусти клиент командой "npm run dev"
8. Запусти сервер командой "npm run start:dev"
9. Открой в браузере http://localhost:5173/
10. Пользуйся

![1](https://github.com/user-attachments/assets/41933a78-2b78-4f54-ab31-a12bbb05bd80)

![2](https://github.com/user-attachments/assets/21950e8c-f4ef-4caf-9535-77faa2fa89e3)

![3](https://github.com/user-attachments/assets/fea147ba-9953-43ae-80e3-dccdc72d306f)

![4](https://github.com/user-attachments/assets/4511756b-9eb4-4e2e-b019-98cb4e7d1145)

![5](https://github.com/user-attachments/assets/9d2d3862-fa29-4164-8b7b-8816bc2a3fe6)
