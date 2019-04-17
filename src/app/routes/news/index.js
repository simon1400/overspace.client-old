import React, { Component } from "react";
import Page from "../../components/page";

export default class News extends Component {
  render() {
    return (
      <Page
        id="about"
        title="About"
        description="This is about really cool stuff."
      >
        <div class="uk-container">
          <div
            class="uk-grid uk-child-width-1-1"
            uk-grid="true"
            uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-small; delay: 400"
          >
            <div>
              <div class="news-item">
                <div
                  class="uk-position-relative uk-visible-toggle uk-light"
                  tabindex="-1"
                  uk-slideshow="ratio: 7:3"
                >
                  <ul class="uk-slideshow-items">
                    <li>
                      <img src="img/slide1.jpg" alt="" uk-cover="true" />
                    </li>
                    <li>
                      <img src="img/slide2.jpg" alt="" uk-cover="true" />
                    </li>
                    <li>
                      <img src="img/slide3.jpg" alt="" uk-cover="true" />
                    </li>
                  </ul>

                  <a
                    class="uk-position-center-left uk-position-small uk-hidden-hover"
                    href="#"
                    uk-slidenav-previous="true"
                    uk-slideshow-item="previous"
                  />
                  <a
                    class="uk-position-center-right uk-position-small uk-hidden-hover"
                    href="#"
                    uk-slidenav-next="true"
                    uk-slideshow-item="next"
                  />
                </div>
                <div class="content">
                  <h2 class="head">NOVINKA 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
