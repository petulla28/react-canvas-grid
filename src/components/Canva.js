import { useState } from "react";

import { Stage, Layer, Rect, Text } from "react-konva";


const DUMMY_DATA = [
  {
    robot_id: Math.floor(Math.random() * 10),
    grid_number: Math.floor(Math.random() * 8) + 1,
    ststus: "active",
  },
  {
    robot_id: Math.floor(Math.random() * 10),
    grid_number: Math.floor(Math.random() * 8) + 1,
    ststus: "disabled",
  },
  {
    robot_id: Math.floor(Math.random() * 10),
    grid_number: Math.floor(Math.random() * 8) + 1,
    ststus: "",
  },
];

const robotStatus = [
   {
     id : "1",
     status : "red",
     roboID: "34",
   },
   {
    id : "4",
    status: "green",
    roboID: "88",
   },

   {
    id : "6",
    status: "gray",
    roboID: "76",
   },

   {
    id: "3",
    status: "green",
    roboID:"66"
   },

];

const Canva = () => {
  const [selectedId, setSelectedId] = useState("0");

  const [roboID , setRoboId] = useState("0");

  const highlightHandler = (e) => {
    // console.log(e.target);
    //console.log(e.target.attrs.id);
    setSelectedId(e.target.attrs.id);
    setStatus(e.target.attrs.status);
    setRoboId(e.target.attrs.roboID);
    // console.log(e.target.attrs.roboID);
    // console.log(e.target.attrs.id);
    // console.log(e.target.attrs.status);
  };
  const [status , setStatus] = useState('red');

  // console.log(robotData);
  const robotF = robotStatus.map((robotStatus, key)=>{
    return (
      key = robotStatus.status
    )
  })
  // console.log(robotF);
  setInterval(() => {
    
  }, 3000);
      
for (let index = 0; index < robotStatus.length; index++) {
  const id = robotStatus[index].id;
  const color = robotStatus[index].status;

  
}

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "600px",
          transform: "translate(2rem,2rem)",
        }}
      >
        <Stage
          width={200}
          height={200}
        
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              onClick={highlightHandler}
              width={200}
              height={200}
              // fill={selectedId === "1" ?"black" : "#F9E79F"}
              fill = {selectedId === robotStatus[0].id? robotF[1]:"#F9E79F"}
              text ={robotStatus[0].roboID}
              id = "1"
              
            >
        
            </Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              // fill={selectedId === "2" ? "black" : "#F9E79F"}
              fill = {selectedId === 2 ? robotF[0]:"#F9E79F"}
              
              id="2"
              
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "3" ? robotStatus[1].status : "#F9E79F"}
              id="3"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "4" ? robotF[2] : "#F9E79F"}
              id="4"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "5" ? robotStatus[0].status : "#F9E79F"}
              id="5"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "6" ? robotStatus[1].status : "#F9E79F"}
              id="6"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "7" ? robotStatus[1].status : "#F9E79F"}
              id="7"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "8" ? robotStatus[0].status : "#F9E79F"}
              id="8"
            ></Rect>
          </Layer>
        </Stage>
        <Stage
          width={200}
          height={200}
          //style={{ transform: "translateY(100px)" }}
          style={{ border: "solid" }}
        >
          <Layer>
            <Rect
              width={200}
              height={200}
              onClick={highlightHandler}
              fill={selectedId === "9" ? robotStatus[1].status : "#F9E79F"}
              id="9"
            ></Rect>
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Canva;
