import { useState } from "react";
import "../App.css";
import Model from "./Model";

export default function Section() {
  //----------USE STATE ---------//
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });
  //-----------------------------//

  const btnIsDisable =
    formInput.name ||
    formInput.email ||
    formInput.password ||
    formInput.password1;

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null);
    if (formInput.password !== formInput.password1) {
      setErrorMessage("Mot de passe ne sont pas identique")
    }
    setShowModal(true);
  };
  const handilDivClick = () => {
    if (showModal=== true) {
      setShowModal(false);
      console.log("Click");
    }
  };

  return (
    <>
      <Model isVisible={showModal} errorMessage={errorMessage} setShowModal={setShowModal}/>
      <form onSubmit={handleSubmit} >
        <div className="flex" onClick={handilDivClick}>
          <div className="formInput flex">
            <label>Name</label>
            <input
              type="text"
              placeholder="Philippe"
              required
              value={formInput.name}
              onChange={(event) => {
                setFormInput({ ...formInput, name: event.target.value });
              }}
            />
          </div>
          <div className="formInput flex">
            <label>Email</label>
            <input
              placeholder="azerty@mail.com"
              type="email"
              required
              value={formInput.email}
              onChange={(event) => {
                setFormInput({ ...formInput, email: event.target.value });
              }}
            />
          </div>
          <div className="formInput flex">
            <label>Password</label>
            <input
              type="password"
              required
              value={formInput.password}
              onChange={(event) => {
                setFormInput({ ...formInput, password: event.target.value });
              }}
            />
            <label>Confirmer Password</label>
            <input
              type="password"
              required
              value={formInput.password1}
              onChange={(event) => {
                setFormInput({ ...formInput, password1: event.target.value });
              }}
            />
          </div>
          <input
            className={
              btnIsDisable == "" ? "formInput btn none" : "formInput btn"
            }
            type="submit"
            value="Register"
          />
        </div>
      </form>
    </>
  );
}
