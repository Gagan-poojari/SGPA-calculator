"use client"
import './page.css'
import { GiCrossMark } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Home() {
  const closehamops = () => {
    document.querySelector(".cc-main-hamops").style.display = "none";
    document.querySelector(".cc-ham-burg").style.display = "block";
  }
  const openhamops = () => {
    document.querySelector(".cc-main-hamops").style.display = "flex";
    document.querySelector(".cc-ham-burg").style.display = "none";  }
  return (
    <div className="main"><img src="book-bg.webp"></img>
      <div className="cc-heading">
        <div className="cc-cgpa">CGPA</div>
        <div className="cc-calc">CALCULATOR</div>
      </div>
      <div className="cc-ham-burg pointer" onClick={openhamops}><IoMenuOutline /></div>

      <div className="cc-main-ops-outer">
        <div className="cc-main-ops">
          <div className="cc-mo-top">Enter your semester</div>
          <input type="number" name="" className='cc-mo-ta' />
          <Link href={"/details"}><button className='cc-mo-btn pointer'>SUBMIT</button></Link>
        </div>
      </div>

      <div className="cc-main-hamops">
        <div className="cc-mh-close pointer" onClick={closehamops}><GiCrossMark /></div>
        <div className="cc-mh-lnks">Home</div>
        <div className="cc-mh-lnks">Question papers</div>
        <div className="cc-mh-lnks">UUCMS</div>
        <div className="cc-mh-lnks">Notes</div>
        <div className="cc-mh-lnks">UVCE Homepage</div>
      </div>
    </div>
  );
}
