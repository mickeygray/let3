import React, { useState, useEffect, useCallback } from "react";
import Modal3 from "./Modal3";
import final from "../images/finaldemand.png";

const Final = () => {
  const [modal, setModal] = useState(false);

  const [urls, setUrls] = useState("");

  useEffect(() => {
    if (window.location.href.length > 0) {
      setUrls(window.location.href);
    }
  }, []);

  const toggleModal = useCallback(() => {
    setModal((prevState) => !prevState);
  }, []);

  return (
    <div className='container '>
      <div className='grid-2'>
        <div>
          {modal ? (
            <Modal3 urls={urls} toggleModal={toggleModal} />
          ) : (
            <img src={final} alt='Final Demand For Payment' />
          )}
        </div>
        <div>
          <br />

          <h2 className='lead' style={{ color: "red" }}>
            Final Demand For Payment Letter
          </h2>
          <h3>
            Pending Legal Action Against American Tax Solutions,
            GetATaxLawyer.com and Tax Debt Resolution
          </h3>
          <h4>
            <i>
              If you or a loved one has recieved a letter like this one, you may
              be entitled to compensation as an ongoing complaint filed against
              the company American Tax and Disbarred Attorney Terrance "Terry"
              Selb Aka Chris Baker.{" "}
            </i>
          </h4>
          <br />
          <button
            className='btn btn-block btn-dark'
            onClick={() => setModal((prevState) => !prevState)}>
            File A Complaint
          </button>

          <h5>
            <i>
              Your complaints are completely anonymous and could lead to
              financial compensation if you were directly impacted by this scam.
            </i>
          </h5>
          <br />
          <ul>
            <li>
              <h4>
                Disbarred Attorney Terrance Selb sends these mailers to people
                in an attempt to solicit services.
              </h4>
            </li>
            <br />
            <li>
              <h5>
                We are actively submitting all complaints against Terrance Selb,
                Tyler Bennet, Chris Baker, Ben Graupner and Andruw Rapport and
                the companies American Tax Solutions, Tax Debt Group and
                GetATaxLawyer.com to the BBB, FTC and State of California.
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Final;
