 import Styles from "../styles/header.module.css"
 import Image from "next/image"
const Header = () => {
  return (
      <section className={Styles.header}>
        <div className={Styles.searchBar}>
         <input type="text" placeholder="searh for a place"/>
          <span>location icon</span>
          </div>
          <Image src="/Shower.png" width="100" height="100"/>
          <h3>15C</h3>
        <h2>Shower</h2>
        <date>today november</date>
        <span><i>location icon</i> helniski</span>
      </section>
  )
}

export default Header