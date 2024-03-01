import styles from "./style.module.scss";


export const ProductCard = ({ product, setCartList }) => {
  return (
    <li>
      <div className={styles.product}>
        <div className={styles.imgproduct}>
          <img className={styles.img} src={product.img} alt={product.name} />
        </div>

        <div className={styles.productdesc}>
          <h3 className="title">{product.name}</h3>
          <span className="title3 grey">{product.category}</span>
          <span className="title2 green">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
          <button className="btn" onClick={() => setCartList(product)}>Adicionar</button>
        </div>
      </div>
    </li>
  );
};
