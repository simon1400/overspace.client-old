import React, { Component } from "react";
import { withRouter } from "react-router";
import Helmet from "react-helmet";

import sanityClient from "../../../lib/sanity.js";

const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://overspace.hardart.cz";

const FACEBOOK_APP_ID = "XXXXXXXXX";

const query = `*[_type == "settings"] {
  _id,
  title,
  description
}[0...1]
`;

const defaultImage = ``;
const defaultTwitter = "@cereallarceny";
const defaultSep = " | ";

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultTitle: "Overspace",
      defaultDescription: "Overspace"
    }

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
      defaultTitle: data[0].title,
      defaultDescription: data[0].description
    });
  }


  getMetaTags(
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published,
      updated,
      category,
      tags
    },
    pathname
  ) {
    const theTitle = title
      ? (title + defaultSep + this.state.defaultTitle).substring(0, 60)
      : this.state.defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : this.state.defaultDescription;
    const theImage = image ? `${SITE_URL}${image}` : defaultImage;

    const metaTags = [
      { itemprop: "name", content: theTitle },
      { itemprop: "description", content: theDescription },
      { itemprop: "image", content: theImage },
      { name: "description", content: theDescription },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: defaultTwitter },
      { name: "twitter:title", content: theTitle },
      { name: "twitter:description", content: theDescription },
      { name: "twitter:creator", content: twitter || defaultTwitter },
      { name: "twitter:image:src", content: theImage },
      { property: "og:title", content: theTitle },
      { property: "og:type", content: contentType || "website" },
      { property: "og:url", content: SITE_URL + pathname },
      { property: "og:image", content: theImage },
      { property: "og:description", content: theDescription },
      { property: "og:site_name", content: this.state.defaultTitle },
      { property: "fb:app_id", content: FACEBOOK_APP_ID }
    ];

    if (noCrawl) {
      metaTags.push({ name: "robots", content: "noindex, nofollow" });
    }

    if (published) {
      metaTags.push({ name: "article:published_time", content: published });
    }
    if (updated) {
      metaTags.push({ name: "article:modified_time", content: updated });
    }
    if (category) {
      metaTags.push({ name: "article:section", content: category });
    }
    if (tags) {
      metaTags.push({ name: "article:tag", content: tags });
    }

    return metaTags;
  }

  render() {
    const { children, id, className, ...rest } = this.props;

    return (
      <div id={id} className={className}>
        <Helmet
          htmlAttributes={{
            lang: "en",
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || "WebPage"}`
          }}
          title={
            rest.title ? rest.title + defaultSep + this.state.defaultTitle : this.state.defaultTitle
          }
          link={[
            {
              rel: "canonical",
              href: SITE_URL + this.props.location.pathname
            }
          ]}
          meta={this.getMetaTags(rest, this.props.location.pathname)}
        />
        {children}
      </div>
    );
  }
}

export default withRouter(Page);
