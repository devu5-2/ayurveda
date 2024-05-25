import Script from 'next/script'
import StarRating from '../components/StarRating';
import styles from "./page.module.css";
import { RxCross2 } from "react-icons/rx";
import { AiFillLike,AiFillDislike } from "react-icons/ai";

export default function Home() {
  return (
    <nav style={{color:"black",width:"100%"}}>
    <main className={styles.main}>
      <div className={styles.wrapper}>
      <div className={styles.wrapper.h1}>
        <div className={styles.align}>
        <h1>Leave a Review</h1><RxCross2 style={{
          fontSize: "23px",
          backgroundColor: "white",
          color: "black",
          cursor: "pointer",
        }} />

        </div>
      </div>
      <div className={styles.wrapper.h2}>
        <h2>Safety</h2>
        <p>Effectiveness of the organization's safety programs</p>
                 <StarRating />
        <h2>Communication</h2>
        <p>Adequately communicates ideas with coworkers</p>
        <StarRating />
        <h2>Would you recommend, Ayurveda</h2>
        <p>I highly recommend this business.</p>
        <div className={styles.align2}>
        <AiFillDislike className={styles.likeicons}/><span style={{color:"black"}}>No</span>
        <AiFillLike className={styles.likeicons}
        /><span className={styles.likeiconshover} style={{color:"black"}}>Yes</span>
        </div>

        <h2 >Praise</h2>
        <p>Compliment, accoding to your experience with us.</p>
        <div className={styles.option}>
        <span>Good</span>
        <span>Clean</span>
        <span>Amazing</span>
        </div>
        <div className={styles.submit}>

        <a href= "#">Submit</a>
        </div>
      </div>
      </div>
    </main>
    </nav>
  );
}
