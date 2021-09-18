import { Link } from 'react-router-dom'
import styles from './styles.module.css'

interface IProps {
    details: {
        name: string
        title: string
        image: {
            full: string
        }
    }
}

const ChampionCard: React.FC<IProps> = ({details}) => {
    
    function generateUrl(championUrl: string){  // Função para juntar a url base + ChampionUrl.split + _0.jpg
        let splited = championUrl.split('.')

        return 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + splited[0] + '_0.jpg'
    }

    const imageUrl = generateUrl(details.image.full)

    return (

        <Link className={styles.card} to={`/${details.name}`} >
            <img className={styles.image} src={imageUrl} alt={details.name + 'Image'} />
            <h3 className={styles.name} >{details.name}</h3>
            <p className={styles.title} >{details.title}</p>
        </Link>
    )
}


export default ChampionCard