import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import poster1 from '../assets/poster1.jpg'
import poster2 from '../assets/poster2.jpg'
import poster3 from '../assets/poster3.jpeg'
import poster4 from '../assets/poster4.jpg'
import poster5 from '../assets/poster5.jpg'
import poster6 from '../assets/poster6.jpg'
import poster7 from '../assets/poster7.jpg'
import poster8 from '../assets/poster8.jpg'
import poster9 from '../assets/poster9.jpg'
import poster10 from '../assets/poster10.jpg'
import poster11 from '../assets/poster11.jpg'
import poster12 from '../assets/poster12.jpg'

function Dashboard() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const movies = [
    { id: 1, img: poster1, title: "Seven Samurai" },
    { id: 2, img: poster2, title: "Das Boot" },
    { id: 3, img: poster3, title: "The Intouchables" },
    { id: 4, img: poster4, title: "V for Vendetta" },
    { id: 5, img: poster5, title: "Fight Club" },
    { id: 6, img: poster6, title: "Children of Heaven" },
    { id: 7, img: poster7, title: "The Godfather" },
    { id: 8, img: poster8, title: "Blood Diamond" },
    { id: 9, img: poster9, title: "City of God" },
    { id: 10, img: poster10, title: "The Hateful Eight" },
    { id: 11, img: poster11, title: "Life is Beautiful" },
    { id: 12, img: poster12, title: "The Shawshank Redemption" }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-red-600">

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 py-4 ${isScrolled ? 'bg-[#141414] shadow-xl' : 'bg-transparent'
          }`}
      >
        <h1 className="text-red-600 text-2xl md:text-3xl font-extrabold tracking-tighter">
          CINIFLIX
        </h1>

        <button
          onClick={handleLogout}
          className="bg-[#E50914] hover:bg-[#b20710] px-4 py-1.5 rounded-sm text-sm font-bold transition-all active:scale-95 shadow-lg"
        >
          Logout
        </button>
      </header>

      <section className="pt-32 pb-10 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Popular on Ciniflix</h2>
        <p className="text-gray-400 text-sm mb-8">Hand-picked cinematic masterpieces just for you.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group relative aspect-[2/3] cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:z-10 hover:scale-105 active:scale-100 shadow-md hover:shadow-2xl"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-sm font-bold leading-tight drop-shadow-md">
                  {movie.title}
                </span>
                <div className="mt-2 flex gap-2">
                  <button className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-sm hover:bg-gray-200">
                    Play
                  </button>
                  <button className="bg-gray-500/50 text-white text-[10px] font-bold px-2 py-1 rounded-sm backdrop-blur-md">
                    + List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 py-10 border-t border-white/10 text-center text-gray-500 text-xs">
        <p>&copy; 2026 CINIFLIX - Cinematic Experience</p>
      </footer>
    </div>
  );
}

export default Dashboard;