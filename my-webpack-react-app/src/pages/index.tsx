import React from "react";
import Layout from "../components/templates/index";
import Card from "../components/molecules/Card/index";
import {theme} from '../themes/index';
import { ThemeProvider } from "@mui/material";
export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Card />
      </Layout>
    </ThemeProvider>
  );
}
