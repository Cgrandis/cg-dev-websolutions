import Header from "./components/Header";
import Footer from "./components/Footer"; 
import { IoShieldCheckmarkOutline, IoDocumentTextOutline, IoAnalyticsOutline } from "react-icons/io5";

export default function Page() {
  const features = [
    {
      Icon: IoDocumentTextOutline,
      title: "Automated Document Analysis",
      description: "Upload legal documents and our AI will extract key clauses, dates, and entities in seconds."
    },
    {
      Icon: IoShieldCheckmarkOutline,
      title: "Risk Assessment Score",
      description: "Receive a comprehensive risk score based on contract language, helping you identify potential issues."
    },
    {
      Icon: IoAnalyticsOutline,
      title: "Clause Comparison",
      description: "Compare clauses against industry standards or your own templates to ensure compliance and consistency."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-legal-bg text-legal-text">
      <Header />
      <main className="flex-grow">
        <section className="relative text-center py-24 sm:py-32 overflow-hidden">
           <div aria-hidden="true" className="absolute inset-0 z-0">
              <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(#A6A6A6_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="absolute inset-0 bg-legal-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
           </div>
           <div className="relative z-10 max-w-4xl mx-auto px-4">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-legal-accent">
                The Future of Legal Analysis
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-legal-text-secondary max-w-2xl mx-auto">
                Leverage AI to build, analyze, and manage legal document mockups with unparalleled speed and accuracy.
              </p>
              <div className="mt-10">
                  <a href="#" className="bg-legal-accent text-legal-bg font-bold px-8 py-3 rounded-md hover:bg-legal-accent-light transition-colors">
                      Start Building
                  </a>
              </div>
           </div>
        </section>

        <section className="py-16 sm:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-legal-bg-secondary p-6 rounded-lg border border-legal-text-secondary/20">
                            <feature.Icon className="h-8 w-8 text-legal-accent mb-4" />
                            <h3 className="text-xl font-semibold text-legal-text mb-2">{feature.title}</h3>
                            <p className="text-legal-text-secondary">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}