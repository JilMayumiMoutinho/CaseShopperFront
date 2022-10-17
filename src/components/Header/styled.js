import styled from "styled-components";
import { Button } from "../../constants/buttonStyled";
import { blueShopper } from "../../constants/colors";

export const Container = styled.header`
  background-image: linear-gradient(to top, #666666, #eaeaea, white);
  display: flex;
  padding: 0.625rem;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  margin: 0.3125rem;
  img {
    width: 10rem;
    border-radius: 0.75rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

export const CartDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${blueShopper};
  padding: 0.625rem;
  border-radius: 0.375rem;
  color: white;
  img {
    height: 64px;
  }
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const BalanceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-around;
  border-radius: 0.375rem;
  color: white;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 43.75rem;
  @media screen and (max-width: 480px) {
    margin-top: -2%;
    width: 95%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  width: 100%;
  height: 2.625rem;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: 6rem;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  margin: 0 auto;
  width: 65%;
  height: 2.625rem;
  padding: 0.625rem;
  border-radius: 2.5rem;
  overflow: hidden;
  border: none;
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 auto 4%;
  }
`;

export const ButtonMobile = styled(Button)`
  margin-top: -0.03rem;
  margin-left: -5rem;
  z-index: 1;
  @media screen and (max-width: 480px) {
    margin-left: 75%;
    margin-top: -3.4rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: end;
  width: 43.75rem;
  height: 2.625rem;
  gap: 7%;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 10rem;
    margin-top: -4%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const DivForLabel = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 2.625rem;
  border-radius: 2.5rem;
  padding: 1rem;
  border: none;
`;

export const LabelStyled = styled.p`
  margin-bottom: -1.1rem;
  margin-left: 0.7rem;
  padding: 0.25rem;
  font-size: 0.625rem;
  letter-spacing: -0.0181rem;
  color: #666666;
  z-index: 1;
  @media screen and (max-width: 480px) {
    top: 1rem;
    left: -3rem;
  }
`;

export const DivForLabelDate = styled(DivForLabel)`
  width: 13.5rem;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ButtonUser = styled(Button)`
  width: 6rem;
  @media screen and (max-width: 480px) {
    width: 10rem;
    margin-top: 1% auto;
  }
`;

export const BalanceP = styled.p`
  font-weight: 800;
  font-size: large;
`;

export const CartImgIcon = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    margin-top: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 42.5%;
  }
`;

export const FilterSelect = styled.select`
  width: 20%;
  height: 2.625rem;
  border-radius: 2.5rem;
  padding-left: 0.7rem;
  background-color: white;
  border: none;
  @media screen and (max-width: 480px) {
    margin-top: 4%;
    width: 100%;
    display: flex;
    justify-content: center;
    left: 42.5%;
  }
`;

export const MenuItem = styled.option`
  color: ${blueShopper};
  @media screen and (max-width: 480px) {
    margin-top: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 42.5%;
  }
`;
