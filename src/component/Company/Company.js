import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './company.css';
function Company(props) {
    return (
        <div className='container p-center'>
            <div className='p-tital'>
                <span>STUDENT PLACEMENT</span>
                <h2>OUR RECRUITMENT PARTNERS</h2>
            </div>
            <div className='p-info d-flex'>
                <OwlCarousel className='owl-theme' loop margin={0} nav items={6}>
                    {
                        props.our.map((ele) => {
                            return (
                                <div class='item p-box'>
                                    <img src={ele.sliderimg}></img>
                                </div>
                            );
                        })
                    }
                </OwlCarousel>
            </div>
        </div>

    );
}
export default Company;