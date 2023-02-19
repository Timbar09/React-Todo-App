import './Form.css';
import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
  });

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const carBrands = ['Mercedes', 'BMW', 'Maserati', 'Infinity', 'Audi'];
  const carBrandOptions = carBrands.map((carBrand, key) => (
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));

  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <label>
          First Name: <input type="text" value={state.fname} onChange={handleChange} name="fname" />
        </label>
        <label>
          Last Name: <input type="text" value={state.lname} onChange={handleChange} name="lname" />
        </label>
        <label>
          Message:
          <textarea type="text" value={state.message} onChange={handleChange} name="message" />
        </label>
        <label>
          Car Brand:
          <select type="text" value={state.message} onChange={handleChange} name="message">
            <option value={''} disabled>
              --Pick a car brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
      </form>
      <h5>
        My name is {state.fname} {state.lname}
      </h5>
      <p>I would like to say, {state.message}</p>
      <h5>Favorite car brand: {state.carBrand}</h5>
    </>
  );
};
export default Form;
