import React from "react";
import experience from "./images/data/namrata.json";

const Namrata = () => {
  return (
    <div className="container experience" id="experience">
      <h1>EXPERIENCE</h1>
      {experience.map((data) => {
        return (
          <div
            key={data.id}
            className="ex-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="right">
              <h2>{data.role}</h2>
              <h4>
                <span style={{ color: "yellowgreen" }}>
                  {data.startDate} {data.endDate}{" "}
                </span>{" "}
                <span style={{ color: "#F8C90D" }}>{data.location}</span>
              </h4>
              <h5 style={{ color: "#F8C90D" }}>{data.experiences[0]}</h5>
              <h5 style={{ color: "#F8C90D" }}>{data.experiences[1]}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Namrata;
