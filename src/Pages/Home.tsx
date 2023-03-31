import React from "react";
import Button from "@/Component/Button";

import { ping } from "@/Api";
type Props = {};

const Home = ({}: Props) => {
  React.useEffect(() => {
    ping().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <Button variant="solid">Button</Button>
    </div>
  );
};

export default Home;
