import { useLoaderData } from "react-router-dom";


const BrandNames = () => {

    const brandLoader = useLoaderData();
    console.log(brandLoader);


    return (
        <div>
         
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 cursor-pointer">
        {
            brandLoader.map((brand) => (
            <div key={brand._id} className="card mx-4 bg-base-100 shadow-xl image-full">
                <figure><img src={brand?.brand_image} alt={brand?.brand_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold absolute left-[40%] bottom-6 drop-shadow-2xl">{brand?.brand_name}</h2>
                </div>
            </div>
        ))
        }
    </div>
        </div>
    );
};

export default BrandNames;