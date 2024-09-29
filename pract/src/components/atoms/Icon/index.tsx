import React, { ReactNode } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "../../../App.css";
import styled from "styled-components";
import { theme } from "../../../themes/index.tsx";
import IconButton from '@mui/material/IconButton'
type InputProps = {
  icon?:ReactNode,
  color:
    | "inherit"
    | "disabled"
    | "action"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  fontSize: "small" | "inherit" | "large" | "medium";
};

export default function index(props: InputProps) {
  const { icon, color, fontSize } = props;

  const StyledInfo = styled(InfoOutlinedIcon)`
  margin-top: ${theme.spacing(2)};
`;
  return <StyledInfo color={color} fontSize={fontSize} />;
}
