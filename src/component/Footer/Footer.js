import { FaCertificate, FaAngleDown, FaStar, FaStarHalfAlt, FaUniversity, FaHandPzointRight, FaQuoteLeft, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";
import first from "./img/footer.svg";
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="space">
                <div className="footer">
                    <div className="container">
                        <div className="row m-auto">
                            <div className='d-flex m-auto'>
                                <div className="box" style={{ width: "380px" }} lg={3}>
                                    <div className="logo">
                                        <a href=""><img src={first} alt="" /></a>
                                    </div>
                                    <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                    <h6>Follow Us On</h6>
                                    <ul className='social'>
                                        <li><a href=""><FaFacebookF /></a></li>
                                        <li><a href=""><FaTwitter /></a></li>
                                        <li><a href=""><TiSocialGooglePlus /></a></li>
                                        <li><a href=""><FaLinkedin /></a></li>
                                        <li><a href=""><FaInstagram /></a></li>
                                        <li><a href=""><AiOutlineYoutube /></a></li>
                                        <li><a href=""><FaWhatsapp /></a></li>
                                    </ul>
                                </div>
                                <div className="f-box" style={{ width: "255px" }} lg={3}>
                                    <h6 style={{ color: "White" }}>Feature links</h6>
                                    <ul className='links'>
                                        <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />About us</a></li>
                                        <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Blogs</a></li>
                                        <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Join Us</a></li>
                                        <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Company Login</a></li>
                                        <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Certificate Verification</a></li>
                                    </ul>
                                </div>
                                <div className="f-box" lg={4}>
                                    <h6 style={{ color: "White" }}>Contact US</h6>
                                    <div className="head">
                                        <h6><a href="">HEAD OFFICE - YOGICHOWK</a></h6>
                                        <span>401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</span>
                                        <div className='d-flex align-center'>
                                            <p>Mo: </p>
                                            <a href="">+91 90333 16003</a>
                                        </div>
                                        <h6><a href=''>Other Branches</a> </h6>
                                        <ul className='branch'>
                                            <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Katargam</a></li>
                                            <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Mota varachha</a></li>
                                            <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Adajan</a></li>
                                            <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Navsari</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                </div>
            </div>
        </>
    );
}
export default Footer; 