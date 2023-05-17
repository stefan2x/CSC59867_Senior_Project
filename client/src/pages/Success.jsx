import { useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";


const Success = () => {
    const location =  useLocation()
    

    const deleteCartItem = async (cartItemId) => {
        try {
          const response = await axios.delete(`/api/carts/${cartItemId}`);
          console.log(response.data); // Output: "Cart has been deleted..."
        } catch (error) {
          console.error(error);
        }
    };

    
    return (
        <div>
            Sucessfull
        </div>
    )
}

export default Success