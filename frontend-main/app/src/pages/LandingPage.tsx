import Navbar from '../components/navigation/Navbar';
import sideImage from '../assets/img/calendarWithPerson.png';
import btnFb from '../assets/img/btn_fb.png';
import btnIg from '../assets/img/btn_ig.png';
import btnYt from '../assets/img/btn_yt.png';
import '../assets/css/landingPage.css';

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="block">
        <div className="left">
          <h1 className="title">Dobrodošli</h1>
          <h2 className="subTitle">Na naši spletni strani Multi koledar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum ex ex, volutpat sed lorem vitae, vehicula malesuada dui. Nam vitae viverra nulla, nec venenatis lorem. Sed vulputate aliquet lorem.Suspendisse potenti. Morbi elit elit, gravida eget euismod ut, vehicula varius nulla. Aliquam tincidunt nisl eu augue vulputate, sed ultrices nisl feugiat.
          </p>
          <button type="button" className="btn">
            <img src={btnFb} alt="Facebook" />
          </button>
          <button type="button" className="btn">
            <img src={btnIg} alt="Instagram" />
          </button>
          <button type="button" className="btn">
            <img src={btnYt} alt="Youtube" />
          </button>
        </div>

        <div className="right">
          <img src={sideImage} alt="fakeLogo" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
