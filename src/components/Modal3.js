import React, { useState, useEffect, Fragment } from "react";

const Modal3 = (props) => {
  const { urls } = props;
  useEffect(() => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      problem: "",
      client: "",
      paid: "",
      url: urls,
    });
  }, [urls]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    problem: "",
    client: "",
    paid: "",
    url: urls,
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);
  return (
    <div
      className='card bg-light container all-center'
      style={{ margin: "auto" }}>
      <h5>
        <i>
          We are actively submitting all complaints against Terrance Selb, Tyler
          Bennet, Chris Baker, Ben Graupner and Andruw Rapport and the companies
          American Tax Solutions, Tax Debt Group and GetATaxLawyer.com to the
          BBB, FTC and State of California.
        </i>
      </h5>
      <form
        className='form-text'
        name='form'
        method='post'
        action='/thanks/'
        data-netlify='true'
        data-netlify-honeypot='bot-field'>
        <span style={{ float: "right" }}>
          <button onClick={props.toggleModal}> X</button>
        </span>
        <input type='hidden' name='form-name' value='form' />

        <input
          type='text'
          name='url'
          style={{ display: "none" }}
          value={urls}
          onChange={onChange}
        />
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          onChange={onChange}
        />
        <input
          type='text'
          name='email'
          placeholder='e-mail'
          onChange={onChange}
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone Number'
          onChange={onChange}
        />

        <label htmlFor='years'> Tell us your story</label>
        <textarea
          type='text'
          style={{ height: "200px" }}
          name='problem'
          onChange={onChange}
        />

        <label htmlFor='company'>
          Were you an American Tax Solutions or Tax Debt Group Client?
        </label>
        <select name='client' id='client' onChange={onChange}>
          <option value=''></option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        {form.client === "true" ? (
          <Fragment>
            {" "}
            <label htmlFor='paid'>How Much Money Did You Pay Them?</label>
            <input
              type='text'
              placeholder='Amount Paid'
              name='paid'
              onChange={onChange}
            />
          </Fragment>
        ) : (
          ""
        )}
        <br />
        <button className='btn btn-block btn-dark' type='submit'>
          File Your Complaint
        </button>
      </form>
    </div>
  );
};

export default Modal3;
