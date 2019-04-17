import React, { Component } from "react";
import Page from "../../components/page";

import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../../lib/sanity.js";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return imageBuilder.image(source);
}

const query = `*[_type == "projects" && slug.current == $slug] {
  _id,
  title,
  slug,
  content,
  images
}[0...1]
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
      .fetch(query, { slug: this.props.match.params.url })
      .then(this.getData)
      .catch(err => console.log(err));
  }

  getData(data) {
    this.setState({
      data: data[0]
    });
  }

  render() {
    var data = this.state.data;
    if (Object.keys(data).length) {
      return (
        <Page
          id="about"
          title="About"
          description="This is about really cool stuff."
        >
          <div className="uk-container">
            <div
              className="uk-grid uk-child-width-1-2@m uk-child-width-1-1"
              uk-grid="true"
              uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 400"
            >
              <div>
                <div
                  className="uk-position-relative uk-visible-toggle uk-light product-slider"
                  tabIndex="-1"
                  uk-slideshow="ratio: 1:1"
                >
                  <ul className="uk-slideshow-items">
                    {data.images.map((item, index) => (
                      <li key={index}>
                        <img
                          src={urlFor(item)
                            .width(700)
                            .height(700)
                            .url()}
                          alt=""
                          uk-cover="true"
                        />
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
                      class="svg-inline--fa fa-chevron-left fa-w-8"
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
                      class="svg-inline--fa fa-chevron-right fa-w-8"
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
              </div>
              <div>
                <div className="product-content content">
                  <h2 className="head">{data.title}</h2>
                  <BlockContent blocks={data.content} />
                </div>
              </div>
            </div>
          </div>
        </Page>
      );
    } else {
      return (
        <div class="preloader uk-inline">
          <div class="uk-overlay-default uk-position-cover">
            <div class="uk-position-center">
              <span class="uk-margin-small-right" uk-spinner="ratio: 3" />
            </div>
          </div>
        </div>
      );
    }
  }
}
