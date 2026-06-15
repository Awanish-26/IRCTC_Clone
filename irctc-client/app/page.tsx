import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Travel from "./components/travel"
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Travel />
      <Footer />
    </div>
  );
}