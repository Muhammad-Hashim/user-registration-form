import { useEffect, useRef, useState } from "react";

import "./Singup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Singup() {
  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const userRef = useRef();
  const errRef = useRef();

  const [user, setuser] = useState("");
  const [validName, setvalidName] = useState(false);
  const [userFoucs, setuserFoucs] = useState(false);

  const [email, setemail] = useState("");
  const [validEmail, setvalidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setvalidPassword] = useState(false);
  const [PasseordFoucs, setPasswodFoucs] = useState(false);

  const [matchPassword, setMtchPassword] = useState("");
  const [validmatchPassword, setvalidMtchPassword] = useState(false);
  const [foucsMatchPassword, setFoucsMtchPassword] = useState(false);

  const [gender, setGender] = useState("");
  const [errMasg, seterrMasg] = useState("");
  const [setsuccess, setsetsuccess] = useState(false);

  useEffect(() => {
    const userReg = usernameRegex.test(user);
    console.log("🚀 ~ file: App.js:32 ~ useEffect ~ user:", user);
    console.log("🚀 ~ file: App.js:32 ~ useEffect ~ userReg:", userReg);
    setvalidName(userReg);
  }, [user]);

  useEffect(() => {
    const paswordReg = passwordRegex.test(password);
    setvalidPassword(paswordReg);
    const passwordMatch = password === matchPassword;
    setvalidMtchPassword(passwordMatch);
  }, [password, matchPassword]);

  useEffect(() => {
    const emailreg = emailReg.test(email);
    setvalidEmail(emailreg);
  }, [email]);
  useEffect(() => {
    seterrMasg("");
  }, [user, password, matchPassword]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="App">
      <section className="Login">
        <p
          ref={errRef}
          className={errMasg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMasg}
        </p>
        <h1 className="heading">Join us today 👋</h1>
        <form>
          <label htmlFor="username">
            First & Last Name
            <span className={validName ? "vaild" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validName || !user ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="text"
            id="username"
            placeholder="Hashim"
            ref={userRef}
            onChange={(e) => setuser(e.target.value)}
            autoComplete="off"
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setuserFoucs(true)}
            onBlur={() => setuserFoucs(false)}
          ></input>
          <p
            id="uidnote"
            className={
              userFoucs && user && !validName ? "instructions " : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter <br />
            Must contain at least one number <br />
          </p>
        </form>
        <form>
          <label htmlFor="email">
            Email Address
            <span className={validEmail ? "vaild" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </label>
          <input
            placeholder="i.e. davon@mail.com"
            type="email"
            id="email"
            ref={userRef}
            onChange={(e) => setemail(e.target.value)}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="conf_dnote"
            onFocus={() => setFoucsMtchPassword(true)}
            onBlur={() => setFoucsMtchPassword(false)}
          ></input>
          <p
            id="conf_dnote"
            className={validEmail ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Invalid email address
          </p>
        </form>
        <form>
          <label htmlFor="Password ">
            Password
            <span className={validPassword ? "vaild" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPassword || !password ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="password"
            id="Password"
            placeholder="Passwords"
            ref={userRef}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPasswodFoucs(true)}
            onBlur={() => setPasswodFoucs(false)}
          ></input>
          <p
            id="pwdnote"
            className={
              PasseordFoucs && password && !validPassword
                ? "instructions "
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Allowed special characters:
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
        </form>
        <form>
          <label htmlFor="Confirm_Password">
            Confirm Password
            <span
              className={validmatchPassword && matchPassword ? "vaild" : "hide"}
            >
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span
              className={
                validmatchPassword || !matchPassword ? "hide" : "invalid"
              }
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input
            type="password"
            id="Confrim_Password"
            placeholder="Confirm Password"
            ref={userRef}
            onChange={(e) => setMtchPassword(e.target.value)}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="conf_dnote"
            onFocus={() => setFoucsMtchPassword(true)}
            onBlur={() => setFoucsMtchPassword(false)}
          ></input>
          <p
            id="conf_dnote"
            className={
              foucsMatchPassword && !validmatchPassword
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Passwords must match.
          </p>
        </form>
        <form>
          <label>Date of Birthday </label>
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </form>
        <form className="Select_Gender">
          <label htmlFor="">Select Gender</label>
          <div className="radios">
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              Male
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              Female
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I agree to <b>terms and conditions</b>
            </label>
          </div>
        </form>
        <div>
          <button className="button">Create Account</button>
        </div>

        <p className="create_ac">Do you have an account? Login</p>
      </section>
    </div>
  );
}

export default Singup;
