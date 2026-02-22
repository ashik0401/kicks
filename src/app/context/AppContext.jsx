"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };
    fetchAllProducts();
  }, []);

  const addToCart = (product) => setCartItems((prev) => [...prev, product]);
  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const value = {
    searchQuery,
    setSearchQuery,
    cartItems,
    addToCart,
    removeFromCart,
    products,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}