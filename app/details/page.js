"use client"
import React from 'react'
import './page.css'
import { GiCrossMark } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import Link from 'next/link';


const details = () => {
    const closehamops = () => {
        document.querySelector(".cc-main-hamops").style.display = "none";
        document.querySelector(".cc-ham-burg").style.display = "block";
    }
    const openhamops = () => {
        document.querySelector(".cc-main-hamops").style.display = "flex";
        document.querySelector(".cc-ham-burg").style.display = "none";
    }
    return (
        <div className="main"><img src="book-bg.webp"></img>
            <div className="cc-heading">
                <div className="cc-cgpa">CGPA</div>
                <div className="cc-calc">CALCULATOR</div>
            </div>
            <div className="cc-ham-burg pointer" onClick={openhamops}><IoMenuOutline /></div>

            <div className="cc-main-ops-outer">
                <div className="cc-mo-top">Enter your score</div>
                <div className="cc-main-ops">
                    <div className="cc-mo-mid">
                        <div className="cc-mo-mid-ips">
                            <span>Mathematics</span>
                            <div className="cc-mo-mi">
                                <input type="number" name="" className='cc-mo-ta' placeholder='Internal marks' />
                                <input type="number" name="" className='cc-mo-ta' placeholder='External marks' />
                            </div>
                        </div>
                        <div className="cc-mo-mid-ips">
                            <span>Physics</span>
                            <div className="cc-mo-mi">
                                <input type="number" name="" className='cc-mo-ta' placeholder='Internal marks' />
                                <input type="number" name="" className='cc-mo-ta' placeholder='External marks' />
                            </div>
                        </div>
                        <div className="cc-mo-mid-ips">
                            <span>Electrical</span>
                            <div className="cc-mo-mi">
                                <input type="number" name="" className='cc-mo-ta' placeholder='Internal marks' />
                                <input type="number" name="" className='cc-mo-ta' placeholder='External marks' />
                            </div>
                        </div>
                        <div className="cc-mo-mid-ips">
                            <span>Graphics</span>
                            <div className="cc-mo-mi">
                                <input type="number" name="" className='cc-mo-ta' placeholder='Internal marks' />
                                <input type="number" name="" className='cc-mo-ta' placeholder='External marks' />
                            </div>
                        </div>
                        <div className="cc-mo-mid-ips">
                            <span>English</span>
                            <div className="cc-mo-mi">
                                <input type="number" name="" className='cc-mo-ta' placeholder='Internal marks' />
                                <input type="number" name="" className='cc-mo-ta' placeholder='External marks' />
                            </div>
                        </div>
                        <div className="cc-mo-mid-ips">
                            <span>Media Presentation</span>
                            <div className="cc-mo-mi">
                                <input type="number" name="" className='cc-mo-ta' placeholder='Internal marks' />
                                <input type="number" name="" className='cc-mo-ta' placeholder='External marks' />
                            </div>
                        </div>
                        <div className="cc-mo-mid-ips">
                            <span>Physics Lab</span>
                            <div className="cc-mo-mi">
                                <input type="number" name="" className='cc-mo-ta' placeholder='Internal marks' />
                                <input type="number" name="" className='cc-mo-ta' placeholder='External marks' />
                            </div>
                        </div>
                        <div className="cc-mo-mid-ips">
                            <span>Electical Lab</span>
                            <div className="cc-mo-mi">
                                <input type="number" name="" className='cc-mo-ta' placeholder='Internal marks' />
                                <input type="number" name="" className='cc-mo-ta' placeholder='External marks' />
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={"/display"}>
                    <button className='cc-mo-btn pointer'>Calculate</button>
                </Link>
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

export default details
