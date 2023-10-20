import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const loader = useLoaderData();
    
    const [carts, setCarts] = useState(loader);
    console.log(carts);
  
   const handleDelete = (_id) => {
    console.log(_id);

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
        fetch(`http://localhost:5000/myCart/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount === 1) {
                Swal.fire("Deleted!", "Your Cart has been deleted.", "success");
                const remainingCart = carts.filter((c) => c._id !== _id);
                setCarts(remainingCart);
              } 
            });
      }
    });
 };
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-4">

        {
            carts.map( cart => (
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
                        <button onClick={() => handleDelete(cart._id)} className="badge badge-outline font-bold cursor-pointer badge-accent text-center"> delete </button>

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