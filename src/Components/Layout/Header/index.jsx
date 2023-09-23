import { Logo } from "../../UI/Logo";
import { SearchInput } from "../../UI/Input/searchInput";
import upload from "../../../assets/img/icons/upload.svg";
import bell from "../../../assets/img/icons/bell.svg";
import lamp from "../../../assets/img/icons/lamp.svg";
import star from "../../../assets/img/icons/star.svg";
import arrow from "../../../assets/img/icons/arrow.svg";
import avatar_default from "../../../assets/img/icons/Avatar-default.svg";
import "./style.css";
import { FilterTag } from "../../UI/Tag";
import { useState } from "react";
import { Link } from "react-router-dom";

const tags = ["Date", "Tags", "Duration", "Rating", "Language", "Ads"];
const popular = [
  "Popular1",
  "Popular2",
  "Popular3",
  "Popular4",
  "Popular5",
  "Popular6",
];

export default function Header(props) {
  const [isAuth, setIsAuth] = useState(false);
  const authChange = () => {
    isAuth ? setIsAuth(false) : setIsAuth(true);
  };
  console.log(isAuth);
  return (
    <>
      <header className="header container">
        <section className="header-top">
          <Logo />
          <div className="header-right">
            <SearchInput text="Type to search or insert direct link" />
            <div className="header-options">
              <div className="header-optional">
                <img src={upload} alt="" />
                <Link to="/upload">
                  <h3 className="header-optional__title">Upload</h3>
                </Link>
              </div>
              <div className="header-optional">
                <img src={star} alt="" />
                <h3 className="header-optional__title">Watch Later</h3>
              </div>
              <img src={lamp} alt="" className="header-icon" />
              <img src={bell} alt="" className="header-icon" />
              {isAuth ? (
                <div className="header-user">
                  <img src={avatar_default} alt="" className="header-avatar" />
                  <h3 className="header__user-name">
                    0x8A2366254A5A59E8073B0975399F7466B7830A66
                  </h3>
                  <img
                    onClick={authChange}
                    src={arrow}
                    alt=""
                    className="header__more"
                  />
                </div>
              ) : (
                <button onClick={authChange} className="header-btn__authorize">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2.06196 8.5702L1.22357 11.465C1.21143 11.5069 1.21142 11.5514 1.22353 11.5933L2.0001 14.2815C2.03487 14.4018 2.15931 14.4725 2.28051 14.4407L4.97937 13.7328C5.04381 13.7159 5.11242 13.7277 5.16756 13.7651L6.91876 14.9528C6.95701 14.9788 7.00215 14.9926 7.04837 14.9926H8.95163C8.99785 14.9926 9.043 14.9788 9.08124 14.9528L10.8324 13.7651C10.8876 13.7277 10.9562 13.7159 11.0206 13.7328L13.7195 14.4407C13.8407 14.4725 13.9651 14.4018 13.9999 14.2815L14.7765 11.5933C14.7886 11.5514 14.7886 11.5069 14.7764 11.465L13.938 8.5702C13.9268 8.53141 13.9259 8.49036 13.9355 8.45114L14.9934 4.12349C15.0039 4.0807 15.0019 4.03581 14.9876 3.99412L14.3608 2.15643C14.3187 2.03285 14.1825 1.96878 14.0604 2.01507L9.88674 3.59766C9.86059 3.60757 9.83285 3.61266 9.80488 3.61266H6.19512C6.16715 3.61266 6.13941 3.60757 6.11326 3.59766L1.93957 2.01507C1.81748 1.96878 1.68132 2.03285 1.63917 2.15643L1.01236 3.99412C0.998143 4.03581 0.996144 4.0807 1.0066 4.12349L2.06447 8.45114C2.07406 8.49036 2.0732 8.53141 2.06196 8.5702Z"
                      stroke="#3A86FF"
                    />
                    <path
                      d="M5.19385 7.33343L6.89071 6.05359C6.9984 5.97237 6.99507 5.80956 6.88414 5.73282L2.29545 2.55835C2.18714 2.48343 2.03723 2.5332 1.99526 2.65803L1.47144 4.21571C1.45901 4.25266 1.45777 4.29245 1.46788 4.3301L2.42355 7.89077C2.45192 7.99644 2.56065 8.05905 2.66628 8.03054L5.12625 7.3665C5.15069 7.3599 5.17363 7.34867 5.19385 7.33343Z"
                      stroke="#3A86FF"
                    />
                    <path
                      d="M10.8062 7.33343L9.10929 6.05359C9.00159 5.97237 9.00493 5.80956 9.11586 5.73282L13.7046 2.55835C13.8129 2.48343 13.9628 2.5332 14.0047 2.65803L14.5286 4.21571C14.541 4.25266 14.5422 4.29245 14.5321 4.3301L13.5764 7.89077C13.5481 7.99644 13.4394 8.05905 13.3337 8.03054L10.8737 7.3665C10.8493 7.3599 10.8264 7.34867 10.8062 7.33343Z"
                      stroke="#3A86FF"
                    />
                    <path
                      d="M6.34853 9.69211L5.60648 10.0681C5.47243 10.136 5.49164 10.3332 5.63629 10.374L6.68149 10.6685C6.81978 10.7075 6.93831 10.5633 6.87332 10.4352L6.52584 9.75012C6.49288 9.68516 6.41351 9.65919 6.34853 9.69211Z"
                      stroke="#3A86FF"
                    />
                    <path
                      d="M9.65147 9.69211L10.3935 10.0681C10.5276 10.136 10.5084 10.3332 10.3637 10.374L9.31851 10.6685C9.18022 10.7075 9.06169 10.5633 9.12669 10.4352L9.47417 9.75012C9.50712 9.68516 9.58649 9.65919 9.65147 9.69211Z"
                      stroke="#3A86FF"
                    />
                    <path
                      d="M6.96623 12.9226L6.90807 13.5623C6.90104 13.6396 6.96188 13.7062 7.03947 13.7062H8.96053C9.03812 13.7062 9.09896 13.6396 9.09193 13.5623L9.03377 12.9226C9.02659 12.8436 8.98809 12.7707 8.92685 12.7203L8.82439 12.6359C8.77124 12.5921 8.70452 12.5682 8.63567 12.5682H7.36433C7.29548 12.5682 7.22876 12.5921 7.17561 12.6359L7.07315 12.7203C7.01191 12.7707 6.97341 12.8436 6.96623 12.9226Z"
                      stroke="#3A86FF"
                    />
                  </svg>
                  Authorize
                </button>
              )}
            </div>
          </div>
        </section>
        {props.filter ? (
          <>
            <section className="header-bottom">
              <div className="header-filter filter-sort">
                <h3 className="header-filter__title">Sort:</h3>
                <select className="header-filter__sort">
                  <option value="date">Date by freshness</option>
                  <option value="date">Date by freshness</option>
                  <option value="date">Date by freshness</option>
                  <option value="date">Date by freshness</option>
                  <option value="date">Date by freshness</option>
                  <option value="date">Date by freshness</option>
                </select>
              </div>
              <div className="header-filter filter-tags">
                <h3 className="header-filter__title">Filters:</h3>
                {tags.map((tag) => [<FilterTag text={tag} />])}
              </div>
              <div className="header-filter filter-tags">
                <h3 className="header-filter__title">Popular:</h3>
                {popular.map((popular) => [<FilterTag text={popular} />])}
              </div>
            </section>
          </>
        ) : (
          <></>
        )}
      </header>
    </>
  );
}