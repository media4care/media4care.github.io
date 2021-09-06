import styled from "styled-components";
import { Color } from "./colors";

type FontSize = "xxx-large" | "xx-large" | "x-large" | "large" | "medium" | "small" | "x-small";

const fontSizes = {
  "xxx-large": 60,
  "xx-large": 45,
  "x-large": 20,
  large: 18,
  medium: 16,
  small: 14,
  "x-small": 12,
};

const OverflowFixedSpan = styled.span`
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
`;

export const Emphasis = styled.p<{ size?: FontSize; color?: Color; compact?: boolean }>`
  font-weight: bold;
  font-size: ${props => fontSizes[props.size || "x-large"]}px;
  color: ${props => props.color || Color.secondary70};
  ${props => (props.compact ? "margin: 0" : "")};
`;

export const Headline = styled(OverflowFixedSpan)<{ size?: FontSize; color?: Color }>`
  font-weight: 700;
  font-size: ${props => fontSizes[props.size || "x-large"]}px;
  color: ${props => props.color || Color.secondary70};
  text-align: center;
`;

export const Body = styled.p<{ size?: FontSize; color?: Color; compact?: boolean }>`
  font-weight: ${props => (props.size === "x-large" || !props.size ? 600 : "normal")};
  font-size: ${props => fontSizes[props.size || "x-large"]}px;
  color: ${props => props.color || Color.secondary70};
  ${props => (props.compact ? "margin: 0" : "")};
`;

// FIXME find an elegant way
export const BodySpan = styled(OverflowFixedSpan)<{ size?: FontSize; color?: Color; compact?: boolean }>`
  font-weight: ${props => (props.size === "x-large" || !props.size ? 600 : "normal")};
  font-size: ${props => fontSizes[props.size || "x-large"]}px;
  color: ${props => props.color || Color.secondary70};
  ${props => (props.compact ? "margin: 0" : "")};
`;

export const EmphasisSpan = styled(OverflowFixedSpan)<{ size?: FontSize; color?: Color; compact?: boolean }>`
  font-weight: ${props => (props.size === "small" || !props.size ? "normal" : 600)};
  font-size: ${props => fontSizes[props.size || "x-large"]}px;
  color: ${props => props.color || Color.secondary70};
  ${props => (props.compact ? "margin: 0" : "")};
`;
