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
    <div>
      <div className='grid-2c'>
        <div>
          {modal ? (
            <Modal3 urls={urls} toggleModal={toggleModal} />
          ) : (
            <img
              style={{ height: "150vh", width: "85%" }}
              src={final}
              alt='Final Demand For Payment'
            />
          )}
        </div>
        <div className='m-2'>
          <br />

          <h2 className='lead' style={{ color: "red" }}>
            Final Demand For Payment Letter
          </h2>
          <h3 className='py-1'>
            Pending Legal Action Against American Tax Solutions,
            GetATaxLawyer.com and Tax Debt Resolution
          </h3>

          <h4 className='py-1'>
            <i>
              If you or a loved one has recieved a letter like this one, you may
              be entitled to compensation as an ongoing complaint filed against
              the company American Tax and Disbarred Attorney Terrance "Terry"
              Selb Aka Chris Baker.{" "}
            </i>
          </h4>

          <button
            className='btn btn-block btn-dark'
            onClick={() => setModal((prevState) => !prevState)}>
            File A Complaint
          </button>

          <h5 className='py-1'>
            <i>
              Your complaints are completely anonymous and could lead to
              financial compensation if you were directly impacted by this scam.
            </i>
          </h5>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Final;
