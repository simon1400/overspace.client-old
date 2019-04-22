import React, { Component } from "react";
import { Link } from "react-router-dom";
import Page from "../../components/page";

import sanityClient from "../../../lib/sanity.js";

const query = `*[_type == "projects"] | order(short) {
  _id,
  title,
  slug,
  "image": images[0].asset->url
}[0...20]
`;

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {}
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
      projects: data
    });
  }

  render() {
    var data = this.state.projects;
    if (Object.keys(data).length) {
      return (
        <Page id="projects">
          <div className="uk-container">
            <div
              className="uk-grid"
              uk-grid="true"
              uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-small; delay: 400"
            >
              {data.map((item, index) => (
                <div key={index} className="uk-width-1-4@s uk-width-1-2">
                  <Link to={`/projects/${item.slug.current}`}>
                    <div className="project-short-item uk-cover-container">
                      <img
                        src={`${item.image}?w=400&h=400`}
                        alt={item.title}
                        uk-cover="true"
                      />
                      <div className="uk-position-cover uk-overlay uk-flex uk-flex-center uk-flex-middle uk-text-center">
                        <h2 className="head">{item.title}</h2>
                      </div>
                    </div>
                  </Link>
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
