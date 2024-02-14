import './counter.css';
function Counter(props) {

    return (
        <div className="bg-secondary">
            <div className="co-center ">
                <div className='d-flex co-info'>
                    {
                        props.counter.map((ele) => {
                            return (
                                <div className="co-box1">
                                    <div className='co-icon'><img src={ele.boxImage}></img></div>
                                    <div className='co-text'>
                                        <h3>{ele.number}</h3>
                                        <p>{ele.tital}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    {/* <div className="co-box1">
                        <div><img src={require(`./image/c2.png`)}></img></div>
                        <div className='co-text'>
                            <h3>10+</h3>
                            <p>CERTIFICATION APPROVAL</p>
                        </div>
                    </div>
                    <div className="co-box1">
                        <div><img src={require(`./image/c1.png`)}></img></div>
                        <div  className='co-text'>
                            <h3>100+</h3>
                            <p>CERTIFIED TEACHERS</p>
                        </div>
                    </div>
                    <div className="co-box1">
                        <div><img src={require(`./image/c3.png`)}></img></div>
                        <div  className='co-text'>
                            <h3>12000+</h3>
                            <p>STUDENTS PLACED</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    );
}
export default Counter;