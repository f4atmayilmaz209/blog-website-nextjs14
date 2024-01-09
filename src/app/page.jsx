"use client"
import Tags from "../components/tags/Tags"
import styles from "./home.module.css"
import Image from "next/image"


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ratione officia similique, nisi ipsam alias magni cumque provident, perspiciatis delectus ad quod fugiat deleniti. Atque aut corrupti quaerat sapiente nemo.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>

        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <Tags/> 

    </div>
  )
}
