import { Fragment } from "react";

export default function LocationForm({ handleChange, data, onSetTag }) {
  return (
    <Fragment>
      <div className="form-group">
        <div className="form-group-item">
          <span>You can get your HTML code here. </span>
          <button
            onClick={() => {
              window.open("https://google-map-generator.com/");
            }}
          >
            Get HTML Code
          </button>
        </div>
      </div>
      <div className="form-group">
        <input
          name="code"
          value={data}
          onChange={handleChange}
          placeholder="Paste code here."
        />
        <button onClick={onSetTag}>
          <span role="img" aria-label="location-pin">
            📍
          </span>{" "}
          Set Map
        </button>
      </div>
    </Fragment>
  );
}
