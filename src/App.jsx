import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, Gamepad2, GraduationCap, FlaskConical, Github, Twitter } from 'lucide-react'

function Navbar() {
  return (
    <div className="w-full sticky top-0 z-20 backdrop-blur bg-white/50 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-300 via-violet-300 to-sky-300 shadow-inner" />
          <span className="font-extrabold tracking-wider text-gray-800 text-lg">
            ANIMELAB
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#gallery" className="hover:text-violet-600 transition-colors">Gallery</a>
          <a href="#about" className="hover:text-violet-600 transition-colors">About</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-sky-400 text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-95 transition"
          >
            Enter the Lab
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background gradient aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-violet-50 to-sky-50" />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-sky-300/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center pt-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 lg:py-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-violet-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wide">Pastel Anime Universe</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Brewed Dreams in a Beaker
            <span className="block bg-gradient-to-r from-violet-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
              Play. Learn. Imagine.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-gray-600">
            A whimsical 3D experience where sparkly potions swirl, lessons level up, and every click feels like magic. Rotate the beaker, explore the lab, and start your cozy adventure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#features" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-95 transition">
              Explore Features
            </a>
            <a href="#gallery" className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition">
              See Gallery
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Gamepad2 className="h-4 w-4 text-violet-500"/>Gaming vibes</div>
            <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-pink-500"/>Educational</div>
            <div className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-sky-500"/>Interactive</div>
          </div>
        </motion.div>

        {/* 3D Spline Scene */}
        <div className="relative h-[380px] sm:h-[500px] lg:h-[75vh] w-full rounded-2xl bg-gradient-to-br from-white via-violet-50 to-sky-50 shadow-xl border border-white/70">
          <Spline
            scene="https://prod.spline.design/lsFGaFqoD7t-tmSb/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft glass overlay at edges */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/50" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: Gamepad2,
      title: 'Playful Interactions',
      desc: 'Mouse-driven rotations, cute micro-animations, and cozy game-like feedback everywhere.'
    },
    {
      icon: GraduationCap,
      title: 'Learn as You Explore',
      desc: 'Turn lessons into potions. Mix concepts, unlock badges, and level up your skills.'
    },
    {
      icon: FlaskConical,
      title: 'Fantasy Lab Aesthetic',
      desc: 'Pastel glass, sparkly liquids, and soft shadows craft a soothing, dreamy vibe.'
    },
  ]

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-violet-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Made for cozy creativity</h2>
          <p className="mt-3 text-gray-600">Everything is soft, friendly, and interactive—perfect for anime-loving gamers and curious learners.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-2xl bg-white/80 backdrop-blur border border-white/70 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-200 to-sky-200 flex items-center justify-center shadow-inner">
                <it.icon className="h-6 w-6 text-violet-700" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const cards = [
    { title: 'Sparkly Potion', color: 'from-pink-200 to-pink-100' },
    { title: 'Arcane Vibes', color: 'from-violet-200 to-violet-100' },
    { title: 'Sky Drift', color: 'from-sky-200 to-sky-100' },
    { title: 'Candy Cloud', color: 'from-rose-200 to-rose-100' },
  ]

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Gallery</h2>
          <p className="mt-3 text-gray-600">Soft gradients and glossy glass—snapshots from our pastel world.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`aspect-[4/5] rounded-2xl bg-gradient-to-br ${c.color} p-4 shadow-md border border-white/70 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6),transparent_60%)]" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-semibold text-gray-800">{c.title}</span>
                <Sparkles className="h-4 w-4 text-violet-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white/70 border-t border-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} AnimeLab • Brewed with sparkles</p>
        <div className="flex items-center gap-4 text-gray-600">
          <a href="#" className="hover:text-gray-900 transition" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-900 transition" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  )
}
