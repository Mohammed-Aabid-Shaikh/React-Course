import React from "react";

const Fun = () => {
  function btnClick() {
    console.log("Button is Clicked");
  }

  return (
    <div id="fun">
      <div id="heading">
        <h1>Hello, Aabid!</h1>
      </div>

      <div id="center">
        <input
          id="inputtext"
          type="text"
          onChange={function inputCh(elem) {
            console.log(elem.target.value);
          }}
          placeholder="Enter Name"
        />
      </div>

      <div id="bottom">
        <button id="Btn" onClick={btnClick}>
          Change User
        </button>
      </div>
      <div id="square">
        <div
          onMouseMove={(val) => {
            console.log(val.clientY);
          }}
          id="box"
        ></div>
      </div>
    </div>
  );
};

export default Fun;
