import Navbar from '../components/navigation/Navbar';
import '../assets/css/contactPage.css';
import emailLogo from '../assets/img/email.png';
import phoneLogo from '../assets/img/phone.png';
import logoM from '../assets/img/logoM.png';

function ContactPage() {
  return (
    <>
      <Navbar />

      <div className="blockContact">
        <h1 className="title">Kontakt</h1>
        <div>
          <h2 className="subTitle">Multi koledar d.o.o.</h2>
          <p className="naslov">Koroška cesta 46</p>
          <p className="naslov">2000 Maribor</p>
        </div>
        <img className="logo2" src={logoM} alt="Logo" />
        <div className="inside">
          <div className="email">
            <img className="logoemail" src={emailLogo} alt="Email" />
            <p className="email">info@multikoledar.si</p>
          </div>
          <div className="email">
            <img className="logophone" src={phoneLogo} alt="Phone" />
            <p className="email">+386 (0)31 123 456</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
