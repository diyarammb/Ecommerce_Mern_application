const WishlistReducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            };
            case "SET_ADDWishlist_DATA":
              return{
                ...state,
                isLoading:false,
                Wishlist:action.payload,
              };
            case "SET_API_DATA":
              return{
                ...state,
                isLoading:false,
                Wishlist:action.payload,
              }
              case "SET_Delete_DATA":
              return{
                ...state,
                isLoading:false,
                Wishlist:action.payload,
              };
            case "API_ERROR":
                return{
                    ...state,
                    isLoading:true,
                    isError:true
                };
            }
           
            
}
export default WishlistReducer;