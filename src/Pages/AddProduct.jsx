
const AddProduct = () => {
  return (

    <div className="max-w-[1320px] mx-auto">


                      <div className="bg-[#F4F3F0] rounded mt-32 mb-32 pb-16">
            <h1 className="font-Rancho text-6xl text-center">Add products</h1>
            <p className="font-Raleway mt-8 p-4 lg:px-48 mb-8 text-lg text-center">
              It is a long established fact that a reader will be distraceted by the
              readable content of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here.
            </p>
    
            {/* form */}
            <form>
            <div className="flex flex-col items-center lg:items-stretch">
    
    
    <div className="flex flex-col lg:flex-row justify-between">
                {/* name */}
                <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">Name</span>
                </label>
                <label className="input-group">
                  <input
                  name="name"
                    type="text"
                    placeholder="Enter Product name"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>
    
             {/* type */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">Image Link</span>
                </label>
                <label className="input-group">
                  <input
                  name="image"
                    type="text"
                    placeholder="Enter image link"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>
    </div>
    
    <div className="flex flex-col lg:flex-row justify-between">
                {/* Brand Name */}
                <div className="form-control lg:pl-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">Brand Name</span>
                </label>
                <label className="input-group">
                  <input
                  name="brand"
                    type="text"
                    placeholder="Enter Brand Name"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>

              
    
              {/* Price */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">Price</span>
                </label>
                <label className="input-group">
                  <input
                  name="price"
                    type="text"
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
                  <span className="label-text font-Raleway font-semibold text-xl">Short Description</span>
                </label>
                <label className="input-group">
                  <input
                  name="dexcription"
                    type="text"
                    placeholder="Type a short description"
                    className="md:w-[300px] xl:w-[500px] p-3 input-bordered"
                  />
                </label>
              </div>
    
              {/* Rating */}
              <div className="form-control lg:pr-36">
                <label className="label">
                  <span className="label-text font-Raleway font-semibold text-xl">Rating</span>
                </label>
                <label className="input-group">
                  <input
                  name="rating"
                    type="text"
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
                  <span className="label-text font-Raleway font-semibold text-xl">Image URL</span>
                </label>
                <label className="input-group">
                  <input
                  name="image"
                    type="text"
                    placeholder="Enter photo url"
                    className="md:w-[300px] lg:w-[740px] xl:w-[1000px] p-3 input-bordered"
                  />
                </label>
              </div>
    
    </div>
        
                 {/* submit button */}
    
                 <div className="flex justify-center">
                    <input type="submit" value='Add Products' className="btn bg-[#D2B48C] font-Rancho text-2xl mt-6 md:w-[300px] lg:w-[740px] xl:w-[1000px] border-black" />
                 </div>
    
    
    
    </div>
            </form>
          </div>
            </div>
  );
};

export default AddProduct;
