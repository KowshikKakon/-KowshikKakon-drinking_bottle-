import React, { use, useEffect, useState } from 'react';
import '../remove/Remove.css'
import '../remove/Display_Bottle.css'
import Card_Item from '../cardItem/Card_Item';
import { addDataToLocalStorage,removeCartFromLocalStorage,getDataFromLocalStorage} from '../localStorage';
import Remove from '../remove/Remove';
//json data ak file theke ar ak file e load krte hole use bebohar  korte hobe...
const Display_Bottle = ({ myData }) => {
    // props er nam ar j name pathaici destructuring korar somoy nam duita same hote hobe...
    //main css style ei file ei apply korte hobe...
    const Datas = use(myData)
    console.log("Datas1:", Datas);
    const [cart, setCart] = useState([])
    //button press korbo bottle jog hobe
    const addToCart = (bottle) => {
        const newCart = [...cart, bottle]
        // cart e value set kora
        setCart(newCart);
    //    local storage e value pathano
        addDataToLocalStorage(bottle)
    }
    // front end theke remove/id kora...
    const removeCart = (indexToRemove) => {
       console.log("indexToRemove",indexToRemove);
        
        const remaining = cart.filter((item,index) => index!== indexToRemove)
    console.log("remaining22:",remaining);
        // cart update kora/cart e value set kora
        setCart(remaining);
        //backend/localstorage er function e value  pass kora...
        removeCartFromLocalStorage(indexToRemove);

            // frontend e value show kora...
        
    
    }

    useEffect(() => {
// local storage er function e value pass...
        const cartId = getDataFromLocalStorage();

        const item = [];

for (let x of cartId) {
    
    // arrow function akline elikha valo without  wraping {}
    const MyData = Datas.find((data) => data.id === x.id);
        (MyData) && item.push(MyData)
    

}
setCart(item);

    }, [Datas])
    return (
        <div>
            {/* Akoi name vinno css file holeo akoi class use kora jabena... */}
            <h1>Total Number of bottles :{Datas.length}</h1>
            <h1>Purchased no of bottles:{ cart.length}</h1>
            <div>

                <Remove
                    cart={cart} removeCart={removeCart}>
                    


               </Remove>

            </div>
            <div className='dis_item'>
                {Datas.map(data => <Card_Item
                    
                    key={data.id}
                    data={data}
                    // sudhu handler er nam dilei hoi...8
                    addToCart={addToCart}
                    

                ></Card_Item>)}
            </div>
        </div>
    );
};

export default Display_Bottle;