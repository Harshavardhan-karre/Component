import { Button, styled } from "@mui/material";
import React from "react";
import {theme} from '../../../themes/index'
const CustomButton = styled(Button)<{
  radius: string;
  padding?: string;
  Buttoncolor?:string;
  width: string;
  height: string;
}>`
  padding: ${theme.spacing(4)};
  background: ${theme.palette.secondary.dark},
  width:${theme.typography.body1.width},
  height:${theme.typography.body1.height},`
interface InputProps{
  radius: string;
  padding?: string;
  text:string;
  Buttoncolor?:string;
  width: string;
  height: string;
}
export default function index({ radius, padding, text, Buttoncolor, width, height }:InputProps) {
  return (
      <CustomButton
        radius={radius}
        padding={padding}
        Buttoncolor={Buttoncolor}
        width={width}
        height={height}
      >
        {text}
      </CustomButton>
  );
}
