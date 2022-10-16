import React, { useContext } from "react";
import { GlobalContext } from "../global/GlobalContext";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CartOpen } from "../components/CartOpen/CartOpen";
import { Card } from "../components/Card/Card";
import Loading from "../assets/loading.gif";
import {
  HomeContainer,
  ProductsContainer,
  LoadingGif,
  ProductsContainerMobile,
  ButtonGoToTop,
} from "./styled";
import { Pagination } from "@mui/material";

export function HomePage() {
  const { page, setPage, isOpen, isLoading, setUpPage } =
    useContext(GlobalContext);

  const onChangePage = (event, value) => {
    setPage(value);
  };

  const goToTop = () => {
    setUpPage(window.scrollY);
  };

  window.addEventListener("scroll", goToTop);

  return (
    <HomeContainer>
      <Header />
      {isLoading && (
        <LoadingGif src={Loading} alt="Loading. Página carregando" />
      )}
      {!isLoading && (
        <ProductsContainer>
          <Card />
          {isOpen && <CartOpen />}
        </ProductsContainer>
      )}
      {!isLoading && (
        <ProductsContainerMobile>
          {!isOpen && <Card />}
          {isOpen && <CartOpen />}
        </ProductsContainerMobile>
      )}
      <Pagination
        className="PaginationMobile"
        count={3}
        onChange={onChangePage}
        page={page}
        variant="outlined"
        shape="rounded"
        size="large"
      />
      <ButtonGoToTop onClick={() => setUpPage(window.scroll(0, 0))}>
        Voltar ao topo
      </ButtonGoToTop>
      <Footer />
    </HomeContainer>
  );
}
