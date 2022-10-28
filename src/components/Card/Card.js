import React, { useContext, useEffect, useState } from "react";
import ProductImg from "../../assets/productImg.jpeg";
import Swal from "sweetalert2";
import { GlobalContext } from "../../global/GlobalContext";
import {
  CreatePurchase,
  GetAllProducts,
  GetAllPurchase,
} from "../../services/request";
import {
  Container,
  ItemCard,
  Button,
  ButtonDisabled,
  Pgreen,
  DivPrice,
} from "./styled";
import { blueShopper } from "../../constants/colors";

export const Card = () => {
  const {
    cart,
    setBalance,
    page,
    query,
    order,
    setOrder,
    sort,
    balance,
    allProducts,
    setAllProducts,
  } = useContext(GlobalContext);

  const [allPurchase, setAllPurchase] = useState([]);

  useEffect(() => {
    GetAllProducts(page, query, order, sort, setAllProducts);
    GetAllPurchase(cart, setAllPurchase);
    setOrder(order);
  }, [page, query, order, sort, cart, balance]);

  const onClickAdd = (item) => {
    const body = {
      id_cart: cart,
      id_product: item.id,
      price: item.price,
    };
    CreatePurchase(body, setBalance, cart);
  };

  const onClickAlert = () => {
    Swal.fire({
      icon: "warning",
      title: "Quer mais itens?",
      color: `${blueShopper}`,
      text: "Este produto já foi adicionado ao seu carrinho! Aumente a quantidade por lá, ok?",
    });
  };

  const productsCard = allProducts?.map((item) => {
    const exist = allPurchase.some(
      (purchase) => item.id == purchase.id_product
    );

    return (
      <ItemCard key={item.id}>
        <p>{item.name}</p>
        <img src={ProductImg} alt="Foto" />
        <p>Quantidade em estoque: {item.qty_stock}</p>
        <DivPrice>
          <p>R$ </p>
          <Pgreen>{item.price}</Pgreen>
        </DivPrice>
        {exist ? (
          <ButtonDisabled onClick={() => onClickAlert()}>
            Adicionado
          </ButtonDisabled>
        ) : (
          <Button onClick={() => onClickAdd(item)}>+Adicionar</Button>
        )}
      </ItemCard>
    );
  });

  return <Container>{productsCard}</Container>;
};
