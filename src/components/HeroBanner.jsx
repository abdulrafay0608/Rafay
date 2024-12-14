import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const HeroBanner = () => {
  return (
    <div className="relative text-white w-full px-2">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="hidden absolute left-0 bottom-1/2 w-[30px] md:w-[50px] bg-orange-500 h-[40px] md:h-[80px] z-10 md:flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <IoIosArrowDropleftCircle className="text-lg md:text-3xl" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="hidden absolute right-0 bottom-1/2 w-[30px] md:w-[50px] bg-orange-500 h-[40px] md:h-[80px] z-10 md:flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <IoIosArrowDroprightCircle className="text-lg md:text-3xl" />
          </div>
        )}
      >
        {/* Slide 1 */}
        <div>
          <img
            src="https://quickresto.ru/static/partnersProgramm-30297fc79a1cdb583498bff2e9e65f0f.png"
            className="h-[70vh] md:h-[90vh] object-cover brightness-50"
          />
          <div className="text-left absolute top-1/2 -translate-y-[50%] left-[10px] md:left-[80px] md:px-2">
            <h2 className="text-white text-[40px] md:text-[60px] font-extrabold leading-tight">
              Empowering Your
              <span className="text-orange-500">
                {" "}
                Digital <br className="hidden sm:block" />
                Growth
              </span>
            </h2>
            <p className="font-normal text-sm sm:text-base md:text-lg mt-2">
              We deliver creative solutions, powerful strategies, and measurable
              results for your business.
            </p>
            <button className="mt-6 px-4 py-2 bg-orange-500 text-white font-semibold text-sm sm:text-base md:text-lg rounded-full hover:bg-black border hover:shadow-xl hover:scale-105 transition-all duration-300">
              Let’s Get Started
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <img
            src="https://www.kps.com/assets/images/627-353/627x353-business-process-leadership-next-generation-cfo-empathy.jpg/_jcr_content/renditions/cq5dam.web.1920.2890.jpeg"
            className="h-[70vh] md:h-[90vh] object-cover brightness-50"
          />
          <div className="text-left absolute top-1/2 -translate-y-[50%] left-[10px] md:left-[80px] md:px-2">
            <h2 className="text-white text-[40px] md:text-[60px] font-extrabold leading-tight">
              From <span className="text-orange-500">Vision</span> to Reality
            </h2>
            <p className="font-normal text-sm sm:text-base md:text-lg mt-2">
              We specialize in: <br /> 🔶 Web Development <br />
              🔶 Digital Marketing <br />
              🔶 Branding & Design <br />
              🔶 Content Creation
              <br />
              Partner with us to transform your ideas into success.
            </p>
            <button className="mt-6 px-4 py-2 bg-orange-500 text-white font-semibold text-sm sm:text-base md:text-lg rounded-full hover:bg-black border hover:shadow-xl hover:scale-105 transition-all duration-300">
              Discover Our Services
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <img
            src="https://brendaholley.com/wp-content/uploads/2022/11/AdobeStock_379435239-72dpi.jpg"
            className="h-[70vh] md:h-[90vh] object-cover brightness-50"
          />
          <div className="text-left absolute top-1/2 -translate-y-[50%] left-[10px] md:left-[80px] px-2">
            <h2 className="text-white text-[40px] md:text-[60px] font-extrabold leading-tight">
              Results That{" "}
              <span className="text-orange-500">
                Speak for <br className="hidden sm:block" />
                Themselves
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-2">
              Proven success with measurable growth for businesses across
              industries.
            </p>
            <button className="mt-6 px-4 py-2 bg-orange-500 text-white font-semibold text-sm sm:text-base md:text-lg rounded-full hover:bg-black border hover:shadow-xl hover:scale-105 transition-all duration-300">
              See Our Work
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
