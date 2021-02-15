import React from "react";
import axios from "axios";
import Title from "./includes/title";
import SVG from "./includes/svg_border";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput from "react-phone-number-input";

let parseNumbers = (numbers) => {
  return numbers.map((number, key) => (
    <a key={key} href={"tel:" + number} className="numbers_a">
      {number}
    </a>
  ));
};

class ContactsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      number: "",
      email: "",
      massage: "",
    };
  }

  setPhone(phone) {
    this.setState({ number: phone });
  }

  handleInputChange(el, phone) {
    switch (el.target.name) {
      case "name":
        this.setState({ name: el.target.value });
        break;
      case "surname":
        this.setState({ surname: el.target.value });
        break;
      case "number":
        this.setState({ number: el.target.value });
        break;
      case "email":
        this.setState({ email: el.target.value });
        break;
      case "massage":
        this.setState({ massage: el.target.value });
        break;
      default:
        return false;
    }
  }

  handleFormSubmit() {
    axios
      .post(this.props.server + "/send-message", { text: this.state })
      .then((res) => {
        setTimeout(() => {
          this.setState({
            name: "",
            surname: "",
            number: "",
            email: "",
            message: "",
          });
        }, 2000);
        return false;
      });
  }

  render() {
    return (
      <div
        className="block contacts"
        id="Contacts"
        style={{ backgroundColor: this.props.design.contactsBackgroundColor }}
      >
        <Title data={this.props.contacts} />
        <div className="swgBorder">
          <SVG />
        </div>
        <div className="contactsContent">
          <div className="contactsContentBlockData">
            <div className="blockDataInline">
              <div className="contactsLine">
                <div className="contactsLineTitle">Адреса</div>
                <a href={"#"}>{this.props.contacts.addres}</a>
              </div>
              <div className="contactsLine">
                <div className="contactsLineTitle">Номер телефону</div>
                {parseNumbers(this.props.contacts.numbers)}
              </div>
              <div className="contactsLine">
                <div className="contactsLineTitle">Електронна пошта</div>
                <a href={"#"}>{this.props.contacts.email}</a>
              </div>
              <div className="contactsLine">
                <div className="contactsLineTitle">Ми в соц. мережах</div>
                {this.props.socials.instagram !== "#" ||
                this.props.socials.instagram !== "" ? (
                  <a
                    className="socialContact"
                    href={this.props.socials.instagram}
                  >
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                ) : null}
                {this.props.socials.facebook !== "#" ||
                this.props.socials.facebook !== "" ? (
                  <a
                    className="socialContact"
                    href={this.props.socials.facebook}
                  >
                    <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                  </a>
                ) : null}
                {this.props.socials.linkedin !== "#" ||
                this.props.socials.linkedin !== "" ? (
                  <a
                    className="socialContact"
                    href={this.props.socials.linkedin}
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                ) : null}
                {this.props.socials.vkontacte !== "#" ||
                this.props.socials.vkontacte !== "" ? (
                  <a
                    className="socialContact"
                    href={this.props.socials.vkontacte}
                  >
                    <FontAwesomeIcon icon={["fab", "vk"]} />
                  </a>
                ) : null}
                {this.props.socials.reddit !== "#" ||
                this.props.socials.reddit !== "" ? (
                  <a className="socialContact" href={this.props.socials.reddit}>
                    <FontAwesomeIcon icon={["fab", "reddit-square"]} />
                  </a>
                ) : null}
              </div>
            </div>
            <div className="blockDataInline mobileNotop">
              <div className="messageLine">
                <div className="messageLineTitle">Ім'я</div>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange.bind(this)}
                  className="inputForm"
                  required
                />
              </div>
              <div className="messageLine">
                <div className="messageLineTitle">Прізвище</div>
                <input
                  type="text"
                  name="surname"
                  value={this.state.surname}
                  onChange={this.handleInputChange.bind(this)}
                  className="inputForm"
                  required
                />
              </div>
              <div className="messageLine">
                <div className="messageLineTitle">Номер телефону</div>
                <PhoneInput
                  international
                  displayInitialValueAsLocalNumber
                  defaultCountry="UA"
                  value={this.state.number}
                  placeholder={"Введіть ваш номер телефону"}
                  name="number"
                  onChange={(phone) => this.setPhone(phone)}
                  required
                />
              </div>
              <div className="messageLine">
                <div className="messageLineTitle">Електронна пошта</div>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange.bind(this)}
                  className="inputForm"
                  required
                />
              </div>
              <div className="messageLine">
                <div className="messageLineTitle">Ваше повідомлення</div>
                <textarea
                  name="massage"
                  value={this.state.message}
                  onChange={this.handleInputChange.bind(this)}
                  className="inputForm areaText"
                  required
                >
                  {this.state.message}
                </textarea>
              </div>
              <div className="messageLine">
                <input
                  type="button"
                  name="submit"
                  value="Відправити"
                  onClick={this.handleFormSubmit.bind(this)}
                  className="submitButton"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactsComponent;
