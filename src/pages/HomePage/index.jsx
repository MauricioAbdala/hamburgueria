import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productApi } from "../../services/api";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const [isProductListLoaded, setProductListLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const savadeCartLocalStorage = (cart) => {
    setTimeout(() => {
      localStorage.setItem("@CARTLIST", JSON.stringify(cart));
    }, 1000); // 1000 milissegundos (1 segundo) de atraso
  };
    
  savadeCartLocalStorage(cartList);
  

  const loadingCartLocalStorage = () => {
    const savedCart = localStorage.getItem("@CARTLIST");
    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.log("Erro ao carregar carrinho do LocalStorage:", error);
      return [];
    }
  };

  useEffect(() => {
    const productData = async () => {
      try {
        const response = await productApi.get("/products");
        const productListData = response.data;
        setProductList(productListData);
        setProductListLoaded(true);

        const savedCart = loadingCartLocalStorage();
        setCartList(savedCart);

      } catch (error) {
        console.log("Erro ao obter lista de produtos:", error);
      }
    };
    productData();
  }, []);


  const addCartList = (newProduct) => {
    const VerifyItem = cartList.some((cartItem) => cartItem.id === newProduct.id);

    if (VerifyItem) {
      toast.info("Este item já foi adicionado ao seu carrinho");
    } else {
      const newCartList = [...cartList, newProduct];
      setCartList(newCartList);
      toast.success("item adicionado");
    }
  };

  const deleteToCart = (itemId) => {
    const updatedCartList = cartList.filter((cartListItem) => cartListItem.id !== itemId);
    setCartList(updatedCartList);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Header cartList={cartList} setVisible={setVisible} handleSearch={handleSearch} setSearchValue={setSearchValue} />
      <main className="container">
        <ProductList productList={filteredProducts} addToCart={addCartList} />
      </main>
      {isVisible ? (
        <CartModal cartList={cartList} setCartList={setCartList} deleteToCart={deleteToCart} isVisible={isVisible} setVisible={setVisible} />
      ) : null}
    </>
  );
};
