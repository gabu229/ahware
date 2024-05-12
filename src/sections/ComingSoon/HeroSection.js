import { Audiowide, Inter } from "next/font/google";
import ShowcaseMarquee from "@/components/Marquees/ShowcaseMarquee";
import WaitlistForm from "@/components/Forms/WaitlistForm";

const headFont = Audiowide({ subsets: ["latin"], weight: ["400"] });

const HeroSection = () => {
  return (
    <>
      <div className="absolute left-0 top-0 -z-30 w-full max-w-[100vw]">
        <ShowcaseMarquee />
      </div>
      <section className="min-h-screen w-full px-2 max-w-[100vw] bg-gradient-to-b from-black/65 to-black to-80% backdrop-blur-[8px]">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="w-full text-center">
            <h1
              className={`text-2xl sm:text-3xl md:text-5xl font-bold max-w-screen-md mx-auto leading-loose ${headFont.className}`}
            >
              A non stop growing repository of tech tools.
            </h1>

            <p className="text-base text-gray-300 my-6">
              For creatives, professionals and enthusiasts.
            </p>
          </div>

          <div className="w-full my-5">
            <div className="w-auto max-w-sm px-3 py-2 mx-auto my-8 rounded-full border border-gray-500 text-center">
              <p className="text-sm text-gray-300">
                We are going live soon. Be the first to know when we launch. 🚀
              </p>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
