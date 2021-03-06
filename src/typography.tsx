import styled from "styled-components";
import { Color } from "./colors";

type FontSize = "xxx-large" | "xx-large" | "x-large" | "large" | "medium" | "small" | "x-small";

const fontSizes = {
  "xxx-large": 55,
  "xx-large": 45,
  "x-large": 30,
  large: 24,
  medium: 20,
  small: 16,
  "x-small": 12,
};

export const Headline = styled.span<{ size?: FontSize; color?: Color }>`
  //font-family: 'Alegreya', serif;  font-weight: 700;
  //font-family: 'Press Start 2P', cursive;  
  font-family: 'Kanit', sans-serif;
  //font-family: 'Changa One', cursive;
  font-size: ${props => fontSizes[props.size || "x-large"]}px;
  color: ${props => props.color || Color.secondary70};
  text-align: center;
`;

export const EmphasisSpan = styled.span<{ size?: FontSize; color?: Color; compact?: boolean }>`
  font-weight: 600;
  font-size: ${props => fontSizes[props.size || "x-large"]}px;
  color: ${props => props.color || Color.secondary70};
  ${props => (props.compact ? "margin: 0" : "")};
  text-align: center;
`;

export const BodySpan = styled.span<{ size?: FontSize; color?: Color; compact?: boolean }>`
  font-weight: 400;
  font-size: ${props => fontSizes[props.size || "x-large"]}px;
  color: ${props => props.color || Color.secondary70};
  ${props => (props.compact ? "margin: 0" : "")};
`;
