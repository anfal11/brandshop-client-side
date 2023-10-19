import { useLoaderData } from "react-router-dom";


const BrandWiseProduct = () => {
    const loader = useLoaderData();
    console.log(loader);
    return (
        <div>
            length: {loader.length}
        </div>
    );
};

export default BrandWiseProduct;