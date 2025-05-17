"use client"
import Link from 'next/link';
import GameInfoPanel from '../../components/GameInfoPanel';
import { useSearchParams } from 'next/navigation';

const GAME_DATA = {
  'Баатар': {
    image: '/assets/DinoStart.png',
    alt: 'Баатар',
    playHref: '/game/baatar',
    name: 'Баатар',
    played: '4,936,733 тоглосон',
    rating: '★★★★☆',
    info: {
      title: 'Тоглоомын Танилцуулга',
      description: '"Баатар" бол эртний Монголын зоригт баатарын дүрд тоглох, адал явдалт хурдтай тоглоом юм. Энэхүү тоглоом нь алдартай Dino Run төрлийн тоглоомын орчин үеийн шийдэл бөгөөд онцлог нь тоглогч камерын тусламжтайгаар ам ангайлгасан баатрын үсэрч, ам хаах үедээ хэвийн байдалд эргэн ордог юм.',
      features: [
        'Монгол үндэсний баатрын дүртэй',
        'Сонирхолтой гүйдэг тоглоом',
        'Камерын удирдлагатай гар хуруугүй хяналтын систем',
        'Саад бэрхшээлийг даван туулж, хамгийн өндөр оноог авах сорилт',
        'Хурд нэмэгдэх тусам сэтгэл хөдөлгөм динамик орчин',
        'Хөгжилтэй, дадлага шаардсан тоглоомын явц',
      ],
      controls: [
        'Амаа ангайх – Баатар үсэрнэ',
        'Ам хаах – Баатар гүйх хэвийн байдалд шилжинэ',
      ],
    },
  },
  'Өнхрүүш': {
    image: '/assets/bayrlah_unhruush.png',
    alt: 'Үнэгүй Үнэрүүш тоглоом',
    playHref: '/game/unhruush',
    name: 'Үнэрүүш',
    played: '1,234,567 тоглосон',
    rating: '★★★☆☆',
    info: {
      title: 'Тоглоомын Танилцуулга',
      description: '"Үнэрүүш" бол хөгжилтэй, хурдтай, саадтай гүйдэг тоглоом юм. Тоглогч үнэгний дүрд хувирч, саад бэрхшээлийг даван туулж, хамгийн өндөр оноог авахыг зорьдог.',
      features: [
        'Үнэгний дүртэй',
        'Сонирхолтой гүйдэг тоглоом',
        'Саад бэрхшээлийг даван туулах сорилт',
        'Хөгжилтэй, дадлага шаардсан тоглоомын явц',
      ],
      controls: [
        'Space – Үсрэх',
        '↓ – Доош суух',
      ],
    },
  },
} as const;

type GameKey = keyof typeof GAME_DATA;

export default function GamePage() {
  const searchParams = useSearchParams();
  const gameName = (searchParams.get('name') as GameKey) || 'Баатар';
  const game = GAME_DATA[gameName] || GAME_DATA['Баатар'];

  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '30px',
        flexWrap: 'wrap',
      }}
    >
      {/* Зүүн талын зураг, нэр, тоглох товч, үнэлгээ */}
      <div
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '20px',
          padding: '32px',
          flex: 1.2,
          maxWidth: '700px',
        }}
      >
        <div
          style={{
            backgroundColor: '#f3f3f3',
            borderRadius: '30px',
            padding: '40px 20px 30px 20px',
            textAlign: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
          }}
        >
          <img
            src={game.image}
            alt={game.alt}
            style={{
              width: '220px',
              height: '220px',
              objectFit: 'contain',
              background: '#fff',
              borderRadius: '20px',
              border: '4px solid #e0e0e0',
              marginBottom: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}
          />
          <Link href={game.playHref}>
            <button
              style={{
                marginTop: '0',
                padding: '12px 48px',
                fontSize: '28px',
                fontWeight: 'bold',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                letterSpacing: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              }}
            >
              ТОГЛОХ
            </button>
          </Link>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '24px' }}>{game.name}</p>
          <p style={{ color: '#aaa', marginBottom: '5px' }}>{game.played}</p>
          <p style={{ color: '#FFD700', fontSize: '20px' }}>{game.rating}</p>

          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <button
              style={{
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              📌 Хадгалах
            </button>
            <button
              style={{
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              ✉️ Үнэлгээ өгөх
            </button>
          </div>
        </div>
      </div>

      {/* Баруун талын мэдээллийн самбар */}
      <div
        style={{
          flex: 2,
          minWidth: '300px',
          maxWidth: '400px',
        }}
      >
        <GameInfoPanel
          title={game.info.title}
          description={game.info.description}
          features={[...game.info.features]}
          controls={[...game.info.controls]}
        />
      </div>
    </div>
  );
}
