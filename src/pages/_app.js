import { createContext, useEffect, useState } from 'react';
import '../styles/styles.scss';
import { AppProvider } from 'Context/productContext';
import { WishProvider } from 'Context/wishlistContext';
import { CurrenciesProvider } from 'Context/CurrenciesContext';
import { AuthProvider } from 'Context/AuthContext';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


export const CartContext = createContext();
const MyApp = ({ Component, pageProps}) => {
  const [mycart,setMycart]=useState({});
  const [subtotal,setsubtotal]=useState(0);
  const [progress, setProgress] = useState(0);
  const [user,setUser]=useState({value:null});
  const [key,setKey]=useState(0);
 const router=useRouter();

  const saveCart=(apcart)=>{
    localStorage.setItem("cart",JSON.stringify(apcart));
    subtotal=0
    let key=Object.keys(apcart)
    for(let i=0;i<key.length;i++){
      subtotal+=apcart[key[i]].price * apcart[key[i]].quantity
    }
    setsubtotal(subtotal)
  }
 
  {/*const ADDTOCART=async(user_id,id,size,quantity,user_token)=>{
    let newCart=await JSON.parse(JSON.stringify(mycart));
    if(id in newCart){
      newCart[id].quantity=newCart[id].quantity + quantity
   }
   else{
    try{
      const res=await axios.post("https://meeraki.com/api/v2/carts/add",{
        headers: {
          Authorization: 'Bearer ' + user_token//the token is a variable which holds the token
        },
        data: {
          user_id:user_id,
          product_id:id,
          variant:size,
          quantity:quantity // This is the body part
        }
       });
       console.log("addtocart",res);
    }catch(err){
        console.log(err);
    }
   }
  }*/}

  const addtocart=(id,name,size,price,quantity,image,product_sku,current_stock,stroked_price,base_price)=>{
   let newCart=JSON.parse(JSON.stringify(mycart));
   if(id in newCart){
      newCart[id].quantity=newCart[id].quantity + quantity
   }
   else{
    newCart[id]={name,size,price,quantity:quantity,image,product_sku,current_stock,stroked_price,base_price}
    toast.success('Product added in the cart', {
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
   setMycart(newCart)
   saveCart(newCart)
  }


  const removeFromCart=(id,name,size,price,quantity,image,product_sku,current_stock,stroked_price)=>{
    let newCart=JSON.parse(JSON.stringify(mycart));
    if(id in mycart){
       newCart[id].quantity=mycart[id].quantity - quantity
    }
    if(newCart[id].quantity<=0){
      delete newCart[id]
    }
    setMycart(newCart)
    saveCart(newCart)
   }

   useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
      console.log("load")
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(400)
      console.log("load")
    })
    console.log("hey me me!");
    try{
      if(localStorage.getItem('mycart')){
        setMycart(JSON.parse(localStorage.getItem("mycart")))
        saveCart(JSON.parse(localStorage.getItem("mycart")))
       }
    }catch(error){
       console.error(error);
       localStorage.clear()
    }
    const token=localStorage.getItem('token')
    if(token){
      setUser({value:token})
      setKey(Math.random())
    }
   },[router.query])

   const Logout=()=>{
    localStorage.removeItem('token')
    setUser({value:null})
    setKey(Math.random())
    router.push('/')
   }

   const buyNow=(id,name,size,price,quantity,image,product_sku,current_stock,stroked_price,base_price)=>{
    saveCart({})
    let newCart=JSON.parse(JSON.stringify(mycart));
   if(id in newCart){
      newCart[id].quantity=newCart[id].quantity + quantity
   }
   else{
    newCart[id]={name,size,price,quantity:quantity,image,product_sku,current_stock,stroked_price,base_price}
   }
   setMycart(newCart)
   saveCart(newCart)
   router.push('/checkout')
   }

   const clearcart=()=>{
    setMycart({})
    saveCart({})
   }
  return (
    <>
     <LoadingBar
        color='#000 !important'
        progress={progress}
        waitingTime={100}
        onLoaderFinished={() => setProgress(0)}
      />
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
    <AuthProvider>
    <CurrenciesProvider>
    <AppProvider>
    <WishProvider>
    <CartContext.Provider value={{Logout,buyNow,addtocart,removeFromCart,mycart,clearcart,subtotal,user,key}}>
      <Component {...pageProps} />
    </CartContext.Provider>
    </WishProvider>
    </AppProvider>
    </CurrenciesProvider>
    </AuthProvider>
    </>
  );
};

export default MyApp;
