import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../context/context"
import styles from"./navbar.module.css"

export const Navbar=()=>{
    const {cart,setCart}=useContext(AppContext)
    const quantity=cart.reduce((accu,item)=>{
        return accu+item.quantity;
    },0)
    return(
        <nav  className={styles.nav}>
            <div className={styles.nav_container}>
                <Link className={styles.link}to={"/"}><span className={styles.span_store}>store</span></Link>
                <ul className={styles.nav_cartContainer}>
                    <Link  className={styles.link} to={"/cart"}>
                    {
                        quantity>0 &&(<li className={styles.nav_cart}>cart item: <span className={styles.span_quantity}>{quantity}</span></li>)

                    }
                            
                    </Link>     
                    
                </ul>

            </div>
            
        </nav>
    )
}