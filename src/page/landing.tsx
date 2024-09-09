import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ShortenURL from "../components/shorten-url";
import Statistics from "../components/statistics";
import AdBanner from "../components/banner";
import { illustrationWorking } from "../assets/svg";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="">
        <div className="bg-white">
          {/* Hero */}
          <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-5 ">
            {/* Text content */}
            <div className="md:w-full mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                More than just shorter links
              </h1>
              <p className="text-xl text-gray-500 mb-8">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
              <button className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-600">
                Get Started
              </button>
            </div>
            {/* Image */}
            <div className="md:w-full">
              <img
                src={illustrationWorking}
                alt="Person at desk"
                className="w-full object-cover"
              />
            </div>
          </section>
        </div>
        <div className="bg-gray-200 py-10">
          {/* Shorten URL */}
          <ShortenURL />
          {/* Features */}
          <Statistics />
        </div>
        {/* Ad Banner  */}
        <AdBanner />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
