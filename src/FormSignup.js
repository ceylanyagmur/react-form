import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
const FormSignup = (submitForm) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us taday! Create your account filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p> {errors.username} </p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label"></label>
          password
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p> {errors.password} </p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label"></label>
          Email
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p> {errors.email} </p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="Password2" className="form-label"></label>
          Confirm Password
          <input
            id="Password2"
            type="Password2"
            name="email"
            className="form-input"
            placeholder="Enter your Confirm Password"
            value={values.Password2}
            onChange={handleChange}
          />
          {errors.Password2 && <p> {errors.Password2} </p>}
        </div>
        <button className="for-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an accont? Login <a href="#"> here </a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
