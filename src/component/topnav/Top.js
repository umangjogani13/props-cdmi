import { BsEnvelope } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import './Top.css';
function Top() {

    return (
        <div className="topnav">
            <div className="container  d-flex j-center align-center ">
                <div className="l-info d-flex j-center align-center m-auto">
                    <BsEnvelope />
                    <a>info@cdmi.in </a>
                    <MdOutlineVerified />
                    <a>Verify Certificate</a>
                </div>
                <div className="c-info m-auto">
                    <a>HAVE ANY QUESTION ? +91 90333 16003</a>
                </div>
                <div className="r-info m-auto">
                    <TiSocialFacebook id="icon"/>
                    <FaTwitter id="icon"/>
                    <TiSocialGooglePlus id="icon"/>
                    <FaLinkedin id="icon"/>
                    <AiOutlineYoutube id="icon"/>
                    <FaWhatsapp id="icon"/>
                </div>
            </div>
        </div>
    )

}
export default Top;