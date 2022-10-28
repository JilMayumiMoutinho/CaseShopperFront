import styled from "styled-components";
import { greenShopper } from "../../constants/colors";

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  gap: 1.5rem;
  padding: 2rem;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  height: 18rem;
  border-radius: 0.375rem;
  border: 0.0625rem solid #ccc6c6;
  box-shadow: 0.375rem 0.375rem #ccc6c6;
  background-color: white;
  color: #666666;
  padding: 1rem;
  font-size: small;
  img {
    height: 4rem;
    border-radius: 1rem;
  }
  :hover {
    border: 0.0625rem solid #666666;
    box-shadow: 0.625rem 0.625rem #ccc6c6;
    img {
      height: 4.5rem;
    }
  }
  @media screen and (max-width: 480px) {
    img {
    height: 4rem;
  }
  }
`;

export const Pgreen = styled.p`
  color: ${greenShopper};
  font-size: large;
  margin-left: 0.25rem;
`;

export const Button = styled.button`
  width: 5.625rem;
  height: 1.9375rem;
  color: ${greenShopper};
  border: solid 0.0625rem ${greenShopper};
  border-radius: 0.5rem 0 0.5rem 0;
  font-size: 0.75rem;
  letter-spacing: 0.0187rem;
  margin-top: 1rem;
  :hover {
    background-color: ${greenShopper};
    color: white;
  }
`;

export const ButtonDisabled = styled.button`
  width: 5.625rem;
  height: 1.9375rem;
  color: white;
  background-color: ${greenShopper};
  border: solid 0.0625rem ${greenShopper};
  border-radius: 0.5rem 0 0.5rem 0;
  font-size: 0.75rem;
  letter-spacing: 0.0187rem;
  margin-top: 1rem;
`;

export const DivPrice = styled.div`
  display: flex;
  align-items: center;
`;
