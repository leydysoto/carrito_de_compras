import { useContext } from "react"
import {AppContext}from  "../context/context"
import "./ShoppingCard.css"

export function ShoppingCard(){
    const {cart,setCart}=useContext(AppContext)

    const quantity=cart.reduce((acc,item)=>{
        return acc+item.quantity;
    },0)
    const totalPrice=cart.reduce((acc,item)=>{
        return acc+ item.price* item.quantity;
    },0)

    const addToCart=(id)=>{
        setCart((currItems)=>{
            const isItemsFound=currItems.find((item)=>item.id===id)
            if(isItemsFound){
                return currItems.map((item)=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity+1}
                    }
                    else{
                        return item;
                    }
                })
            }else{
                return [...currItems,{id,title,thumbnail,quantity:1,price}]
            }
        })
    }
    const removeItem=(id)=>{
        setCart((currItems)=>{
            if(currItems.find((item)=>item.id===id).quantity===1){
                return currItems.filter((item)=>item.id!==id)
            }else{
                return currItems.map((item)=>
                {
                    if(item.id===id){
                        return {...item,quantity:item.quantity-1}
                    }else{
                        return item;
                    }
                })
            }

        })
    }
    const eliminaObjeto=(id)=>{
        setCart((currItems)=>{
            if(currItems.find((item)=>item.id===id)){
                return currItems.filter((item)=>item.id!==id)
            }
        })
            
        }
    
    
    const vacear=()=>{
        setCart([])
    }





    return <div className="article">
        {
            cart.map((item)=>{
                return(<div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.thumbnail}width="80"height="55" alt={item.title}/>
                        <div className="titulo">{item.title}</div>
                        

                    </div>
                    <div className="botones-cantidad">
                        
                        <button onClick={()=>addToCart(item.id)}>+</button>
                        <div>{item.quantity}</div>
                        <button onClick={()=>removeItem(item.id)}>-</button>
                    </div>  
                    <div>
                        
                        <span>s/.{item.price}</span>
                        <button onClick={()=>eliminaObjeto(item.id)}>elimina</button>
                        

                    </div>      

                </div>)
            })
        }
        <div className="total"> 
            
            {              
                quantity >0&&(<span> cantidad total:{quantity}</span>)
            }
            
            {
                totalPrice>0&&(<span> precio total:s/.{totalPrice}</span>)

            }
            <button onClick={()=>vacear()}>vacear</button>
        </div>

        
        
    </div>
}