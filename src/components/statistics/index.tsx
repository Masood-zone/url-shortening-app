import {
  iconBrandRecognition,
  iconDetailedRecords,
  iconFullyCustomizable,
} from "../../assets/svg";

function Statistics() {
  return (
    <section className="container mx-auto px-4 py-16 mt-5">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Advanced Statistics
      </h2>
      <p className="text-center text-gray-400 mb-12 text-lg">
        Track how your links are performing across the web with <br />
        our advanced statistics dashboard.
      </p>
      <div className="flex flex-col h-auto md:flex-row justify-between items-center md:items-start relative max-md:space-y-16">
        {/* Horizontal line for larger screens */}
        <div
          className="absolute top-1/2 left-0 right-0 h-2 bg-teal-400 hidden md:block"
          style={{ top: "46%" }}
        ></div>

        {/* Vertical line for mobile screens */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-2 bg-teal-400 md:hidden"
          style={{ transform: "translateX(-50%)" }}
        ></div>
        {[
          {
            icon: iconBrandRecognition,
            title: "Brand Recognition",
            description:
              "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
          },
          {
            icon: iconDetailedRecords,
            title: "Detailed Records",
            description:
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
          },
          {
            icon: iconFullyCustomizable,
            title: "Fully Customizable",
            description:
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-8 max-w-sm relative ${
              index === 1 ? "md:mt-8" : index === 2 ? "md:mt-16" : ""
            }`}
          >
            <div className="bg-brand text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl mb-4 absolute -top-10">
              <img
                src={feature.icon}
                className=" object-contain"
                alt={feature.title}
              />
            </div>
            <div className="mt-9">
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-6">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
