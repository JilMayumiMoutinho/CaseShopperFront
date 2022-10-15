import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Truck from "../assets/deliveryImg.png";
import { goHome } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Button } from "../constants/buttonStyled";
import { HomeContainer, MiddleContainer, DivImageDelivery } from "./styled";

export function SentCartPage() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Header />
      <MiddleContainer>
        <div>
          <p>Lista de pedidos enviada com sucesso!!!</p>
          <p>Já estamos separando suas compras com muito carinho e cuidado!</p>
          <br />
        </div>
        <DivImageDelivery>
          <img src={Truck} alt="Truck" />
        </DivImageDelivery>
      </MiddleContainer>
      <Button onClick={() => goHome(navigate)}>Voltar</Button>
      <Footer />
    </HomeContainer>
  );
}
