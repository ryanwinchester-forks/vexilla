import type { ReactNode } from "react";

interface FeatureContent {
  title: string;
  description: string;
  image: ReactNode;
}
const features: FeatureContent[] = [
  {
    title: "Open Source",
    description: `Consume, contribute, or fork it. Vexilla is something you can take with you and improve or adapt to whatever situation you need.`,
    image: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },

  {
    title: "Static Hosting",
    description: `The feature flag configuration is statically hosted which saves you money and effort. It just scales.`,
    image: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-10 h-10"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
  },

  {
    title: "Simple",
    description: `Many of the existing solutions require you to buy into and understand complicated documentation. Other Open source tools require you to stand up servers and deal with all of the headache that entails.`,
    image: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
];

export function HomeFeatures() {
  return (
    <section className="text-normal body-font" id="features">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-emphasis mb-4">
            Features
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Besides just the things that feaure flags themselves offer, Vexilla
            allows you to do more with less.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {features.map((feature) => (
            <div
              className="p-4 md:w-1/3 flex flex-col text-center items-center"
              key={feature.title}
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-100 text-primary-500 mb-5 flex-shrink-0">
                {feature.image}
              </div>
              <div className="flex-grow">
                <h2 className="text-emphasis text-lg title-font font-medium mb-3">
                  {feature.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
