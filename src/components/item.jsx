import { useContext } from "react"
import styles  from"./item.module.css"

import {AppContext}from  "../context/context"

export function Item({title,thumbnail,price,id}){
    const {cart,setCart}=useContext(AppContext)
    const addToCart=(id)=>{
        setCart((currItems)=>{
            const isItemFound=cart.find((item)=>item.id===id)
            if(isItemFound){
                return currItems.map((item)=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity+1}
                    }else{
                        return item;
                    }

                })
            }else{
                return [...currItems,{id,title,thumbnail,quantity:1,price}]
            }

        })
       
    }
    const remove=(id)=>{
        setCart((currItems)=>{
            if(currItems.find((item)=>item.id===id)?.quantity===1){
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

    const getQuantityByID=(id)=>{
        return cart.find((item)=>item.id===id)?.quantity||0
    }
    const quantyporItem=getQuantityByID(id)




    

    return(
        <div className={styles.item}>
            {
                quantyporItem>0&&(<div>{quantyporItem}</div> )
            }
            
            <div>
                <img  className={styles.item_image} src={thumbnail}  alt={title}/>

            </div>
            
            <div className={styles.ditails}>
                <div>{title}</div>
                
                <div>{price}</div>

                {

                    quantyporItem===0?(
                        <button onClick={()=>addToCart(id)}>+</button>

                    ):(
                        <button onClick={()=>addToCart(id)}>more add</button>

                    )
                }
                {
                    quantyporItem>0&&(
                        <button onClick={()=>remove(id)}>remove</button>
                    )

                }

            </div>

                        

        </div>
    )

}