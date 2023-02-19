import './Form.css';
import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
    isChecked: false,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setState((state) => ({
      ...state,
      [e.target.name]: value,
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
        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />
          Is Checked?
        </label>
      </form>
      <h5>
        My name is {state.fname} {state.lname}
      </h5>
      <p>My message: {state.message}</p>
      <h5>Favorite car brand: {state.carBrand}</h5>
      <h5>Is it checked? : {state.isChecked ? 'Yes' : 'No'}</h5>
    </>
  );
};
export default Form;
