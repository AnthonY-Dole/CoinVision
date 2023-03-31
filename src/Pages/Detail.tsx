import React from "react";

type Props = {};

const Detail = ({ }: Props) => {
  return <>
    <div className="DetailsP">
      <section className="pG">
        <h2 className="titreDetails">Graphique du cours de Bitcoin - BTC</h2>

        <div className="graph">
          <p>GRAPHIQUE ICI</p>
        </div>
      </section>
      <section className="pD">
      <h2 className="titreDetails">Statistiques du cours de BTC</h2>
        <div className="infos">
          <ul>
            <li>Prix : </li>
            <li>MKTP : </li>
          </ul>
        </div>
      </section>
    </div>


  </>;
};

export default Detail;
