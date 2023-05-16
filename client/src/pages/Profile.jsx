import React, { useState, useEffect } from "react"
import styled from "styled-components"

import UserInfo from "../components/UserInfo"
import WishList from "../components/WishList"
import { publicRequest } from "../requestMethods"

import { useLocation } from "react-router-dom"; // import the useLocation hook
import Navbar from "../components/Navbar"

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas:
    "UserInfo"
    "wishlist";
`

export default function Profile() {
  const { pathname } = useLocation(); // get the current location object
  const userId = pathname.split("/")[2];
  const [user, setUser] = useState({});
  const [wishlistProducts, setWishlistProducts] = useState([]);

  // Fetch the user data from the backend API
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await publicRequest.get(`/users/find/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, [userId]);

  // Fetch the wishlist products for the user
  useEffect(() => {
    const getWishlistProducts = async () => {
      try {
        const response = await publicRequest.get(`/users/${userId}/wishlist`);
        setWishlistProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getWishlistProducts();
  }, [userId]);

  // console.log(wishlistProducts);

  return (
    <Wrapper>
      <Navbar />
      <UserInfo name={user.firstname} bio={user.lastname} />
      <h1>{user.firstname}'s  WishList</h1>
      <WishList products={wishlistProducts} />
    </Wrapper>
  );
}
