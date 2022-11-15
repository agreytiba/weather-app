import styles from "../styles/Todayweather.module.css"

const Todayweather = ({type,value,icon}) => {
  return (
      <div className={styles.container}>
         
              <p>{type }</p>
              <h3>{ value}</h3>
              <span>{icon}</span>
      
    </div>
  )
}

export default Todayweather