# Амны илрэлтэй Динозавр Тоглоом

![Тоглоомын дэлгэцний агшин](public/screenshot.png)

Камер ашиглан амыг илрүүлж динозаврыг үсрүүлдэг интерактив тоглоом. Google Chrome-ийн оффлайн динозаврын тоглоомын AI хувилбар.

## Онцлог

- **Режимууд**: Камерын AI хяналт эсвэл гарын хяналт сонгох боломжтой
- **Динамик тоглолт**: Хурдны өсөлттэй, саад тотгоруудын түвшин нэмэгдэх
- **Крос платформ**: Ямар ч сервер шаардлагагүй, статик вэб хостинг дэмждэг

## Технологийн стек

**Frontend:**
- Next.js 14 (App Router)
- React 18
- MediaPipe Face Mesh
- Canvas API

**Backend:**
- Python FastAPI (optional)
- OpenCV
- Docker

**Development Tools:**
- ESLint + Prettier
- Git Version Control
- Vercel Hosting

## Суулгах заавар 

### Local хөгжүүлэлт

1. Репозиторийг клонлох:
```bash
git clone https://github.com/username/ai-dino-game.git
cd ai-dino-game

ai-dino-game/
├── backend/               # FastAPI серверийн код
│   ├── Dockerfile
│   ├── main.py
│   └── requirements.txt
├── frontend/              # Next.js клиент
│   ├── components/        # React компонентүүд
│   │   ├── FaceDetector.js
│   │   └── GameCanvas.js
│   ├── public/            # Статик ресурсууд
│   └── Dockerfile
├── docker-compose.yml     # Бүх сервисийн тохиргоо
└── README.md              # Төслийн баримтжуулалт
