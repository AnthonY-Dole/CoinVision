import Footer from "@/Component/Footer";
import { useEffect, useState } from "react";

import CustomTable from "@/Component/Table";
import { getCoins } from "@/Api";
import { Input, 
  Container,

} from "@chakra-ui/react";
type Props = {};

const Home = ({}: Props) => {
  const [data, setData] = useState([]);
  const title = ["Monnaie", "Prix", "1h", "24h", "7j", "24h Volume", "Mkt Cap"];

  useEffect(() => {
    getCoins().then((res) => {
      setData(res.data.coins);
    });
  }, []);
  const [searchId, setSearchId] = useState('');

 
  return (
    <div>
      <Container maxW="1200px" centerContent>
       <Input variant='outline' placeholder='Search' onChange={(e) => setSearchId(e.target.value)} 
        maxW="500px" 
        mt={5}
        boxShadow="md"
       />
      <CustomTable title={title} data={searchId ? data.filter((item: any) => item.id.includes(searchId)) : data} /></Container>
      <Footer/>

    </div>
  );
};

export default Home;
