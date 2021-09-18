import { useState, useEffect } from "react";
import ChampionCard from "../../components/ChampionCard";
import WeekChampion from "../../components/WeekChampion";

import api from "../../services/api";
import apikey from "../../services/apikey";
import styles from "./styles.module.css";

interface IChampion {
  name: string;
  key: string;
  title: string;
  image: {
    full: string;
  };
}

type TChampions = IChampion[];

interface IData {
  [champions: string]: {
    name: string;
    key: string;
    title: string;
    image: {
      full: string;
    };
  };
}

interface IParams {
  data: IData;
}

type Rotation = number[];

const Home: React.FC = () => {
  const [champions, setChampions] = useState<TChampions>();
  const [rotation, setRotation] = useState<Rotation>(); // rotation = Rotação de Campeões da semana

  function formatChampions(data: IData) {
    const championsArray = [];

    for (let champion in data) {
      championsArray.push(data[champion]);
    }

    setChampions(championsArray); // Possivel Slice para Limitar
  }

  const getRotationData = async () => {
    const { data } = await apikey.get(
      "champion-rotations?api_key=RGAPI-9375936a-59dc-47aa-affb-923ae835875d"
    );

    setRotation(data.freeChampionIds);
  };

  const getAllChampions = async () => {
    const { data } = await api.get<IParams>("champion.json");

    formatChampions(data.data);
  };

  useEffect(() => {
    getAllChampions();
    getRotationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className={styles.home}>

        <h2 className={styles.free_week_title}>Free Week Champions</h2>
        
        <div className={styles.free_week}>

          {champions?.map((champion) => {
            if (rotation?.includes(Number(champion.key))) {
              return <WeekChampion name={champion.name}></WeekChampion>;
            }
          })}
        </div>

        <main className={styles.main}>
          <div className={styles.champions}>
            {
              champions?.slice(0, 50).map((champion, index) => (
                <ChampionCard details={champion} key={index} />
              )) /*Slice para Limitar */
            }
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
