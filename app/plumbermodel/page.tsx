import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function PlumberPage() {
  return (
    <div className="flex flex-col min-h-screen bg-plumber-bg-light dark:bg-plumber-text-dark text-plumber-text-dark dark:text-plumber-text-light">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}