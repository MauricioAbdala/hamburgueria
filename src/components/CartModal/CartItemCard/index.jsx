import trashIcon from "../../../assets/trashIcon.png";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeCartItem }) => {
   const handleDeleteClick = () => {
      if (window.confirm("Deseja confirmar a exclusão?")) {
         removeCartItem(product.id);
      }
   };

   return (
      <li>
         <div className={styles.flex}>
            <div className={styles.flexbox}>
               <img className={styles.img} src={product.img} alt={product.name} />
               <h3 className="title">{product.name}</h3>
               <span className="title2 green">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
            </div>
            <div>
               <button onClick={handleDeleteClick} aria-label="delete" title="Remover item">
                  <img className={styles.trash} src={trashIcon} />
               </button>
            </div>
         </div>
      </li>
   );
};
