import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const type = form.get("type");
    const brand = form.get("brand");
    const price = form.get("price");
    const description = form.get("description");
    const rating = form.get("rating");
    const image = form.get("image");

    const data = { name, type, brand, price, description, rating, image };

    fetch(
      `https://brand-shop-server-side-k045thmoo-anfal11.vercel.app/updateProduct/${product._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product Updated Successfully!");
          navigate(-1);
        }
      });
  };

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="bg-[#bcc7c1] rounded mt-32 mb-32 pb-16">
        <h1 className="font-Rancho text-6xl text-center pt-10">
          Update product
        </h1>
        <p className="font-Raleway mt-8 p-4 lg:px-48 mb-8 text-lg text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        {/* form */}
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col items-center lg:items-stretch">
            <div className="flex flex-col lg:flex-row justify-between">
              {/* name */}
              <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="name"
                    type="text"
                    defaultValue={product.name}
                    placeholder="Enter Product name"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>

              {/* type */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Type
                  </span>
                </label>
                <label className="input-group">
                  <select
                    name="type"
                    defaultValue={product.type}
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  >
                    <option value="">Select a type</option>
                    <option value="phone">Phone</option>
                    <option value="watch">Watch</option>
                    <option value="headphone">Headphone</option>
                    <option value="laptop">Laptop</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
              {/* Brand Name */}
              <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Brand Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="brand"
                    type="text"
                    defaultValue={product.brand}
                    placeholder="Enter Brand Name"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>

              {/* Price */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Price
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="price"
                    type="text"
                    defaultValue={product.price}
                    placeholder="Enter Price"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
              {/* Short Descrption */}
              <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Short Description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="description"
                    type="text"
                    defaultValue={product.description}
                    placeholder="Type a short description"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>

              {/* Rating */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Rating
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="rating"
                    type="text"
                    defaultValue={product.rating}
                    placeholder="Enter Rating"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
              {/* photo */}
              <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">
                    Image URL
                  </span>
                </label>
                <label className="input-group">
                  <input
                    name="image"
                    type="text"
                    defaultValue={product.image}
                    placeholder="Enter photo url"
                    className="md:w-[300px] lg:w-[740px] xl:w-[1000px] p-3 input-bordered"
                  />
                </label>
              </div>
            </div>

            {/* submit button */}

            <div className="flex justify-center">
              <input
                type="submit"
                value="Update Product"
                className="btn bg-[#d1e0ee] font-Rancho text-2xl mt-6 md:w-[300px] lg:w-[740px] xl:w-[1000px] border-black"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
