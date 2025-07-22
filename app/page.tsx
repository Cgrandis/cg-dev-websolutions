import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Step Into the Future of the Web.
              </h2>
              <p className="text-xl font-light">
                The digital landscape is always evolving. 
                We build your online presence on a foundation that's ready for tomorrow's 
                challenges—faster, more secure, and perfectly optimized for the next 
                wave of search engines and user expectations.                
              </p>
              <p className="text-xl font-light mt-6">
                In today's market, your website is your most important asset. 
                We don't just build pages; we craft high-performance digital experiences 
                that look stunning on every device, load instantly, and turn visitors into 
                loyal customers.                
              </p>
            </>
          }
          rightHalf={
              <Image 
                src={"/products/webpage.jpeg"} 
                alt="A futuristic web browser interface showcasing a modern website."
                width={800} 
                height={450}
                className="w-full md:w-full h-auto rounded-xl shadow-lg"
                quality={75} 
                priority 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
          }
        />
        <Customers />
        <Section
          leftHalf={
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Your Questions, Answered.
              </h2>
              <p className="text-xl font-light mt-4">
                We believe in transparency. Here are answers to common questions about our process, technology, and how we deliver value to your business.
              </p>
            </div>
          }
          rightHalf={
            <Accordion />
          }
        />
      </main>
      <Footer />
    </div>
  );
}
