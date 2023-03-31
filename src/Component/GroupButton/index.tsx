import React from "react";
import { Button, Stack } from "@chakra-ui/react";
type Props = {};

const CustomButton = ({}: Props) => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Button colorScheme="teal" variant="solid">
        Button
      </Button>
      <Button colorScheme="teal" variant="outline">
        Button
      </Button>
      <Button colorScheme="teal" variant="ghost">
        Button
      </Button>
      <Button colorScheme="teal" variant="link">
        Button
      </Button>
    </Stack>
  );
};

export default CustomButton;
