"use client"
import GameCard from '../components/GameCard'
import Link from 'next/link'

export default function Home() {
  const games = [
    {
      title: "Баатар",
      image: "/assets/DinoStart.png",
      rating: 4,
    },
    {
      title: "Өнхрүүш",
      image: "/assets/bayrlah_unhruush.png",
      rating: 5,
    },

  ];
  return (
    <div style={{ padding: '30px', color: '#fff' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Тоглоомууд</h1>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {games.map((game, index) => (
          <Link key={index} href={`/game?name=${encodeURIComponent(game.title)}`}>
            <GameCard
              title={game.title}
              image={game.image}
              rating={game.rating}
              onClick={() => console.log(`${game.title} clicked`)}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}