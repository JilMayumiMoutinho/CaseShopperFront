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
    width: 12.5rem;
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
  }
`;

export const ButtonMobile = styled(Button)`
  position: absolute;
  margin-left: 32rem;
  margin-top: -2.6rem;
  @media screen and (max-width: 480px) {
    margin-left: 15.3rem;
  }
`;

export const SearchDiv = styled.div`
  width: 100%;
  height: 2.625rem;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45rem;
  height: 2.625rem;
  gap: 1%;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 10rem;
    flex-wrap: wrap;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 2.625rem;
  border-radius: 2.5rem;
  padding: 1rem;
  border: none;
`;

export const LabelStyled = styled.label`
  position: relative;
  width: 65%;
  top: -0.75rem;
  left: 8.7rem;
  padding: 0.25rem;
  font-size: 0.625rem;
  letter-spacing: -0.0181rem;
  color: #666666;
  @media screen and (max-width: 480px) {
    top: 1rem;
  left: -3rem;
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 43.75rem;
  @media screen and (max-width: 480px) {
    width: 95%;
    flex-wrap: wrap;
    justify-content: center;
   }
`;

export const ButtonUser = styled(Button)`
  width: 22rem;
  @media screen and (max-width: 480px) {
    width: 10rem;
    margin-top: 0.2rem;
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
