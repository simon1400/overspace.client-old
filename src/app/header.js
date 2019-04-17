import React, { Component } from "react";
import { Link } from "react-router-dom";

import envelope from "./assets/envelope-regular.svg";
import facebook from "./assets/facebook-square-brands.svg";

import sanityClient from "../lib/sanity.js";

const query = `*[_type == "settings"] {
  _id,
  soc
}[0...1]
`;

const links = [
  {
    to: "/",
    text: "Projects"
  },
  {
    to: "/about",
    text: "About"
  },
  {
    to: "/news",
    text: "News"
  },
  {
    to: "/contact",
    text: "Contact"
  }
];

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soc: {}
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    sanityClient
      .fetch(query)
      .then(this.getData)
      .catch(err => console.log(err));
  }

  getData(data) {
    this.setState({
      soc: data[0]
    });
  }

  render() {
    var data = this.state.soc.soc;
    return (
      <header>
        <div className="uk-container">
          <div className="uk-grid" uk-grid="true">
            <div className="uk-width-1-5">
              <div className="logo">
                <a href="/">Overspace</a>
              </div>
            </div>
            <div className="uk-width-4-5">
              <nav>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.to}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="soc-icons">
                  {data ? (
                    <li>
                      <a href={data.facebook}>
                        <img src={facebook} alt="Facebook" />
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  {data ? (
                    <li>
                      <a href={`mailto:${data.email}`}>
                        <img src={envelope} alt="Email" />
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </nav>
              <button
                className="hamburger hamburger--spring uk-align-right"
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
