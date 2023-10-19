import { Link, useLoaderData } from "react-router-dom";

const BrandWiseProduct = () => {
  const loader = useLoaderData();
  //   console.log(loader);


  return (
    <div>
      <div className="my-20">advertisemnt</div>
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
