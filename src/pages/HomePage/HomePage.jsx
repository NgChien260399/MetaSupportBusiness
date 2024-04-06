import React from 'react'
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';

function HomePage() {

    const handleShareClick = () => {
        const currentURL = window.location.href;
        clipboardCopy(currentURL);
    
      };
  return (
    <><div className="profile-container container">
    <div
      id="top-profile"
      className="profile position-relative shadow-none rounded-4 mt-0 mt-sm-5"
    >
      <button
        id="shareProfile"
        className="btn btn-light btn-share position-absolute rounded-5 text-primary-dark d-flex align-items-center"
        onClick={handleShareClick}
      >
        <img src="..\src\assets\img\share.svg" />{" "}
        <span className="ms-1">Share Page</span>
      </button>
      <div className="profile-banner">
        <div className="profile__skinny-center">
          <div
            id="easylink-banner-image"
            className="profile-user p-4 p-lg-5"
            style={{
              backgroundImage:
                "url(../src/assets/img/20965dcc16b9cd35.jpg)",
            }}
          >
            <div className="profile-user-wrapper"></div>
          </div>
          <div className="profile-socials px-2 px-md-5 d-flex align-items-center justify-content-between position-relative">
            <div className="profile-data d-flex align-items-center">
              <div className="profile-image border border-5 border-white profile-image rounded-circle">
                <img
                  src="../src/assets/img/73165dcc151ec29b.jpg"
                  alt="user"
                  className="rounded-circle"
                />
              </div>
              <div className="d-flex flex-column px-2 px-md-4 user-data">
                <span className="profile-name fw-bold">
                  Meta Support Business
                </span>
                <span className="profile-description">
                  © RESPONSE FACEBOOK - META PLATFORMS
                </span>
              </div>
            </div>
            <ul className="social-links align-items-center d-flex list-unstyled has-0"></ul>
          </div>
        </div>
      </div>
    </div>
    <div id="all-cards" className="cards-container mt-md-5">
      <ul className="list-unstyled list-links">
        <li className="mb-4 link-basic">
          <div
            className="card-link card-link__basic m-md-0 "
            style={{ backgroundColor: "#98B2FA", borderRadius: 24 }}
          >
            <Link
              to="/form-business"
              target="_blank"
              className="is-link-btn d-block text-decoration-none p-3 p-md-4"
              data-link-type="basic"
              data-link-id="56765dcc0fd99b13"
              data-link-text="Request of Review"
            >
              <div className="card-link__texts d-flex align-items-center justify-content-between">
                <span
                  className="card-link__title fw-semibold"
                  style={{ color: "#FFFFFFFF" }}
                >
                  Request of Review
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="arrow-right"
                >
                  <path
                    d="M19.9902 12.0195L5.00023 12.0195"
                    stroke="#FFFFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.987 18.0117L19.998 11.9997L13.987 5.98772"
                    stroke="#FFFFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </div></>
  )
}

export default HomePage