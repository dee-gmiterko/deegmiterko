import React from "react";

import loopSvg from "!!raw-loader!../../images/content/styloma/agentic-loop.svg";
import validationSvg from "!!raw-loader!../../images/content/styloma/agentic-loop-validation.svg";
import verificationSvg from "!!raw-loader!../../images/content/styloma/agentic-loop-verification.svg";

const StylomaAgenticLoopPage = () => {
  return (
    <>
      <div className="position-relative">
        <div
          className="styloma-agentic-loop-diagram svg-diagram"
          dangerouslySetInnerHTML={{ __html: loopSvg }}
          style={{
            position: "absolute",
            left: -50,
            top: -35,
            width: 1000,
            // height:
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 250,
            top: 300,
            width: 750,
            height: 600,
          }}
        >
          <h4 className="mb-1">Validation loop</h4>
          <p>
            Validation is strict by design — every change must pass the full
            pipeline.
          </p>
          <div
            className="styloma-agentic-pipeline-diagram svg-diagram"
            dangerouslySetInnerHTML={{ __html: validationSvg }}
            style={{
              width: "100%",
            }}
          />
          <h4 className="mb-1">Verification loop</h4>
          <p>
            Tests are written for complex logic only, not for coverage metrics.
          </p>
          <div
            className="styloma-agentic-pipeline-diagram svg-diagram"
            dangerouslySetInnerHTML={{ __html: verificationSvg }}
            style={{
              width: "100%",
            }}
          />
          <h4 className="mb-1">Development environment</h4>
          <p>
            I made a full local environment of Docker services, while a custom
            dev. server takes care of automatic package and image builds,
            service restarts, orchestrated together.
          </p>
        </div>
      </div>
      <div className="grow" />
    </>
  );
};

export default StylomaAgenticLoopPage;
