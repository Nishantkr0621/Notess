import React from "react";
import { useState } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
const Notes = () => {
  const [input, setInput] = useState("");

  const [data, setData] = useState([]);
  var date = new Date();

  const noteFun = (input, dateCurr) => {
    setData([...data, { note: input, dateOne: dateCurr }]);
    setInput("");
  };
  const deleteFun = (idx) => {
    setData(data.filter((item, index) => idx !== index));
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        <input
          style={{ width: "250px", height: "40px", borderRadius: "3px" }}
          type="text"
          placeholder="Take a Note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{
            width: "60px",
            height: "45px",
            backgroundColor: "#4CAF50",
            borderRadius: "3px",
          }}
          onClick={() => noteFun(input, date)}
        >
          <MdAdd style={{ fontSize: "20px", color: "white" }} />
        </button>
      </div>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {data.map((item, idx) => {
          return (
            <div
              style={{
                width: "230px",
                backgroundColor: "whitesmoke",
                borderRadius: "4px",
                margin: "40px",
                padding: "30px",
              }}
              key={idx}
            >
              <p style={{ wordBreak: "break-all", fontWeight: "bolder" }}>
                {item.note}
              </p>
              <div contentEditable style={{ outline: "none" }}></div>

              <div
                style={{ display: "flex", gap: "25px", alignItems: "center" }}
              >
                <div>
                  {item.dateOne.getFullYear() +
                    "-" +
                    item.dateOne.getMonth() +
                    "-" +
                    item.dateOne.getDate() +
                    "T" +
                    item.dateOne.getHours() +
                    ":" +
                    item.dateOne.getMinutes() +
                    ":" +
                    item.dateOne.getSeconds()}
                </div>
                <div style={{ marginTop: "15px" }}>
                  <MdDelete
                    style={{ fontSize: "30px" }}
                    onClick={() => deleteFun(idx)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Notes;
