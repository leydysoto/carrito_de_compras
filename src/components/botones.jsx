import {useContext}from "react";
import { AppContext } from "../context/context.jsx";
import  styles from"./botones.module.css"
// import {useAppContext} from "../context/context"

export const Botones=()=>{
    const {categories,filterCategory}=useContext(AppContext)
    // const store=useAppContext()
    return(
        <>
        {categories.map(category=>(
                <button className={styles.btn_item} type='button' onClick={()=>filterCategory(category)} key={category}>
                    {category}

                </button>
            ))}
        
        
        
        
        </>
        
            
       

    )

}