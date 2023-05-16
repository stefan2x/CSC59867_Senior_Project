import React from "react";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import Navbar from "../components/Navbar";
import styled from 'styled-components'
import { mobile } from "../responsive";
import { Avatar } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Link } from "react-router-dom"


const FriendContainer = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Friend = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const FriendDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const WishDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WishContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ViewWishes = styled.div`
  font-size: 14px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const AddFriend = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Friends = () =>{
    const [users,setUsers] = useState([])

    //get all users
    useEffect(() => {
        const getUsers = async () => {
            try{
                const res = await publicRequest.get("/users" );
                setUsers(res.data);
            } catch(err) {
                console.log(err)
            }};

        getUsers();
    } , []);

    console.log(users)
    return (
        <>
            <Navbar/>
            <FriendContainer>
                {users.map(user => (
                    <Friend>
                    <FriendDetail>
                    {/*<Image src={product.img} />*/}
                    <Avatar/>
                    <Details>
                        <div>
                        <b>Product:</b> {user.firstname}
                        </div>
                        {/*<ProductColor color={product.color} />*/}
                        <div>
                        <b>Size:</b> {user.lastname}
                        </div>
                    </Details>
                    </FriendDetail>
                    <WishDetail>
                    <WishContainer>
                      <Link to={`/profile/${user._id}/wishlist`}>
                        <ViewWishes>
                            View wishlist
                            <ViewHeadlineIcon/>
                        </ViewWishes>
                      </Link>
                    </WishContainer>
                    <AddFriend>
                        <PersonAddIcon/>
                    </AddFriend>
                    </WishDetail>
                </Friend>
                ))}
            </FriendContainer>
        </>
    )


    


}

export default Friends;