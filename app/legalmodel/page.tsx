import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Hero from "./components/Hero";
import Features from "./components/Features";
import ImageWithText from "./components/ImageWithText";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-legal-bg text-legal-bg dark:text-legal-text">
      <Header />
      <main className="flex-grow">        
        <Hero />
        <Features />
        <ImageWithText />
      </main>
      <Footer />
    </div>
  );
}