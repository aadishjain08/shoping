import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex flex-col justify-center">
  {
    cart.length > 0  ? 
    (<div className="flex flex-row ">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div className="flex flex-col mx-[300px] my-[100px]">
          <div>Your Cart</div>
          <div>Summary</div>
          <p flex flex-row>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col mx-[300px] my-[50px] justify-center">
          <p>Total Amount: ${totalAmount}</p>
          <button className="color-red cursor-pointer">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
