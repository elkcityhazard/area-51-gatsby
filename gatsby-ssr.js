const React = require("react");

exports.onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setPreBodyComponents([
    <div id="preloader">
      <img src="/images/icon.png" alt="alien preloader" height="75px" width="75px"/>
      <div className="preloader_animation"></div>
    </div>,
  ]);
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ]);
  setBodyAttributes({
    className: "preloader_active",
  });
  setPostBodyComponents([<script src="/scripts/preloader.js" />]);
};
