import React, { Component } from "react";
import Page from "../../components/page";

import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../../lib/sanity.js";

const query = `*[_type == "contacts"] | order(short) {
  _id,
  title,
  content,
  "images": images[].asset->url
}[0...3]
`;

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
      data: data
    });
  }

  render() {
    var data = this.state.data;
    if (Object.keys(data).length) {
      return (
        <Page
          id="contacts"
          title="Contacts"
        >
          <div className="uk-container">
            <div
              className="uk-grid uk-child-width-1-2@s uk-child-width-1-1"
              uk-grid="true"
              uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-small; delay: 400"
            >
              {data.map((item, index) => (
                <div key={index}>
                  <div className="contact-item">
                    <div
                      className="uk-position-relative uk-visible-toggle uk-light"
                      tabIndex="-1"
                      uk-slideshow="ratio: 7:4"
                    >
                      <ul className="uk-slideshow-items">
                        {item.images.map((url, indexImg) => (
                          <li key={indexImg}>
                            <img src={url} alt="" uk-cover="true" />
                          </li>
                        ))}
                      </ul>

                      <a
                        className="uk-position-center-left uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-previous="true"
                        uk-slideshow-item="previous"
                      >
                        <svg
                          style={{ width: "30px", height: "30px" }}
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="chevron-left"
                          className="svg-inline--fa fa-chevron-left fa-w-8"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512"
                        >
                          <path
                            fill="currentColor"
                            d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                          />
                        </svg>
                      </a>
                      <a
                        className="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-next="true"
                        uk-slideshow-item="next"
                      >
                        <svg
                          style={{ width: "30px", height: "30px" }}
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="chevron-right"
                          className="svg-inline--fa fa-chevron-right fa-w-8"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512"
                        >
                          <path
                            fill="currentColor"
                            d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="content">
                      <h2 className="head">{item.title}</h2>
                      <BlockContent blocks={item.content} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Page>
      );
    } else {
      return (
        <div className="preloader uk-inline">
          <div className="uk-overlay-default uk-position-cover">
            <div className="uk-position-center">
              <span className="uk-margin-small-right" uk-spinner="ratio: 3" />
            </div>
          </div>
        </div>
      );
    }
  }
}
