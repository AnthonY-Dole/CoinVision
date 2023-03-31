import React, { useEffect, useState } from "react";
import Chart from "@/Component/Chart";
import { useLocation } from "react-router-dom";
import { getChart } from "@/Api";
type Props = {};

const Detail = ({}: Props) => {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const { id, price, marketCap } = state?.data;

  useEffect(() => {
    getChart(id ?? "").then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <>
      <div className="DetailsP">
        <section className="pG">
          <h2 className="titreDetails">Graphique du cours de Bitcoin - BTC</h2>

          <div className="graph">
            <Chart data={data} />
          </div>
        </section>
        <section className="pD">
          <h2 className="titreDetails">Statistiques du cours de BTC</h2>
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
