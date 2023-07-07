import React from "react";

const TimeAndLocation = () => {
  return (
   <div>
   <div className="flex items-center justify-center my-6">
      <p className="text-white text-xl font-extralight">
        Friday,7 July 2023|Local time: 12:15 PM
      </p>
    </div>
    <div className="flex items-center my-3 justify-center">
        <p className=" text-white font-medium" style={{fontSize: '30px'}}>
            Karachi,PK
        </p>

    </div>


    </div>
  );
};

export default TimeAndLocation;
