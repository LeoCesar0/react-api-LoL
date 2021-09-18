import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api";

import styles from "./styles.module.css";

interface IChampion {
  name: string;
  key: string;
  title: string;
  image: {
    full: string;
  };
  lore: string
  skins: {name: string}[]
  tags: string[]
  stats: {
    [key: string]: number
  }
}

interface IData {
  data: [champion: IChampion];
}

interface IParams {
  champion: string;
}

const Champion: React.FC = () => {
  const [champion, setChampion] = useState<IChampion>();
  const { champion: params } = useParams<IParams>();

  const getChampion = async () => {
    const { data } = await api.get<IData>(`champion/${params}.json`);

    const champData = data.data;

    for (let key in champData) {
      setChampion(champData[key]);
    }
  };

  console.log(champion);

  useEffect(() => {
    getChampion();
  }, []);

  function generateUrl(championUrl: string) {
    // Função para juntar a url base + ChampionUrl.split + _0.jpg
    let splited = championUrl.split(".");

    return (
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
      splited[0] +
      "_0.jpg"
    );
  }

  let imageUrl: string = "";

  if (champion) {
    imageUrl = generateUrl(champion.image.full);
  }

  return (
    <div className={styles.champion_page}>
      <main className={styles.main}>
        <div className={styles.image_container}>
          <img className={styles.image} src={imageUrl} alt={champion?.name} />
        </div>

        <div className={styles.information}>
          <h3 className={styles.name}>{champion?.name}</h3>

          <span className={styles.tags} >
          { champion && champion.tags.map((tag) => (
            tag
          )).join(" | ") }
          </span>

          <p className={styles.title}>{champion?.title}</p>
          <p className={styles.lore}>{champion?.lore} Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non doloribus iure dicta deserunt et nobis consequuntur impedit fugiat eius. Officia officiis adipisci blanditiis ipsam porro laborum amet impedit eaque.</p>
          <p className={styles.lore}>{champion?.lore} Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non doloribus iure dicta deserunt et nobis consequuntur impedit fugiat eius. Officia officiis adipisci blanditiis ipsam porro laborum amet impedit eaque.</p>
          <p className={styles.lore}>{champion?.lore} Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non doloribus iure dicta deserunt et nobis consequuntur impedit fugiat eius. Officia officiis adipisci blanditiis ipsam porro laborum amet impedit eaque.</p>
        </div>

      </main>
    </div>
  );
};

export default Champion;
