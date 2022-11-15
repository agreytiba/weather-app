import Image from "next/image"
import styles from "../styles/Dailyweather.module.css"
const DailyWeather = ({day,img}) => {
  return (
      <div className={styles.container}>
          <date>{day}</date>
          <Image src={img} width="100" height="100" />
          <span><p>16 c</p> <p>11</p></span>
    </div>
  )
}

export default DailyWeather