
import React, { useState, useContext } from "react"
import styled from "styled-components"

import UserInfo from "../components/UserInfo"
import Wishlist from "../components/WishList"


const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas:
    "UserInfo"
    "wishlist";
`
export default function Profile() {
  
    const [currentWish, setCurrentWish] = useState({})
    const [modalIsOpen, setModalIsOpen] = useState(false)
  
    //Click listener for selection of wish
    const selectedWish = (wish) => {
      setCurrentWish(wish)
      setModalIsOpen(true)
    }
  
  
    return (
      <Wrapper>
        <UserInfo name="default" bio='default' />
        <Wishlist/>
      </Wrapper>
    )
  }
  