import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Travel from "./components/travel"
import Footer from "./components/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Travel />
      <Footer />
    </main>
  );
}