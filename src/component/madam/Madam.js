import './madam.css';
import { FaQuoteRight } from "react-icons/fa";

function Madam() {
    return(
            <div >       
                <div className="container">
                    <div className="d-flex m-center">
                        <div className="student">
                            <div className="heading">
                                <span className='sub_title'>HAPPY STUDENTS</span>
                                <h2>ALUMNI SPEAK</h2>
                            </div>
                            <div className="test">
                                <FaQuoteRight className='quote' />
                                <p className="content">
                                    Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training.
                                </p>
                                <div className="desc d-flex">
                                    <div className="img">
                                        <img src={require(`./image/m2.jpg`)} alt="" />
                                    </div>
                                    <div className="user">
                                        <p>KOLADIYA MANSI</p>
                                        <span className='default'>UI/UX Designer</span>
                                        <span className='muted'>@ Patoliya Infotech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="shape">
                                <img src={require(`./image/m1.jpeg`)} alt="" width={'100%'} />
                            </div>
                            <div className="img">
                            </div>
                        </div>
                    </div>
                </div>
           </div>
    );
}

export default Madam;