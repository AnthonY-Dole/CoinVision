import Footer from "@/Component/Footer";
import { useEffect, useState } from "react";

import CustomTable from "@/Component/Table";
import { getCoins } from "@/Api";
type Props = {};

const Home = ({}: Props) => {
  const [data, setData] = useState([]);
  const title = ["Monnaie", "Prix", "1h", "24h", "7j", "24h Volume", "Mkt Cap"];

  useEffect(() => {
    getCoins().then((res) => {
      setData(res.data.coins);
    });
  }, []);

  return (
    <div>
      <CustomTable title={title} data={data} />
      <Footer/>
    </div>
  );
};

export default Home;
