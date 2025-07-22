import React from "react";
import FeatureCard from "./FeatureCard"; 
import { 
  IoLocationSharp, 
  IoRocketSharp, 
  IoShieldCheckmarkSharp, 
  IoServerSharp, 
  IoInfiniteSharp, 
  IoSwapHorizontalSharp 
} from "react-icons/io5";

const businessHooks = [
  {
    id: "local",
    Icon: IoLocationSharp,
    title: "Local Dominance",
    description: "Be the first choice for customers in your area. We build to dominate local search and put you at the top of Google's results.",
  },
  {
    id: "speed",
    Icon: IoRocketSharp,
    title: "Speed is Money",
    description: "A one-second delay can cost you conversions. Our sites offer an instant experience that turns your clicks into cash.",
  },
  {
    id: "security",
    Icon: IoShieldCheckmarkSharp,
    title: "Fort Knox Security",
    description: "Protect your customers' data and your reputation with modern, server-side security that builds trust and ensures compliance.",
  },
  {
    id: "scale",
    Icon: IoServerSharp,
    title: "Beat the Rush",
    description: "From a media feature to a Black Friday rush, your site will scale instantly to handle peak traffic without crashing.",
  },
  {
    id: "future-proof",
    Icon: IoInfiniteSharp,
    title: "Future-Proof Your Business",
    description: "Don't get left behind by the next Google update. We use the tech Google prefers to keep you ahead of the curve.",
  },
  {
    id: "all-in-one",
    Icon: IoSwapHorizontalSharp,
    title: "All-in-One Platform",
    description: "Your marketing site, customer portal, and shop in one seamless, lightning-fast experience that amplifies your results.",
  },
];


const Features = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            An Unfair Advantage for Your Business
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            We don't just build websites; we build growth engines. Our approach leverages cutting-edge technology to deliver tangible business results.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {businessHooks.map((hook) => (
              <FeatureCard 
                key={hook.id} 
                icon={hook.Icon} 
                title={hook.title} 
                description={hook.description} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
