import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import CartImg from "../../assets/cartIcon.png";
import Logo from "../../assets/logoImg.png";
import Bag from "../../assets/bagIconGreen.png";
import UserForm from "./userForm";
import {
  Container,
  LogoDiv,
  CartDiv,
  SearchDiv,
  SearchInput,
  ButtonMobile,
  BalanceDiv,
  InputsDiv,
  BalanceP,
  CartImgIcon,
  FilterSelect,
  MenuItem,
} from "./styled";
import { CalculateBalance } from "../../services/request";
import { goHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const {
    query,
    setQuery,
    isOpen,
    setIsOpen,
    cart,
    balance,
    setBalance,
    setOrder,
    setSort,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    CalculateBalance(setBalance, cart);
  }, [cart, balance]);

  const onChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleChangeOrder = (event) => {
    const choice = event.target.value;
    const choiceArr = choice.split(" ");
    setOrder(choiceArr[1]);
    setSort(choiceArr[0]);
  };

  let balanceDisplay = "0,00";
  if (balance !== 0) {
    balanceDisplay = balance;
  }

  const onClickCart = (isOpen) => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <LogoDiv>
        <img src={Logo} alt="Logo Shopper" onClick={() => goHome(navigate)} />
      </LogoDiv>
      <InputsDiv>
        <UserForm />
        <br />
        <SearchDiv>
          <SearchInput
            placeholder="O que você procura?"
            value={query}
            onChange={onChangeQuery}
          />
          <ButtonMobile>Buscar</ButtonMobile>
          <FilterSelect
            value={""}
            label="Ordenar por preço"
            onChange={handleChangeOrder}
          >
            <MenuItem value="">Filtro</MenuItem>
            <MenuItem value={"price ASC"}>Preço - Crescente</MenuItem>
            <MenuItem value={"price DESC"}>Preço - Decrescente</MenuItem>
            <MenuItem value={"name ASC"}>Nome - Crescente</MenuItem>
          </FilterSelect>
        </SearchDiv>
      </InputsDiv>
      <CartDiv onClick={() => onClickCart(isOpen)}>
        <img src={Bag} alt="Bag of groceries" />
        <BalanceDiv>
          <BalanceP>R$ {balanceDisplay}</BalanceP>
          <p>
            ABRIR <strong> v </strong>
          </p>
        </BalanceDiv>
      </CartDiv>

      <CartImgIcon>
        <img src={CartImg} alt="Cart" onClick={() => onClickCart(isOpen)} />
      </CartImgIcon>
    </Container>
  );
};
