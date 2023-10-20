import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";

const DetailsPage = () => {
  const loader = useLoaderData();
  console.log(loader);
  const {user} = useContext(AuthContext);

  const handleAddToCart = async () => {
    try {
      const response = await fetch(`https://brand-shop-server-side-k045thmoo-anfal11.vercel.app/myCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loader),
      });
      if (response.ok) {
        
        toast.success("Product Added to Cart.");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div>
      <section className="container mx-auto p-10 md:p-20 antialiased h-screen flex justify-center items-center">
        <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
          <img
            className="w-full max-h-[400px] object-cover md:w-52"
            src={loader.image}
            alt={loader.name}
          />
          <div className="">
            <div className="p-5 pb-10">
              <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                {loader.name}
              </h1>
              <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                {loader.description}
              </p>
            </div>
            <div className="bg-blue-50 p-5">
              <div className="sm:flex sm:justify-between">
                <div>
                  <div className="flex-col-reverse items-center">
                    <div>Rating: {loader.rating} ★</div>
                    <div>Brand: {loader.brand}</div>
                  </div>
                </div>
               {/* `/myCart/${loader._id}` */}
      <input onClick={user && handleAddToCart} value='Add to Cart' type="submit" className="cursor-pointer mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md"/>
       
      
 
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DetailsPage;
