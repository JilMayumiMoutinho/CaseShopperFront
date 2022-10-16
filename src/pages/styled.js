import styled, { keyframes } from "styled-components";
import { greenShopper, blueShopper } from "../constants/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ProductsContainerMobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin: auto;
  }
`;

export const MiddleContainer = styled.div`
  width: 50%;
  height: 17rem;
  border: 0.0625rem solid ${greenShopper};
  box-shadow: 0.375rem 0.375rem ${blueShopper};
  border-radius: 0.5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 11px auto;
  @media screen and (max-width: 480px) {
    width: 90%;
    height: 20rem;
    margin: 16px auto;
  }
`;

const BounceAnimation = keyframes`
  0% { margin-top: 0; }
  50% { margin-top: 0.625rem }
  100% { margin-top: 0 }
`;

export const DivImageDelivery = styled.div`
  height: 8.75rem;
  img {
    width: 75%;
    animation: ${BounceAnimation} 0.5s linear infinite;
  }
`;

export const LoadingGif = styled.img`
  width: 12.5rem;
  margin: 4% auto;
`;

export const ButtonGoToTop = styled.button`
  display: flex;
  margin-top: -3.5rem;
  margin-left: 60rem;
  align-items: center;
  text-align: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: none;
  background-color: ${greenShopper};
  color: white;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    margin: -1.7rem 0 0 78%;
    width: 4.5rem;
    height: 4.5rem;
  }
`;
