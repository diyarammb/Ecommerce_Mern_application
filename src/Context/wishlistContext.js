import axios from "axios";
import { createContext, useContext, useEffect, useReducer,useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from "./AuthContext";
import reducer from "../Reducer/WishlistReducer";


const WishlistContext = createContext();

const initialState={
  isLoading:false,
  isError:false,
  Wishlist:{}
}

const WishProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState);
    const [myWishlist,setMyWishlist]=useState({});
    const {authuser}=useAuthContext();
    const API=`https://meeraki.com/api/v2/wishlists/${authuser.id}`;

    const saveWishlist=(apcart)=>{
      localStorage.setItem("wishlist",JSON.stringify(apcart));
    }

    const AddToWishlist=async(id,user,token)=>{
         dispatch({type:"SET_LOADING"})
        try{
          const res=await axios.get(`https://meeraki.com/api/v2/wishlists-add-product?product_id=${id}&user_id=${user}`,{
            headers: {
              Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
           });
           if(res.data.is_in_wishlist===true){
            const Wishlist=await res.data;
            dispatch({type:"SET_ADDWishlist_DATA",payload:Wishlist})
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              }); 
           }
        }catch(err){
          if(err.response.status===401){
            toast.error('Please login your account', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              }); 
           }
           dispatch({type:"API_ERROR"})
          }
        }
      
    const getToWishlist=async(url)=>{
      dispatch({type:"SET_LOADING"})
      const user_token=localStorage.getItem('token')
      try{
        const res=await axios.get(url,{
          headers: {
            Authorization: 'Bearer ' + user_token//the token is a variable which holds the token
          }
         });
         console.log("res.69",res.data.data)
         if(res.data.success===true){
          const Wishlist=await res.data.data;
          saveWishlist(Wishlist);
          dispatch({type:"SET_API_DATA",payload:Wishlist})
         } 
      }catch(err){
        dispatch({type:"API_ERROR"})
      }
    }
    
    const RemoverfromWishlist=async(product_id,user_id,token)=>{
      dispatch({type:"SET_LOADING"})
      try{
        const res=await axios.get('https://meeraki.com/api/v2/wishlists-remove-product',{
          headers: {
            Authorization: 'Bearer ' + token//the token is a variable which holds the token
          },data: {
            product_id:product_id,
	          user_id: user_id // This is the body part
          }
         });

         if(res.data.is_in_wishlist===false){
          setMyWishlist(res.data)
          const Wishlist=await res.data;
          dispatch({type:"SET_Delete_DATA",payload:Wishlist})

          toast.error(res.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });  
         }
        }catch(err){
          dispatch({type:"API_ERROR"})
          console.log(err);
        }
    }
    useEffect(()=>{
      getToWishlist(API);
      try{
        if(localStorage.getItem('wishlist')){
          setMyWishlist(JSON.parse(localStorage.getItem("wishlist")))
          saveWishlist(JSON.parse(localStorage.getItem("wishlist")))
         }
      }catch(error){
         console.error(error);
         localStorage.clear()
      }
    },[])

    return <WishlistContext.Provider value={{...state,myWishlist,AddToWishlist,RemoverfromWishlist}}>{children}</WishlistContext.Provider>;
    }

//custom hooks
const useWishlistContext = () => {
    return useContext(WishlistContext);
  };

export { WishProvider, WishlistContext, useWishlistContext };