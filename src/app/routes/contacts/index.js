import React, { Component } from "react";
import Page from "../../components/page";

import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../../lib/sanity.js";

import right from "../../assets/right.svg";
import left from "../../assets/left.svg";

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
        <Page id="contacts" title="Contacts">
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
                        <img src={left} alt="Left" />
                      </a>
                      <a
                        className="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-next="true"
                        uk-slideshow-item="next"
                      >
                        <img src={right} alt="Right" />
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
