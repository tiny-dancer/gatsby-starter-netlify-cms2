import React from "react";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FaBeer from "react-icons/lib/fa/chevron-right";

export const LandingPageTemplate = ({
  image,
  title,
  subtitle,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing
}) => {
  return (
    <section className="section--gradient">
      <section
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "550px"
        }}
      >
        <div
          className="container"
          style={{
            height: "550px"
          }}
        >
          <div
            className="content"
            style={{
              width: "40%",
              paddingTop: "80px"
            }}
          >
            <h1
              className="title is-spaced has-text-weight-bold"
              style={{ color: "white" }}
            >
              {title}
            </h1>
            <h2 className="subtitle" style={{ color: "white" }}>
              {subtitle}
            </h2>
            <a href="https://scanhealthplan-stage.linkhealth.com/apps/secure/dashboards/provider-dashboard/" className="button is-x-large is-outlined level has-text-weight-bold">
              Login to Your Portal
              <span class="icon is-small">
                <FaBeer />
              </span>
            </a>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: "5px" }}
                            src={main.image1.image}
                            alt={main.image1.alt}
                          />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: "5px" }}
                            src={main.image2.image}
                            alt={main.image2.alt}
                          />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: "5px" }}
                          src={main.image3.image}
                          alt={main.image3.alt}
                        />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={testimonials} />
                <div
                  className="full-width-image-container"
                  style={{ backgroundImage: `url(${fullImage})` }}
                />
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <p className="is-size-5">{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <LandingPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
      subtitle={frontmatter.subtitle}
    />
  );
};

export const landingPageQuery = graphql`
  query LandingPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
        image
        heading
        description
        subtitle
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
