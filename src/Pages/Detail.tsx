import React, { useEffect, useState } from "react";
import Chart from "@/Component/Chart";
import { useLocation } from "react-router-dom";
import { getChart } from "@/Api";
import CustomButton from "@/Component/Button";
import { Stack } from "@chakra-ui/react";
type Props = {};

const Detail = ({}: Props) => {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const { id, price, marketCap } = state?.data;

  useEffect(() => {
    getChart(id ?? "", "1m").then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <>
      <div className="DetailsP">
        <section className="pG">
          <h2 className="titreDetails">Graphique du cours de {id}</h2>

          <div className="graph">
            <Chart data={data} />
            <Stack direction="row" align="center" justify="center" mt={4}>
              <CustomButton
                variant="primary"
                onClick={() => {
                  getChart(id, "24h").then((res) => {
                    setData(res.data);
                  });
                }}
              >
                24h
              </CustomButton>

              <CustomButton
                variant="primary"
                onClick={() => {
                  getChart(id, "1w").then((res) => {
                    setData(res.data);
                  });
                }}
              >
                1W
              </CustomButton>
              <CustomButton
                variant="primary"
                onClick={() => {
                  getChart(id, "1m").then((res) => {
                    setData(res.data);
                  });
                }}
              >
                1M
              </CustomButton>
            </Stack>
          </div>
        </section>
        <section className="pD">
          <h2 className="titreDetails">Statistiques du cours de {id}</h2>
          <div className="infos">
            <ul>
              <li>Prix : {price.toFixed(2)} € </li>
              <li>MKTP : {marketCap} </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Detail;
