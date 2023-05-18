import { useState } from "react";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  // const [user,setUser] = useState([])
  const user = useSelector((state) => state.user.currentUser);

  console.log("HI:" +user._id)

  // Function to handle adding/removing from wishlist
  const handleWishlistClick = async () => {
    try {
      // Make API call to update user's wishlist
      const response = await publicRequest.post(`/users/${user._id}/wishlist`, {
        productId: item._id,
      });
      const updatedUser = response.data;
      console.log(updatedUser); // Log the updated user to the console
      setIsWishlist(!isWishlist); // Toggle the wishlist state
    } catch (error) {
      console.error(error); // Log any errors to the console
    }
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon onClick={handleWishlistClick}>
          {isWishlist ? (
            <FavoriteOutlined />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
