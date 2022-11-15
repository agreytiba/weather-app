import Head from 'next/head'
import Image from 'next/image'
import DailyWeather from '../components/DailyWeather'
import Header from '../components/Header'
import Todayweather from '../components/Todayweather'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
       <Header/>
      <section className={styles.right}>
        <span>two icon c & f</span>
        <div className={styles.dailyWeather}>
            <DailyWeather day={"tomorrow"} img={ "/Sleet.png"} />
          <DailyWeather day={ "sun 7 jun"} img={"/Sleet.png"} />
            <DailyWeather day={"sat 6 jun"} img={"/Thunderstorm.png"} />
            <DailyWeather day={"fri 5 jun"} img={"/Clear.png" } />
          <DailyWeather day={ "thur 4 jun"} img={"/LightRain.png"} />
        </div>
          <div className={styles.todayWeather}>
          <h2>Today's Highlights</h2>
            <section>
          <Todayweather
            type={"wind status"}
            value={"7mph"}
            icon={"icon"}
           
          />
          <Todayweather
            type={"wind status"}
            value={"7mph"}
            icon={"icon"}
           
          />
          <Todayweather
            type={"Humidity"}
            value={"84%"}
            icon={"icon"}
          
          />
          <Todayweather
            type={"visibity"}
            value={"6,4miles"}
          />
          <Todayweather
            type={"Air pressure"}
            value={"998mb"}
         
              />
            </section>
         </div>
        
      </section>
      </div>
    </div>
  )
}
