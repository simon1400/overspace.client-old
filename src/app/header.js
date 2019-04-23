import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import envelope from "./assets/mail.svg";
import facebook from "./assets/facebook.svg";

import sanityClient from "../lib/sanity.js";

const query = `*[_type == "settings"] {
  _id,
  soc,
  name
}[0...1]
`;

const links = [
  {
    to: "/",
    text: "Projects",
    active: false
  },
  {
    to: "/about",
    text: "About",
    active: false
  },
  {
    to: "/news",
    text: "News",
    active: false
  },
  {
    to: "/contact",
    text: "Contact",
    active: false
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soc: {},
      activeIndex: 0,
      activeMenu: false
    };
    this.getData = this.getData.bind(this);
    this.activeMenu = this.activeMenu.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
  }

  componentDidMount() {
    sanityClient
      .fetch(query)
      .then(this.getData)
      .catch(err => console.log(err));

    var location = this.props.location.pathname;
    links.map(item => {
      if (location === item.to) {
        return (item.active = true);
      } else {
        return (item.active = false);
      }
    });

    function search(nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].active === nameKey) {
          return i;
        }
      }
    }

    var resultObject = search(true, links);

    this.setState({
      activeIndex: resultObject
    });
  }

  getData(data) {
    this.setState({
      soc: data[0]
    });
  }

  activeMenu(e, index) {
    this.setState({
      activeIndex: index,
      activeMenu: false
    });
  }

  menuToggle() {
    this.setState({
      activeMenu: !this.state.activeMenu
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
                <a href="/">{this.state.soc.name}</a>
              </div>
            </div>
            <div className="uk-width-4-5">
              <nav className={this.state.activeMenu ? "active_mnu_mobile" : ""}>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className={
                          this.state.activeIndex === index ? "active_mnu" : ""
                        }
                        onClick={e => this.activeMenu(e, index)}
                      >
                        {link.text}
                      </Link>
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
                className={`hamburger hamburger--spring uk-align-right ${
                  this.state.activeMenu ? "is-active" : ""
                }`}
                type="button"
                onClick={this.menuToggle}
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

const SomeComponent = withRouter(props => <Header {...props} />);

export default SomeComponent;
