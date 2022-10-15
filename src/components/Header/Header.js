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
} from "./styled";
import { CalculateBalance } from "../../services/request";
import { goHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { query, setQuery, isOpen, setIsOpen, cart, balance, setBalance } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    CalculateBalance(setBalance, cart);
  }, [cart, balance]);

  const onChangeQuery = (event) => {
    setQuery(event.target.value);
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
        <SearchDiv>
          <SearchInput
            placeholder="O que você procura?"
            value={query}
            onChange={onChangeQuery}
          />
          <ButtonMobile>Buscar</ButtonMobile>
        </SearchDiv>
        <br />
        <UserForm />
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
