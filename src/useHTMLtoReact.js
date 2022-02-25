import { useEffect, useState } from "react";

export default function useHTMLtoReact(code) {
  const [map, setMap] = useState();

  const getIframeTag = () => {
    const extract = code.match(/<iframe.*>/)[0].match(/^(.*?)<\/iframe>/);
    // const iframe = extract[0].match(/^(.*?)<\/iframe>/);
    // return iframe[0];
    // console.log(typeof extract[0])
    setMap(extract[0]);
  };

  useEffect(() => {
    if (code) {
      getIframeTag();
    }
  }, [code]);

  return map;
}
