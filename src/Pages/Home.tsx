import Footer from "@/Component/Footer";
import { useEffect, useState } from "react";

import CustomTable from "@/Component/Table";
import { getCoins } from "@/Api";
import { Input, Container, SimpleGrid } from "@chakra-ui/react";
import { StatsCard } from "@/Component/Stats";

type Props = {};

const Home = ({}: Props) => {
  const [data, setData] = useState([]);
  const title = ["Monnaie", "Prix", "1h", "24h", "7j", "24h Volume", "Mkt Cap"];
  const [global, setGlobal] = useState([]);
  useEffect(() => {
    getCoins().then((res) => {
      setData(res.data.coins);
    });
    fetch("https://api.coinpaprika.com/v1/global").then((res) =>
      res.json().then((res) => {
        setGlobal(res);
      })
    );
  }, []);
  const [searchId, setSearchId] = useState("");
  console.log(global);
  return (
    <div>
      <Container maxW="1200px" centerContent>
        <Input
          variant="outline"
          placeholder="Search"
          onChange={(e) => setSearchId(e.target.value)}
          maxW="500px"
          mt={5}
          boxShadow="md"
        />
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 5, lg: 8 }}
          style={{
            marginTop: "20px",
          }}
        >
          <StatsCard
            title={"Nombre de crypto-monnaies"}
            stat={global?.cryptocurrencies_number}
          />
          <StatsCard
            title={"Doination du Bitcoin"}
            stat={global?.bitcoin_dominance_percentage + "%"}
          />
          <StatsCard
            title={"ATH du marché"}
            stat={
              Intl.NumberFormat("Eu").format(global?.market_cap_ath_value) + "€"
            }
          />
        </SimpleGrid>
        <CustomTable
          title={title}
          data={
            searchId
              ? data.filter((item: any) => item.id.includes(searchId))
              : data
          }
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
