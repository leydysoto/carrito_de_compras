import {useContext}from "react";
import { AppContext } from "../context/context.jsx";
import {Item} from "./item"
import { Botones } from "./botones.jsx";
import  styles from"./itemlist.module.css"


export const ItemList=()=>{
    const {articles}=useContext(AppContext)
    return(
        <div className={styles.wrap}>
            <div className={styles.category_list}>
                <Botones/>
               
            </div> 
            <section>
            {
                articles.map((product)=>{

                    return <Item key={product.id} {...product}/>
                })
            }

            </section>
            
        </div>
    )
}