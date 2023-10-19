
import { useEffect } from "react";
import {  Link, useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';


const BrandNames = () => {

    const brandLoader = useLoaderData();

    // console.log(brandLoader.brand_name);

     useEffect(() => {
        fetch("http://localhost:5000/addProduct/",{
            method: "GET",
        })
        .then(res => res.json())
        .then(data => {
        
            console.log(data);
         
        })
    },[])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/addProduct/${_id}`, {
    //         method: "GET",
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
         
    //     })

    // }, [])

    

    return (
        <div>
         

         
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
  {brandLoader.map((brand) => (
    <Link to={`/BrandWise/${brand}`} key={brand._id}>
      <div className="cursor-pointer h-[300px] card mx-4 bg-base-100 shadow-xl image-full">
        <figure><img src={brand?.brand_image} alt={brand?.brand_name} /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold absolute left-[40%] bottom-6 drop-shadow-2xl">{brand?.brand_name}</h2>
        </div>
      </div>
    </Link>
  ))}
</div>


        </div>
    );
};

BrandNames.propTypes = {
    brand_name: PropTypes.string,
    brand_image: PropTypes.string,
}
export default BrandNames;