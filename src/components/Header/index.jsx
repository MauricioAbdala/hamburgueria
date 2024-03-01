import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import cartIcon from "../../assets/cartIcon.png";
import btnSearch from "../../assets/btnSearch.png";
import styles from "./style.module.scss";

export const Header = ({ cartList, setVisible, handleSearch }) => {

   const [value, setValue] = useState("");

   const handleButtonClick = () => {
      handleSearch(value);
   };


   return (


      <header className={styles.header}>
         <div className={`container ${styles.flex}`}>
            <div className={styles.logo}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
            </div>

            <div className={styles.flexbox}>
               <button onClick={() => setVisible(true)} className={`${styles.flexbox} ${styles.green}`}>
                  <img className={styles.imgcart} src={cartIcon} />
                  <span className={styles.count}>{cartList.length}</span>
               </button>
               <form onSubmit={(e) => {
                  e.preventDefault();
                  handleButtonClick();
               }}>
                  <div className={styles.inputfake}>
                     <input
                        type="text"
                        value={value}
                        placeholder="Digitar Pesquisa"
                        onChange={(e) => setValue(e.target.value)}
                     />
                     <button type="submit">
                        <img className={styles.img} src={btnSearch} alt="Search" />
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </header>

   );
};
