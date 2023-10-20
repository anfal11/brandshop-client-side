import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const MyCart = () => {

    const loader = useLoaderData();
    console.log(loader);

    const handleDelete = async (id) => {
        console.log(id);
        try {
            const response = await fetch(`http://localhost:5000/myCart/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                alert("Product Deleted Successfully");
                window.location.reload();
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-4">

        {
            loader.map( cart => (
                <div key={cart._id}>
                <div className="card h-[500px] shadow-lg compact bg-base-100">
                <figure>
                    <img src={cart.image} alt="" />
                </figure>
                <div className="justify-between card-body">
                    <h2 className="card-title">{cart.name}</h2>
                    <div className="justify-between card-actions">
                    <div className="flex">
                        <div className="badge badge-outline badge-accent">{cart.brand}</div>
                        <div className="badge badge-outline badge-accent">{cart.type}</div>
                    </div>
                    <div className="justify-end card-actions">
                    {/* deleet button here */}
                        <input onClick={() => handleDelete(cart._id)} value='delete' type="button" className="badge badge-outline font-bold cursor-pointer badge-accent text-center"/>

                        <div className="badge badge-outline badge-accent">{cart.price}$</div>
                        <div className="badge badge-outline badge-accent">{cart.rating}★</div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            
            ))
        }

        </div>

        </div>
    );
};

export default MyCart;