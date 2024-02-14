import './creative.css';


function Creative(props) {
    return (
        <div className="cc-center">
            <div className="container">
                <div className="cc-tital">
                    <span>READ OUR DIFFERNCE</span>
                    <h2>WHY CHOOSE CREATIVE</h2>
                </div>
                <div className="cc-info d-flex">

                    {
                        props.w_box.map((ele) => {
                            return (
                                <div className="cc-box">
                                    <div className="img">
                                        <img src={ele.boxImg} style={{ backgroundColor: "#F6475F" }} alt="" />
                                    </div>
                                    <div className="desc">
                                        <h5>{ele.tital}</h5>
                                        <p>{ele.subtital}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
         
            {/* Widget setion start */}
            
            {/* Widget setion end */}
            {/* footer section start */}
           
            {/* footer section end */}
        </div>



    );
}
export default Creative;





















