import React, { useEffect, useState } from "react";
import Parser from "html-react-parser";
import "./styles.css";

export default function App() {
  const [map, setMap] = useState();

  const tag =
    '<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embed map in email</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>';

  const getIframeTag = () => {
    const extract = tag.match(/<iframe.*>/)[0].match(/^(.*?)<\/iframe>/);

    // const iframe = extract[0].match(/^(.*?)<\/iframe>/);
    // return iframe[0];
    // console.log(typeof extract[0])
    setMap(extract[0]);
  };

  useEffect(() => {
    getIframeTag();
  }, []);
  console.log(map);
  return (
    <div className="App">
      <div>{map && Parser(map)}</div>
    </div>
  );
}
