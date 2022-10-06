import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="shaverma-block"
    speed={1}
    width={250}
    height={371}
    viewBox="0 0 250 300"
    backgroundColor="#f5f4f4"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="207" rx="0" ry="0" width="60" height="15" />
    <rect x="0" y="237" rx="0" ry="0" width="60" height="15" />
    <rect x="99" y="205" rx="5" ry="5" width="150" height="48" />
    <rect x="0" y="175" rx="0" ry="0" width="250" height="15" />
    <rect x="-1" y="17" rx="23" ry="23" width="252" height="139" />
  </ContentLoader>
);

export default Skeleton;
