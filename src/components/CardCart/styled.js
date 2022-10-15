import styled from "styled-components";
import {
  greenShopper,
  greyShopper,
  } from "../../constants/colors";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 24.625rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.125rem;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 98%;
    height: fit-content;
    margin-bottom: 1rem;
  }
`;

export const ItemCard = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-top: 0.125rem;
  width: 24.375rem;
  border: 0.0625rem solid ${greenShopper};
  border-radius: 0.5rem;
  font-size: normal;
  img {
    width: 5.8rem;
  }
  @media screen and (max-width: 480px) {
    width: 22rem;
    img {
    width: 4.98rem;
    }
  }
`;

export const DivQty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 1.875rem;
  border-radius: 1rem;
  border: solid 0.0625rem ${greyShopper};
  color: #666666;
`;

export const DivPrice = styled.div`
  width: 15.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 14rem;
  }
`;

export const DivUnits = styled.div`
  display: flex;
  img {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

export const Pgreen = styled.p`
  color: ${greenShopper};
  font-size: large;
  margin-left: 0.25rem;
`;

export const GarbageImg = styled.img`
  height: 1.875rem;
  margin: 0.25rem;
  @media screen and (max-width: 480px) {
    width: 0.5rem;
    height: 1.9rem;
    margin: 0;
  }
`;
