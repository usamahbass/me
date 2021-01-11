import { Divider as DividerChakra } from "@chakra-ui/react";

export default function Divider({ ...rest }) {
  return (
    <DividerChakra
      borderWidth="2px"
      borderColor="#EDF2F7"
      opacity="1"
      borderWidth="2px"
      {...rest}
    />
  );
}
