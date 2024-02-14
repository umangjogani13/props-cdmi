import logo from './logo.svg';
import './App.css';
import Top from './component/topnav/Top.js';
import Menubar from './component/menubar/Menubar';
import Owldemo1 from './component/slider/Slider';
import Courses from './component/courses/Courses';
import About from './component/About/About';
import Counter from './component/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Madam from './component/madam/Madam';
import Creative from './component/creative/Creative';
import Company from './component/Company/Company';
import Demand from './component/Demandes/Demand';
import Footer from './component/Footer/Footer';
function App() {
  // header 

    var header = ['HOME', 'COURSES', 'ACTIVICES', 'BLOG', 'KNOW US', 'GET IN TOUCH', 'STUDENT ZONE']
    var logo = require(`./img/logo.svg`);

  // courses section
  var box1 = [
    {
      boximg: require(`./img/c1.webp`),
      name: "Development Courses",
      button: "Know More.!"
    },
    {
      boximg: require(`./img/c2.webp`),
      name: "Design Courses",
      button: "Know More.!"
    },
    {
      boximg: require(`./img/c3.webp`),
      name: "Programming IT",
      button: "Know More.!"
    },
    {
      boximg: require(`./img/c4.jpg`),
      name: "Trendy Courses",
      button: "Know More.!"
    },
    {
      boximg: require(`./img/c5.webp`),
      name: "Civil-Mech. Engineering",
      button: "Know More.!"
    },
    {
      boximg: require(`./img/c6.webp`),
      name: "Business Development",
      button: "Know More.!"
    }
  ]
  // cerative section
  var box2 = [
    {
      tital:"Industry Experts As Trainers",
      subtital:"Our trainers have 5+ years of industry experience coupled with extensive research and analysis.",
      boxImg: require(`./img/read1.png`), 
    },
    {
      tital:"Latest Curriculum",
      subtital:"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.",
      boxImg: require(`./img/read2.png`)
    },
    {
      tital:"Latest Technology",
      subtital:"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.",
      boxImg: require(`./img/read3.png`)
    },
    {
      tital:"Interview Assistance",
      subtital:"At the end of each training,our training instructor will go through the possible technical questions you may be asked.",
      boxImg: require(`./img/read4.png`)
    },
    {
      tital:"Free Upgradation",
      subtital:"We will be provided free upgradation for any newer version of the course you have.",
      boxImg: require(`./img/read5.png`)
    },
    {
      tital:"Lifetime Support",
      subtital:"We will provide you lifetime support on all the courses you learned from us.",
      boxImg: require(`./img/read6.png`)
    },
  ]
  // couter section 
  var box3 =[
    {
      boxImage:require(`./img/cc4.png`),
      number:"18000 +",
      tital:"HAPPY STUDENTS"
    },
    {
      boxImage:require(`./img/cc2.png`),
      number:"10 +",
      tital:"CERTIFICATION APPROVA"
    },
    {
      boxImage:require(`./img/cc1.png`),
      number:"100 +",
      tital:"CERTIFIED TEACHERS"
    },
    {
      boxImage:require(`./img/cc3.png`),
      number:"12000 +",
      tital:"STUDENTS PLACED"
    },
  ]
  // slider section
  var slider =[
    {
      sliderimg:require(`./img/p1.png`)
    },
    {
      sliderimg:require(`./img/p2.png`)
    },
    {
      sliderimg:require(`./img/p3.png`)
    },
    {
      sliderimg:require(`./img/p4.png`)
    },
    {
      sliderimg:require(`./img/p5.png`)
    },
    {
      sliderimg:require(`./img/p6.png`)
    },
    {
      sliderimg:require(`./img/p1.png`)
    },
    {
      sliderimg:require(`./img/p2.png`)
    },
    {
      sliderimg:require(`./img/p3.png`)
    },
    {
      sliderimg:require(`./img/p4.png`)
    }
  ]
  // main slider section
  var mainslider = [
    {
      ssliderimg:require(`./img/1.jpeg`)
    },
    {
      ssliderimg:require(`./img/2.webp`)
    },
    {
      ssliderimg:require(`./img/4.webp`)
    },
    {
      ssliderimg:require(`./img/5.webp`)
    },
    {
      ssliderimg:require(`./img/6.webp`)
    },
    {
      ssliderimg:require(`./img/7.webp`)
    }
  ]
  return (
    <div className="App">

      <Top></Top>
      <Menubar data={header} cdmi={logo}></Menubar>
      <Owldemo1 fullstack={mainslider}></Owldemo1>
      <Courses C_box={box1}></Courses>
      <About></About>
      <Counter counter={box3}></Counter>
      <Madam></Madam>
      <Creative w_box={box2}></Creative>
      <Company our={slider}></Company>
      <Demand ></Demand>
      <Footer></Footer>
    </div>
  );
}

export default App;
