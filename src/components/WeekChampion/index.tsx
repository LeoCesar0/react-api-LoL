
import styles from "./styles.module.css"

interface IProps {
    name: string
}

const WeekChampion: React.FC<IProps> = ({name}) => {

    return (
       <span className={styles.item}> {name} </span>
    )
}


export default WeekChampion