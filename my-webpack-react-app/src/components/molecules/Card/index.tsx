import React from "react";
import Text from "../../atoms/Text/index";
import styled from "styled-components";
import Button from "../../atoms/Button/index";
import { Box, Stack } from "@mui/material";
import {theme} from '../../../themes/index';
const CustomBox = styled(Box)`
  background:${theme.palette.primary.light};
  padding: ${theme.spacing(16)};;
  box-sizing: border-box;
  width:fit-content;
`;
const CustomStack = styled(Stack)`
  width: ${theme.spacing(138)};
  height: ${theme.spacing(57)};
`;

export default function index() {
  return (
    <CustomBox>
      <CustomStack>
        <Text
          color={theme.palette.secondary.main}
          fontSize={theme.spacing(16)}
          weight={theme.spacing(250)}
          fontFamily={"Gilroy"}
          width={theme.spacing(138)}
          text={"Launch a new"}
        />
        <Text
          color={theme.palette.secondary.main}
          fontSize={theme.spacing(12)}
          weight={theme.spacing(300)}
          fontFamily={"Gilroy"}
          width={theme.spacing(138)}
          text={"CashKick"}
        />
        <br></br>
        <Text
          color={theme.palette.secondary.main}
          fontSize={theme.spacing(8)}
          weight={theme.spacing(250)}
          fontFamily={"Gilroy"}
          boxsizing={"border-box"}
          text={"You have upto $880,000.00 available for a new cash advance"}
          highlight={["$880,000.00"]}
        />
      </CustomStack>
      <br></br>
      <br></br>
      <Button
        radius={theme.spacing(6)}
        padding={`${theme.spacing(10)},${theme.spacing(20)},${theme.spacing(10)},${theme.spacing(20)}`}
        text={"New cash Kick"}
        Buttoncolor={theme.palette.secondary.light}
        width={theme.spacing(138)}
        height={theme.spacing(29)}
      />
    </CustomBox>
  );
}
