 import React,{useState} from 'react';
import './css/aboutpage.css';
import { Link } from 'react-router-dom';
import {Stack} from 'react-bootstrap';
import image1 from './Image/video-chat-app.jpg';
import image2 from './Image/easyMatching.jfif';
import image3 from './Image/highQuality.jfif';
import image4 from './Image/videoImage.jpg';


const AboutPage = () => {
  const [state, setState] = useState({
    boxShadow:" ",
   
    transition:" ",
  });
  const styles={
    boxShadow:" ",
   
    transition:" ",
  }
 
  const [hoverIndex, setHoverIndex] = useState(-1);
  const outMouse=()=>{
    setHoverIndex(-1);
    setState({  boxShadow:" " });
   

  }
  const inMouse=(index)=>{
    setHoverIndex(index);
    setState({ boxShadow:"10px 10px 5px ",transition:"1s"});
   
  }
  
  return ( 
    <div className='About'>
      <div className='aboutPage'>
        <Stack direction={'horizontal'} gap={3}>
        <h3 >HELOGUYS</h3>
        <div className='p-2 ms-auto'></div>
        <Link to="/login" >SignIn</Link>
        <Link to="/register" >SignUp</Link>
        </Stack>
      </div>
      <div className='aboutPage1'>
        <h3>Start Your Video Chat for Free Now</h3>
        <p>HELOGUYS stands out as a cutting-edge social app, 
          offering spontaneous random video chat and high-quality 1
          -on-1 video call experience. With a focus on user safety
           and privacy, HELOGUYS provides a secure environment
            for users to talk to strangers worldwide. Its advanced 
            algorithms ensure effortless matching, fostering genuine
             connections with like-minded individuals.
        </p>
        <img src={image1} alt='xasjhb'></img>
      </div>
      <div id='aboutpage'></div>
      <div className='aboutPage2'>
            <h3> Live Video Chat Platform</h3>
            <Stack direction='horizontal' gap={3}>
            <p onMouseEnter={()=>inMouse(0)} onMouseLeave={outMouse} style={hoverIndex===0 ? state:styles}><img src={image4} alt="" width={300} height={200}></img><h4>1-on-1 Random Video Chat</h4>Engage in thrilling and serendipitous interactions with HOLLA's innovative 1-on-1 random video chat feature. Say goodbye to mundane conversations and discover fascinating individuals from around the globe.</p>
            <p onMouseEnter={()=>inMouse(1)} onMouseLeave={outMouse} style={hoverIndex===1 ? state:styles}><img src={image3} alt="" width={300} height={200}></img><h4>High-Quality Video Calls</h4>Experience face-to-face connections like never before with HOLLA's high-quality video chat. Enjoy smooth visuals and audio. Every connection with strangers is authentic and personal.</p>
            <p onMouseEnter={()=>inMouse(2)} onMouseLeave={outMouse} style={hoverIndex===2 ? state:styles}><img src={image2} alt=""width={300} height={200}></img><h4>Easy Matching</h4>HOLLA's advanced algorithms enable seamless matching, connecting you 1-on-1 with like-minded individuals who share your interests. Explore the exciting world of chat rooms and meet people who spark your curiosity.</p>
            </Stack>
      </div>
    </div>
  )
}

export default AboutPage
