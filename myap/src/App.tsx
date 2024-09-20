import { Button } from "@mui/material";
import React from "react";
import Hello from "./Hello.tsx";
import Pract from './Pract.tsx';
export default function App() {
  return <div>
    <Hello name={", World!"}/>
    <Pract/>
  </div>;
}
