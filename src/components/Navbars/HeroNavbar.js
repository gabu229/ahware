import Link from "next/link";
import { Audiowide, Inter } from "next/font/google";

const headFont = Audiowide({ subsets: ["latin"], weight: ["400"] });

const HeroNavbar = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-screen">
        <nav className="w-full backdrop-blur-md md:absolute">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0 relative">
              <div className="sm:px-6 flex justify-between lg:w-max md:px-0">
                <Link
                  href="/"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    {/* logo here */}
                  </div>
                  <span className={`text-xl sm:text-2xl ${headFont.className}`}>
                    Ahware
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeroNavbar;
