
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const BrandNames = () => {
    const [brand, setBrand] = useState([]);
    const brandLoader = useLoaderData();

    // console.log(brandLoader.brand_name);

     useEffect(() => {
        fetch("http://localhost:5000/addProduct/",{
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBrand(data);
         
        })
    },[])

    // useEffect(() => {
    //     fetch('http://localhost:5000/addProduct/brand', {
    //         method: "GET",
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setProducts(data);
    //     })

    // }, [])

    

    const brandClick = () => {
        console.log("brand clicked");
       


    }


    return (
        <div>
         

         <Link to={`/${brandLoader.brand_name}`}>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {
            brandLoader.map((brand) => (
            <div onClick={brandClick} key={brand._id} className="cursor-pointer card mx-4 bg-base-100 shadow-xl image-full">
                <figure><img src={brand?.brand_image} alt={brand?.brand_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold absolute left-[40%] bottom-6 drop-shadow-2xl">{brand?.brand_name}</h2>
                </div>
            </div>
        ))
        }
    </div>
</Link>
        </div>
    );
};

export default BrandNames;