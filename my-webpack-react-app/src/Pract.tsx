import React from 'react'
import {Box} from '@mui/material'
import Img from '../assets/Img.svg';
export default function Pract() {
  return (
    <Box>
      <h1>Hello This is File from React Made with Bundler + Babel</h1>
      <img src={Img} width={"200px"} height={"200px"}></img>
    </Box>
  )
}
