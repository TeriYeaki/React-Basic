import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx';
import Food from './components/Food/Food.jsx';
import Card from './components/Card/Card.jsx';
import Button from './components/Button/Button.jsx';
import Button2 from './components/Button/Button2.jsx';
import StudentCard from './components/Card/StudentCard.jsx';
import AvatarPic from './assets/images/SampleAvatar.png'

function App() {
  return(
    <>
      <Header/>
      <Card />
      <StudentCard imageSrc={AvatarPic} name="Tharith Yeak" description="A software engineering student at Monash."/>
      <StudentCard />
      <Button />
      <Button2 />
      <Footer/>
    </>
  );
}

export default App
