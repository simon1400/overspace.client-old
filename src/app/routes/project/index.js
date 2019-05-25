import React, { Component } from "react";
import Page from "../../components/page";

import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../../lib/sanity.js";
import imageUrlBuilder from "@sanity/image-url";

import right from "../../assets/right.svg";
import left from "../../assets/left.svg";

const imageBuilder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return imageBuilder.image(source);
}

const query = `*[_type == "projects" && title == $slug] {
  _id,
  title,
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
      .fetch(query, { slug: this.props.match.params.url.replace(/_/g, " ") })
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
        <Page id="project" title={data.title} description="This is about really cool stuff.">
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2@m uk-child-width-1-1" uk-grid="true" uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 400">
              <div>
                <div className="uk-position-relative uk-visible-toggle uk-light product-slider" tabIndex="-1" uk-slideshow="ratio: 1:1">
                  <ul className="uk-slideshow-items">
                    {data.images.map((item, index) => (
                      <li key={index}>
                        <img src={urlFor(item).width(700).height(700).url()} alt="" uk-cover="true" />
                      </li>
                    ))}
                  </ul>

                  <a className="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous">
                    <img src={left} alt="Left" />
                  </a>
                  <a className="uk-position-center-right uk-position-small" href="#" uk-slidenav-next="true" uk-slideshow-item="next">
                    <img src={right} alt="Right" />
                  </a>
                </div>
              </div>
              <div>
                <div className="product-content content">
                  <h1 className="head">{data.title}</h1>
                  <BlockContent blocks={data.content} />
                </div>
              </div>
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
