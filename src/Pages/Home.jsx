import AboutUs from "../Components/AboutUs";
import CustomerReview from "../Components/CustomerReview";
import BrandNames from "./BrandNames";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <div className="relative">
        <img
          className="w-full h-[818px] md:h-[818px] lg:h-[917px]"
          src="https://i.ibb.co/FqhF3Vp/wave-1.png"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto p-4">
            <p className="text-base md:text-xl lg:text-3xl mt-64 md:mt-80 lg:text-center">
              <span className="drop-shadow-lg font-medium ml-10 text-center">
                <span className="text-gray-200">Buy your favorite</span>{" "}
                <span className="text-orange-700">gadgets here...</span>
              </span>{" "}
              <br />
              <br />
              Discover and shop for the latest and greatest gadgets right here!
              Explore a world of innovation and find your favorite tech
              treasures. From cutting-edge electronics to must-have accessories,
              your next gadget obsession is just a click away.
            </p>
            <div className="mt-5 flex justify-center">
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search here…"
                    className="input input-bordered"
                  />
                  <button className="btn text-sky-700 bg-green-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand names */}

      <div>
      <h2 className="text-center font-bold text-3xl underline my-5 text-gray-500"> Brands </h2>
      <BrandNames />
      </div>
      
      <div>
        <AboutUs />
      </div>

      <div>
        <CustomerReview />
      </div>
    </div>
  );
};

export default Home;
