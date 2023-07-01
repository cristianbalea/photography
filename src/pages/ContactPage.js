import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactPage.scss";

function ContactPage() {
  return (
    <div className="body">
      <div className="centered">
        <h1>Formular de contact</h1>
        <br />
        <br />
        <FloatingLabel controlId="floatingInput" label="Nume" className="mb-3">
          <Form.Control type="lastname" placeholder="Nume" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Prenume"
          className="mb-3"
        >
          <Form.Control type="firstname" placeholder="Prenume" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Telefon"
          className="mb-3"
        >
          <Form.Control type="phonenumber" placeholder="Telefon" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Locatia"
          className="mb-3"
        >
          <Form.Control
            type="location"
            placeholder="Locatia prestarii serviciilor foto"
          />
        </FloatingLabel>

        <Form.Label className="mb-3">Tipul evenimentului:</Form.Label>

        <Form.Select
          type="event"
          placeholder="Tipul evenimentului"
          className="mb-3"
        >
          <option>Cununie</option>
          <option>Botez</option>
          <option>Majorate</option>
          <option>Alte evenimente (mentionati in mesaj)</option>
        </Form.Select>

        <Form.Label className="mb-3">Data evenimentului:</Form.Label>

        <div className="datepicker">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>

        <FloatingLabel controlId="floatingInput" label="Mesaj" className="mb-3">
          <Form.Control
            placeholder="Introdu mesajul tau"
            as="textarea"
            rows={10}
          />
        </FloatingLabel>
        <button className="button">Trimite</button>
      </div>
      <br />
      <br />
      <div className="centered">
        <h3>Poti sa ne urmaresti si pe:</h3>

        <div className="socials">
          <FontAwesomeIcon
            icon={faYoutube}
            size="2x"
            onClick={() => {
              window.location.replace("https://youtube.com");
            }}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            onClick={() => {
              window.location.replace("https://facebook.com");
            }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            onClick={() => {
              window.location.replace("https://instagram.com");
            }}
          />
        </div>
        <br />
        <br />
        <div className="socials">
          <p>cristianbalea@gmail.com</p>
          <p>0754 981 267</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
