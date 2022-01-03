import React from "react";

const Upsale = () => {
  return (
    <>
      <div className="upsale">
        <div className="container">
          <div className="upsale__wrapper d--flex">
            <figure>
              <img src="./images/book-bundle-lg.png" alt="" />
            </figure>
            <div className="upsale__content">
              <span>Wake Up the inner you</span>
              <h2>
                Unleash <br /> Now!
              </h2>
              <p>Book comes cheaper when you buy in bundle</p>
              <button className="btn btn--secondary">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upsale;
