import { Link, useLoaderData } from "react-router-dom";

const BrandWiseProduct = () => {
  const loader = useLoaderData();

 

  return (
    <div className="max-w-7xl mx-auto">

{
   <>
  {loader.length > 0 && (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/fN8pgBP/Whats-App-Image-2023-10-20-at-11-07-26-PM-1.jpg" className="w-full h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/SN6mpqh/Whats-App-Image-2023-10-20-at-11-07-26-PM.jpg" className="w-full h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Y7ZFwFF/Whats-App-Image-2023-10-20-at-11-07-24-PM.jpg" className="w-full h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
      )}
  </>
}
  

      {/* <img src="https://i.ibb.co/fN8pgBP/Whats-App-Image-2023-10-20-at-11-07-26-PM-1.jpg" alt="" />
      <img src="https://i.ibb.co/SN6mpqh/Whats-App-Image-2023-10-20-at-11-07-26-PM.jpg" alt="" />
      <img src="https://i.ibb.co/Y7ZFwFF/Whats-App-Image-2023-10-20-at-11-07-24-PM.jpg" alt="" /> */}
      
     
      {loader.length === 0 && (
        <div className="text-center font-bold text-3xl my-5 text-gray-500">
        <div className="flex justify-center">
        <img className="w-96" src="https://i.ibb.co/NndXNGV/round-cross-mark-symbol-with-transparent-background-free-png.png" alt="" />
        </div>
          No Product Found Here
        </div>
      )}
      <div>
        <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0]">
          <section className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start ">
            {
            loader.map((data) => {
              return (
                <div key={data._id}>
                  <section className="h-[800px] p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img
                      className="h-96 md:h-80 lg:h-96 w-[350px] rounded-lg mx-auto object-cover"
                      src={data.image}
                      alt=""
                    />
                    <h1 className="text-xl font-bold my-5">
                      <span className="border-b-2 border-b-black">
                        Product Name:
                      </span>{" "}
                      {data.name}
                    </h1>
                    <p className="mb-5 text-2xl font-semibold">
                      Brand: {data.brand}
                    </p>
                    <p className="mb-5 text-2xl font-semibold">
                      Category: {data.type}
                    </p>
                    <h2 className="font-semibold text-xl mb-5">
                      Price: {data.price}$
                    </h2>
                    <h2 className="font-semibold mb-5">
                      Rating: {data.rating}★
                    </h2>
                    <div className="flex justify-center gap-5">
                      <Link to={`/detailsPage/${data._id}`}>
                      <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">
                        Details
                      </button>
                      </Link>
                      <Link to={`/updateProducts/${data._id}`}>

                      <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Update
                      </button>
                      </Link>
                    </div>
                  </section>
                </div>
              );
            })
            }
          </section>
        </section>
      </div>
    </div>
  );
};

export default BrandWiseProduct;
