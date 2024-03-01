import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";


export const ProductList = ({ productList, addToCart }) => {
   return (
      <div className={`container ${styles.container}`}>
         <ul className={styles.productList}>
            {productList.map((product) => (
               <ProductCard setCartList={addToCart} key={product.id} product={product} />
            ))}
         </ul>
      </div>
   );
};
