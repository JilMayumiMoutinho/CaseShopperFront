import styled from "styled-components";
import {
  greenShopper,
  lightGreyShopper,
  greyShopper,
  blueShopper,
} from "../../constants/colors";

export const Container2 = styled.header`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: fit-content;
  background-color: whitesmoke;
  border-radius: 0 0 0.5rem 0.5rem;
  border: 0.0625rem solid ${greenShopper};
  color: ${greyShopper};
  box-shadow: 0.75rem ${lightGreyShopper};
  @media screen and (max-width: 480px) {
    display: flex;
    width: 95%;
    height: fit-content;
    margin: 0 auto 5% auto;
  }
`;

export const Button = styled.button`
  width: 24.9375rem;
  height: 2.5rem;
  margin-top: 0.125rem;
  padding: 0.5rem;
  color: white;
  border-radius: 0 0 0.5rem 0.5rem;
  border: none;
  font-size: medium;
  letter-spacing: -0.0181rem;
  background-color: ${greenShopper};
  :hover {
    background-color: ${blueShopper};
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
    align-items: center;
    border: 0.0625rem solid ${greenShopper};
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.125rem;
  width: 22rem;
`;

export const DivInfoWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0.125rem;
  padding: 0.125rem;
  width: 22rem;
  border: 0.0625rem solid ${lightGreyShopper};
  flex-wrap: nowrap;
  img {
    width: 1.875rem;
    margin-right: 0.5rem;
  }
  p {
    flex-wrap: nowrap;
    width: 15.625rem;
    text-align: left;
  }
`;

export const ImgPay = styled.img`
  width: 1.875rem;
  height: 2.5rem;
`;

export const ContainerCheck = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Method = styled.label`
width: 100%;
  display: flex;
  margin-left: 0;
  margin-bottom: 0.25rem;
  padding-bottom: 0.25rem;
  span {
    margin-left: 0.2rem;
  }
`;

export const Pgreen = styled.p`
  color: ${greenShopper};
  font-size: large;
  padding: 1rem;
  align-self: center;
`;