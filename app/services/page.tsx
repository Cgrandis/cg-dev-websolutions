import Header from "./components/Header";
import Footer from "./components/Footer";
import { MousePointerClick, Users, ShoppingCart, Check } from "lucide-react";

const services = [
  {
    icon: MousePointerClick,
    title: "Landing Page",
    description: "A single, focused page designed to convert visitors into leads. It's the simplest, fastest, and most cost-effective way to establish a professional online presence.",
    features: [
      "Text, images, and video content",
      "Contact & lead capture forms",
      "Links to social media or other sites",
      "Blazing-fast performance",
    ],
    bestFor: "Professionals, small businesses, marketing campaigns, or validating a new idea."
  },
  {
    icon: Users,
    title: "SaaS Application",
    description: "A complex, secure software platform that provides a service to users. It involves user accounts, databases, and often tiered access levels.",
    features: [
      "User authentication (logins)",
      "Secure databases & data management",
      "Multi-user access levels",
      "Complex, interactive dashboards",
    ],
    bestFor: "Startups, established companies, and businesses offering a subscription-based software service."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Store",
    description: "A complete online retail solution. It includes all the complexity of a SaaS application, plus the specialized features required to sell products online.",
    features: [
      "Includes all SaaS features",
      "Secure payment processing",
      "Product & inventory management",
      "Shipment & order tracking",
    ],
    bestFor: "Businesses of any size looking to sell physical or digital products directly to consumers."
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-services-bg dark:bg-services-text text-services-text dark:text-services-bg">
      <Header />
      <main className="flex-grow">
        <section className="text-center py-20 sm:py-28 px-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-services-text dark:text-services-bg">
            What We Build
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-services-text-secondary dark:text-services-border">
            Understanding the right tool for the job is the first step to success. Explore our core offerings to find the perfect fit for your vision.
          </p>
        </section>

        <section className="pb-20 sm:pb-28 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col bg-white/50 dark:bg-services-text-secondary/20 border border-services-border rounded-lg shadow-sm p-8">
                  <div className="flex-shrink-0">
                    <service.icon className="h-10 w-10 text-services-text dark:text-services-bg" />
                    <h2 className="text-2xl font-bold mt-4 text-services-text dark:text-services-bg">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-services-text-secondary dark:text-services-border flex-grow">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-services-accent dark:text-services-accent flex-shrink-0 mt-1" />
                        <span className="dark:text-services-border">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-services-border">
                    <h3 className="font-semibold dark:text-services-bg">Best For:</h3>
                    <p className="mt-2 text-sm text-services-text-secondary dark:text-services-border">{service.bestFor}</p>
                  </div>
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