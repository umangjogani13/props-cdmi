import './menubar.css';
import oneImg from './img/logo.svg';
function Menubar(props) {
        
    return(
        <nav>
            <ul className='main_menu j-center align-center d-flex'>
            <div className='image'><img src={oneImg}></img></div>
                {
                    props.data.map((ele)=>{
                        return(
                            <li><a>{ele}</a></li>
                        )
                    })
                }
                {/* <div className='image'><img src={oneImg}></img></div>
                <li><a>HOME</a></li>
                <li><a>COURES</a></li>
                <li><a>ACTIVITIES</a></li>
                <li><a>BLOG</a></li>
                <li><a>KNOW US</a></li>
                <li><a>GET IN TOUCH</a></li>
                <li><a>STUDENT ZONE</a></li> */}
            </ul>
        </nav>

    );
}
export default Menubar;