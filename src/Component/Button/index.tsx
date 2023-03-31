import { Button } from "@chakra-ui/button";
import React from "react";

type CustomButtonProps = {
  variant?: "ghost" | "solid" | "navBar" | "primary";
  stylesProps?: Object;
  children: any;
  onClick?: () => void;
};

export default function CustomButton({
  variant = "solid",
  children,
  stylesProps = {},
  onClick,
}: CustomButtonProps) {
  return (
    <Button variant={variant} sx={stylesProps} onClick={onClick}>
      {children}
    </Button>
  );
}
