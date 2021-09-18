import { useState, useEffect } from "react";
import ChampionCard from "../../components/ChampionCard";

import api from "../../services/api";
import styles from "./styles.module.css";

interface IChampion {
  name: string;
  key: string;
  title: string;
  image: {
    full: string
  }
}

type TChampions = IChampion[];

interface IData {
  [champions: string]: {
    name: string;
    key: string;
    title: string;
    image: {
      full: string
    }
  };
}

interface IParams {
  data: IData;
}

const Home: React.FC = () => {
  const [champions, setChampions] = useState<TChampions>();

  function formatChampions(data: IData) {
    const championsArray = [];

    for (let champion in data) {
      championsArray.push(data[champion]);
    }

    setChampions(championsArray.slice(0,40));
  }

  const getAllChampions = async () => {
    const { data } = await api.get<IParams>("champion.json");

    formatChampions(data.data);
  };

  useEffect(() => {
    getAllChampions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(champions);

// {champions && <ChampionCard details={champions?.[2]}/>}
// { champions?.map((champion, index) => <ChampionCard details={champion} key={index} />)}

  return (
    <div className="container">
      <div className={styles.home}>
        <main className={styles.main}>
          <div className={styles.champions}>

          { champions?.map((champion, index) => <ChampionCard details={champion} key={index} />)}

          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
