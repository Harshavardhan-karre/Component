import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {theme} from '../../../themes/index'
interface InputProps {
  padding?: string;
  color: string;
  fontSize: string;
  weight: string;
  fontFamily: string;
  boxsizing?: string;
  width?: string;
  height?: string;
  text?: string;
  highlight?: string[];
}
const Highlighted = styled.span`
  color: inherit;
  font-weight: ${theme.typography.body1.fontWeight};
`;

const StyledTypo = styled(Typography)<InputProps>(
  ({ color, fontSize, weight, fontFamily }) => ({
    color: color,
    fontSize: fontSize,
    fontWeight: weight,
    fontFamily: fontFamily,
  }),
);
const StyledSpan = styled.span`
  color: ${theme.palette.secondary.main};
  font-weight: ${theme.typography.body1.fontWeight};
`;

const StyledBox=styled(Box)<{width:string, height:string, boxsizing:string}>`
 width: ${props=>props.width};
height: ${props=>props.height};
boxSizing: ${props=>props.boxsizing};
`

export default function CustomText({
  padding,
  color,
  fontSize,
  weight,
  fontFamily,
  boxsizing,
  width,
  height,
  text,
  highlight,
}: InputProps) {
  const str = highlight === undefined ? "" : highlight[0];
  const parts = text !== undefined ? text.split(str) : "";
  return (
    <StyledBox width={width ||"auto"} height={height ||"auto"} boxsizing={boxsizing ||"content-box"}>
      <StyledTypo
        color={color}
        fontSize={fontSize}
        weight={weight}
        fontFamily={fontFamily}
      >
        {text}
      </StyledTypo>
    </StyledBox>
  );
}
