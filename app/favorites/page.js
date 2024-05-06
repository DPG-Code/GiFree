'use client'

import useAuth from '../hooks/useAuth'
import { useFavorites } from '../hooks/useFavorites'

export default function Favorites() {
  const { favorites } = useFavorites()
  const { user } = useAuth()

  return (
    <main className='min-h-screen flex flex-col items-center justify-start p-24'>
      <h2 className=''>Favorites</h2>
      {user?.user
        ? favorites.length > 0
          ? favorites.map((url, i) => (
              <img
                className='w-72 rounded-lg 2xl:rounded-xl'
                key={i}
                width='240'
                height='240'
                src={url}
                alt={url}
              />
            ))
          : 'Añade un Gif y se mostrará aquí'
        : 'Accede a tu cuanta para poder guardar tus Gifs'}
    </main>
  )
}
