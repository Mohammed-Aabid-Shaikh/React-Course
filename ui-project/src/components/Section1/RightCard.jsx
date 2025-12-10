import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-70 rounded-4xl bg-red-200">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="Images"
      />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  );
};

export default RightCard;
