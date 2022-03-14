import Navbar from '../components/navigation/Navbar';
import logoM from '../assets/img/logoM.png';
import calendar from '../assets/img/calendar.png';
import '../assets/css/aboutPage.css';

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="blockAbout">
        <h1 className="titleAbout">Multi koledar</h1>
        <div className="leftAbout">
          <h2 className="subTitleAbout">Kdo smo?</h2>
          <p>
            Našo ekipo sestavljajo izkušeni IT vodje ter mladi, drzni razvijalci. Na podlagi izkušenj in svežih, inovativnih idej, želimo vsak nov projekt prilagoditi popolnoma lastnostim stranke.
          </p>
          <img className="logo1" src={calendar} alt="Calendar" />
        </div>
        <div className="rightAbout">
          <h2 className="subTitleAbout">Kaj in kako delamo?</h2>
          <p>
            Vedno zagotavljamo najvišjo raven varnosti in zadnje razpoložljive spletne tehnologije. Naše vrhunske rešitve podpirajo zbiranje podatkov, organizacijo in upravljanje s strankami ter delo z velikimi bazami podatkov.
          </p>
          <img className="logo2" src={logoM} alt="Logo M" />
        </div>
      </div>
    </>
  );
}
export default AboutPage;
