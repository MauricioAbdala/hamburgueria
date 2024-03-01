import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";


export const CartModal = ({ cartList, setCartList, deleteToCart, isVisible, setVisible }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);


   const closeModal = () => {
      setVisible(false);
   };


   return (

      <>
         {isVisible && (
            <div className={styles['modal-overlay']}>
               <div className="cont sm" role="dialog">
                  <div className={`${styles.flexbox} ${styles.green}`}>
                     <h2 className="title white">Carrinho de compras</h2>
                     <button className="title3 grey2" onClick={() => closeModal(false)} aria-label="close" title="Fechar">
                        <MdClose size={21} />
                     </button>
                  </div>
                  <div >
                     <ul>
                        {cartList.map((product) => (
                           <CartItemCard key={product.id} product={product} removeCartItem={deleteToCart} />
                        ))}
                     </ul>
                  </div>
                  <div>
                     <hr className={styles['custom-hr']} />
                     <div className={styles.flexboxvar}>

                        <p className="title2 grey">Total</p>
                        <p className="title2 grey2" >{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
                     </div>
                     <button className="btn larg" onClick={() => setCartList([])}>Remover todos</button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};
