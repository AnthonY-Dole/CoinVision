import React from "react";
import Button from "@/Component/Button";
import { Input } from "@chakra-ui/react";
import Footer from "@/Component/Footer";
type Props = {};

const Home = ({}: Props) => {
  return (
    <div>
      <Button variant="solid">Button</Button>
      <Footer/>
    </div>
  );
};

export default Home;
