import { ADD_TO_CART } from "../constants";
export const Addtocart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

// export const increse =() => {
//     return{
//         type : INCRESE
//     }
// }
// export const Removetocart =(data) => {
//     return{
//         type : REMOVE_TO_CART,
//         data : data
//     }
// }
