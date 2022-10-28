import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;

  const [cart, setCart] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [wasClicked, setWasClicked] = useState(false);
  const [upPage, setUpPage] = useState(0);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("ASC");
  const [allProducts, setAllProducts] = useState([]);

  if (cart === "") {
    const getLocal = localStorage.getItem("cart");
    setCart(getLocal && getLocal);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
  }, []);

  const values = {
    cart,
    setCart,
    page,
    setPage,
    query,
    setQuery,
    isLoading,
    setIsLoading,
    isOpen,
    setIsOpen,
    balance,
    setBalance,
    wasClicked,
    setWasClicked,
    upPage,
    setUpPage,
    sort,
    setSort,
    order,
    setOrder,
    allProducts,
    setAllProducts,
  };

  return <Provider value={values}>{props.children}</Provider>;
};
