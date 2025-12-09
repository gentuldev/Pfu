// app/page.tsx
import { Countdown } from './components/Countdown';
import ProductCard from './components/ProductCard';

const products = [
  { name: "FLAME RUGBY SHIRT", price: "£89", colors: ["Yellow Flame", "Purple Flame"], soldOut: false },
  { name: "PATENT LEATHER CARGO SHORTS", price: "£115", colors: ["Black"], soldOut: true },
  { name: "GLOSS BOMBER", price: "£179", colors: ["Black"], soldOut: false },
  // add the rest
];

export default function Home() {
  return (
    <>
      <Countdown />
      <main className="min-h-screen bg-[#1a0006] text-white overflow-x-hidden">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} index={i} />
        ))}
        {/* Fake "Load More" that never ends */}
        <div className="h-screen flex items-center justify-center">
          <p className="text-yellow-400 text-3xl animate-pulse">MORE DROPPING SOON...</p>
        </div>
      </main>
    </>
  );
}
