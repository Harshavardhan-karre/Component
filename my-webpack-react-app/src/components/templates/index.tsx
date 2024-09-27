import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Org from "../organisms/CardOrg/index";
import {theme} from '../../themes/index'
const CustomBox = styled(Box)`
backgroundColor:${theme.palette.primary.main};
      color: ${theme.palette.secondary.main};
      borderRadius: ${theme.spacing(22.5)};
      padding: ${theme.spacing(8)};
    display:flex;
    justify-content:center;
    align-items:center;
`;

interface InputProps{
  children:React.ReactNode;
}

export default function index({ children }:InputProps) {
  return <CustomBox>{children}</CustomBox>;
}
