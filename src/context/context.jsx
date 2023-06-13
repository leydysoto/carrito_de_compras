import {products} from '../data/data.json'
import { createContext,useState } from "react"
export const AppContext=createContext({


})
export function Store({children}){

    const allCategories=['All',... new Set(products.map(article=>article.category))]
    const [categories,setCategories]=useState(allCategories)

    const [articles,setArticle]=useState(products)
    const [cart,setCart]=useState([]);

    const filterCategory=(category)=>{
 
        if(category==='All'){
          setArticle(products)
          return
        }
        const filterdata=products.filter(elemt=>elemt.category===category)
        setArticle(filterdata)
     
    }
    return(
        <AppContext.Provider
        value={
            {
                categories,
                articles,
                filterCategory,
                cart,
                setCart,
            }
        }  
        >{children}
           
        </AppContext.Provider>

    )

}
