// components/ProductCard.tsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProductCard({ name, price, colors, soldOut, index }: any) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="h-screen w-screen flex flex-col items-center justify-center snap-start px-6 relative"
    >
      {/* Replace with your actual product image */}
      <div className="w-full max-w-lg bg-purple-900 rounded-3xl p-8 shadow-2xl">
        <img src={`/products/${name.toLowerCase().replace(/ /g, '-')}.jpg`} alt={name} className="w-full" />
      </div>

      <h2 className="text-5xl md:text-7xl font-black text-yellow-amber-400 mt-8 tracking-tighter">
        {name}
      </h2>
      <p className="text-4xl md:text-6xl text-white mt-4">{price}</p>

      {soldOut ? (
        <div className="mt-8 px-12 py-6 bg-gray-900 rounded-full">
          <p className="text-red-500 text-3xl font-bold">SOLD OUT</p>
        </div>
      ) : (
        <button className="mt-8 px-16 py-8 bg-yellow-400 text-black rounded-full text-3xl font-black hover:scale-105 transition active:scale-95">
          COP IT
        </button>
      )}

      <div className="absolute top-8 right-8 bg-black/70 px-4 py-2 rounded-full">
        <p className="text-yellow-400 text-sm">🔥 2.3k watching</p>
      </div>
    </motion.section>
  );
}
