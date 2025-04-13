const saveDataToLocalStorage = (data) => {
    

    localStorage.setItem('cart', JSON.stringify(data))

}

// ei function card save kore rakhar kaj kore...jate reload dileo abr fire ace...

const getDataFromLocalStorage = () => {
    const storedUserData = localStorage.getItem('cart')

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        return userData;
      } else {
        return [];
      }


}


const addDataToLocalStorage = (cart) => {
    
    

    const data = getDataFromLocalStorage();
   
   const newCart=[...data,cart]
//    key came rakhte hobe nahole vejal korbe...
    saveDataToLocalStorage(newCart)

}

const removeCartFromLocalStorage = (productId) => {
    

    let cart = getDataFromLocalStorage();
   let updatedcart = cart.filter((item ,index)=> index!== productId)
    saveDataToLocalStorage(updatedcart)


}


export {
    addDataToLocalStorage ,getDataFromLocalStorage,removeCartFromLocalStorage


}