import styled from "styled-components";
import { greenShopper} from "../constants/colors";

export const Button = styled.button`
  width: 5.625rem;
  height: 2.625rem;
  color: white;
  background-color: ${greenShopper};
  border-radius: 2.5rem;
  font-size: 0.875rem;
  letter-spacing: 0.025rem;
  margin: 4px auto 0;
  border: none;
`;