import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Engineer , SAP Concur <span>June 2019 - Present</span></h2>
                        <p>Development on an expense tracking platform client in React & Redux with a GraphQL backend. </p>
                        <p>Conducted user research to understand the problem, prioritized tasks considering user personas and ROI of the features, Developed a platform to discover CDS schema and associate types with packages from different Concur teams. Published this tool as a Docker container on AWS Fargate with Okta authentication</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Front End Engineer, Deloitte <span>July 2015- August 2018</span></h2>
                        <p> Contributed to Web Development with an emphasis on Front End Features, Cross-browser compatibility and ADA compliance. Implemented web apps with Flask Framework for Python and RESTful APIs. Communicated directly with clients to establish project parameters, wrote proposals for designs, produced site map. Developed Hybrid Mobile Application with Ionic Framework and angular for online retailer</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Engineer Intern, Samsung R&D <span>May 2014 - July 2014</span></h2>
                        <p>Worked on Face Detection and Enhancement in real time video processing, Compression and Stabilization of video to explore face detection algorithms increasing overall speed. Implemented intuitive interface for the application</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
