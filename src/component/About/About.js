import './about.css';
function About() {
    return (
        <div className="container aa-center">
            <div className="d-flex a-about">
                <div className="a-info">
                    <span>ABOUT US</span>
                    <h6>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h6>
                    <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively</p>
                    <button>Enroll now..!</button>
                </div>
                <div className="a-img">
                    <img src={require(`./image/a1.webp`)}></img>
                </div>
            </div>
        </div>

    );

}
export default About;