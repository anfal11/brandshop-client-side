import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

const MyCart = () => {
    const loader = useLoaderData();
    const [setProduct, setSelectedProduct] = useState([]);

    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    useEffect(() => {
        const filterCart = loader.filter((cart) => cart.userEmail === userEmail);
        setSelectedProduct(filterCart);
    }, [userEmail, loader]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-side-fbntgca0j-anfal11.vercel.app/myCart/${_id}`, {
                    method: "DELETE",
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your Cart has been deleted.", "success");
                        const remainingCart = setProduct.filter((c) => c._id !== _id);
                        setSelectedProduct(remainingCart);
                    }
                });
            }
        });
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-4">
                {setProduct.length === 0 ? (
                    
                    <div className="max-w-7xl mx-auto col-span-3">
                      <img className="w-20 mx-auto" src="https://i.ibb.co/4NCks3s/icon-not-found.png" alt="" />
                      <p className="text-2xl font-semibold mt-10">No products found in the cart.</p>
                    </div>
                ) : (
                    setProduct.map((cart) => (
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
                                            <button onClick={() => handleDelete(cart._id)} className="badge badge-outline font-bold cursor-pointer badge-accent text-center"> delete </button>
                                            <div className="badge badge-outline badge-accent">{cart.price}$</div>
                                            <div className="badge badge-outline badge-accent">{cart.rating}★</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyCart;
