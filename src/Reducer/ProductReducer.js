const ProductReducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            };
            case "SET_API_DATA":
              return{
                ...state,
                isLoading:false,
                endSeasonProduct:action.payload,
              }
            case "API_ERROR":
                return{
                    ...state,
                    isLoading:true,
                    isError:true
                };
                case "SET_CURRENCY_LOADING":
            return{
                ...state,
                isCurrencyLoading:true
            };
            case "SET_CURRENCY_API":
              return{
                ...state,
                isCurrencyLoading:false,
                currencies:action.payload,
              }
            case "SET_CURRENCY_ERROR":
                return{
                    ...state,
                    isCurrencyLoading:true,
                    isError:true
                };
                case "SET_Blog_LOADING":
            return{
                ...state,
                isBlogLoading:true
            };
            case "SET_Blog_DATA":
              return{
                ...state,
                isBlogLoading:false,
                Blog:action.payload,
              }
            case "Blog_ERROR":
                return{
                    ...state,
                    isBlogLoading:true,
                    isError:true
                };
                case "SET_BlogDetail_loading":
                  return{
                      ...state,
                      isBlogDetailLoading:true
                  };
                  case "SET_BlogDetail":
                    return{
                      ...state,
                      isBlogDetailLoading:false,
                      BlogDetail:action.payload,
                     
                    }
                    case "SET_BlogDetail_ERROR":
                      return{
                          ...state,
                          isBlogDetailLoading:true,
                          isError:true
                      };
                case "SET_IMAGE_LOADING":
                  return{
                      ...state,
                      isHomeImage4Loading:true
                  };
                  case "SET_IMAGEAPI_DATA":
                    return{
                      ...state,
                      isHomeImage4Loading:false,
                      HomeImage4:action.payload,
                    }
                  case "IMAGE_ERROR":
                      return{
                          ...state,
                          isHomeImage4Loading:true,
                          isError:true
                      };
                      
                case "SET_Banners_LOADING":
            return{
                ...state,
                isBanners:true
            };
            case "SET_Banners_Product":
              return{
                ...state,
                isBanners:false,
                Banners:action.payload,
              }
            case "SET_Banners_ERROR":
                return{
                    ...state,
                    isBanners:true,
                    isError:true
                };
                case "SET_ImageTwo_LOADING":
                  return{
                      ...state,
                      isImageTwo:true
                  };
                  case "SET_ImageTwo_part":
                    return{
                      ...state,
                      isImageTwo:false,
                      ImageTwo:action.payload,
                    }
                  case "SET_ImageTwo_ERROR":
                      return{
                          ...state,
                          isImageTwo:true,
                          isError:true
                      };
                case "SET_NEW_ARRIVAL_LOADING":
                  return{
                      ...state,
                      isnewArrivalLoading:true
                  };
            case "SET_FeatureAPI_DATA":
              return{
                ...state,
                isnewArrivalLoading:false,
                NewArrivalProduct:action.payload,
              };
              case "NEW_ARRIVAL_API_ERROR":
                return{
                    ...state,
                    isnewArrivalLoading:true,
                    isError:true
                };
                case "SET_FormalEdit_LOADING":
                  return{
                      ...state,
                      isFormalEditLoading:true
                  };
            case "SET_FormalEdit_DATA":
              return{
                ...state,
                isFormalEditLoading:false,
                formalEdit:action.payload,
              };
              case "FormalEdit_API_ERROR":
                return{
                    ...state,
                    isFormalEditLoading:true,
                    isError:true
                };
              //basics product
              case "SET_Basics_LOADING":
                  return{
                      ...state,
                      isBasicsLoading:true
                  };
            case "SET_Basics_DATA":
              return{
                ...state,
                isBasicsLoading:false,
                basics:action.payload,
              };
              case "Basics_API_ERROR":
                return{
                    ...state,
                    isBasicsLoading:true,
                    isError:true
                };
                //FestivePret
                case "SET_FestivePret_LOADING":
                  return{
                      ...state,
                      isfestivePretLoading:true
                  };
            case "SET_FestivePret_DATA":
              return{
                ...state,
                isfestivePretLoading:false,
                festivePret:action.payload,
              };
              case "FestivePret_API_ERROR":
                return{
                    ...state,
                    isfestivePretLoading:true,
                    isError:true
                };
                //WinterWear
                case "SET_WinterWear_LOADING":
                  return{
                      ...state,
                      iswinterWearLoading:true
                  };
            case "SET_WinterWear_DATA":
              return{
                ...state,
                iswinterWearLoading:false,
                winterWear:action.payload,
              };
              case "WinterWear_API_ERROR":
                return{
                    ...state,
                    iswinterWearLoading:true,
                    isError:true
                };
                //ReadyToWear
                case "SET_ReadyToWear_LOADING":
                  return{
                      ...state,
                      isReadyToWearLoading:true
                  };
            case "SET_ReadyToWear_DATA":
              return{
                ...state,
                isReadyToWearLoading:false,
                readyToWear:action.payload,
              };
              case "SET_Unstitched_DATA":
                return{
                  ...state,
                  isReadyToWearLoading:false,
                  Unstitched:action.payload,
                };
              case "ReadyToWear_API_ERROR":
                return{
                    ...state,
                    isReadyToWearLoading:true,
                    isError:true
                };
                //all categories
                case "SET_ALLCategories_LOADING":
                  return{
                      ...state,
                      isAllCategoriesLoading:true
                  };
            case "SET_ALLCategories_DATA":
              return{
                ...state,
                isAllCategoriesLoading:false,
                allCategories:action.payload,
              };
              case "SET_Unstitched_DATA":
                return{
                  ...state,
                  isAllCategoriesLoading:false,
                  Unstitched:action.payload,
                };
              case "ALLCategories_API_ERROR":
                return{
                    ...state,
                    isAllCategoriesLoading:true,
                    isError:true
                };
                //featureProduct
                case "SET_featureProduct_LOADING":
                  return{
                      ...state,
                      isFeatureLoading:true
                  };
            case "SET_featureProduct_DATA":
              return{
                ...state,
                isFeatureLoading:false,
                featureProduct:action.payload,
              };
              case "featureProduct_API_ERROR":
                return{
                    ...state,
                    isFeatureLoading:true,
                    isError:true
                };
                case "SET_Category_LOADING":
                return{
                    ...state,
                    isCategoryLoading:true
                };
          case "SET_Category_Product":
            return{
              ...state,
              isCategoryLoading:false,
              category:action.payload,
            };
            case "SET_Category_ERROR":
              return{
                  ...state,
                  isCategoryLoading:true,
                  isError:true
              };

               //sub_category
                      case "SET_SubCategory_LOADING":
                  return{
                      ...state,
                      isSubCategoryLoading:true
                  };
                  case "SET_SubCategory_Product":
                    return{
                      ...state,
                      isSubCategoryLoading:false,
                      SubCategory:action.payload,
                     
                    }
                    case "SET_SubCategory_ERROR":
                      return{
                          ...state,
                          isSubCategoryLoading:true,
                          isError:true
                      };
                  case "SET_Related_LOADING":
                  return{
                      ...state,
                      isRelatedLoading:true
                  };
                  case "Related_Product":
                    return{
                      ...state,
                      isRelatedLoading:false,
                      RelatedProucts:action.payload,
                    };
                  case "SET_Related_ERROR":
                      return{
                          ...state,
                          isRelatedLoading:true,
                          isError:true
                      };
                      case "SET_PurchaseHistory_LOADING":
                  return{
                      ...state,
                      ispurchasehistoryLoading:true
                  };
                  case "PurchaseHistory":
                    return{
                      ...state,
                      ispurchasehistoryLoading:false,
                      purchasehistory:action.payload,
                    };
                  case "SET_PurchaseHistory_ERROR":
                      return{
                          ...state,
                          ispurchasehistoryLoading:true,
                          isError:true
                      };
                      case "SET_Wishlist_LOADING":
                        return{
                            ...state,
                            isWishlistLoading:true
                        };
                        case "Wishlist_Product":
                    return{
                      ...state,
                      isWishlistLoading:false,
                      AddToWishlist:action.payload,
                    };
                    case "SET_Wishlist_ERROR":
                      return{
                          ...state,
                          isWishlistLoading:true,
                          isError:true
                      };
                      case "SET_Top_LOADING":
                  return{
                      ...state,
                      isTopProductsLoading:true
                  };
                  case "Top_Product":
                    return{
                      ...state,
                      isTopProductsLoading:false,
                      TopProduct:action.payload,
                    };
                  case "SET_Top_ERROR":
                      return{
                          ...state,
                          isTopProductsLoading:true,
                          isError:true
                      };
                      case "SET_categoryProduct_LOADING":
                        return {
                            ...state,
                            iscategoryProductLoading:true
                        }
                    case "Set_categoryProduct":
                        return{
                            ...state,
                            iscategoryProductLoading:false,
                            categoryProduct:action.payload, 
                          }
                       
                    case "SET_categoryProduct_ERROR":
                        return{
                            ...state,
                            iscategoryProductLoading:true,
                            isError:true
                        };
                        case "SET_NAVBAR_LOADING":
                          return{
                            ...state,
                            isNavbarLoading:true,
                          };
                          case "Set_NAVBAR":
                          return{
                            ...state,
                            navbar:action.payload,
                            isNavbarLoading:false,
                          };
                          case "SET_NAVBAR_ERROR":
                            return{
                              ...state,
                              isNavbarLoading:true,
                              isError:true
                          };
                          case "SET_Track_LOADING":
                            return{
                                ...state,
                                isTrackOrderLoading:true
                            };
                            case "Track_Your_Order":
                              return{
                                ...state,
                                isTrackOrderLoading:false,
                                TrackOrder:action.payload,
                               
                              }
                              case "SET_Track_ERROR":
                                return{
                                    ...state,
                                    isTrackOrderLoading:true,
                                    isError:true
                                };
                                case "SET_InstaPhoto_LOADING":
                                  return{
                                    ...state,
                                    isInstaLoading:true
                                  };
                                  case "SET_InstaPhoto":
                                    return{
                                      ...state,
                                    isInstaLoading:false,
                                    InstaPhoto:action.payload
                                    };
                                    case "SET_InstaPhoto_ERROR":
                                      return{
                                        ...state,
                                        isInstaLoading:true,
                                        isError:true
                                      }

        default:
            return state;
    }
}
export default ProductReducer;