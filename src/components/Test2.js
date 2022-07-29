import { useRef, useEffect } from "react";

const Test2 = () => {
  const container = useRef();
  let top, left;

  useEffect(() => {
    const containerElement = container.current.getBoundingClientRect();
    top = containerElement.top;
    left = containerElement.left;
    console.log(left, top);

    console.log(containerElement);
  }, []);

  const getMouseCords = (event) => {
    let cX = event.clientX;
    let sX = event.screenX;
    let cY = event.clientY;
    let sY = event.screenY;
    let coords1 = "client - X: " + cX + ", Y coords: " + cY;
    let coords2 = "screen - X: " + sX + ", Y coords: " + sY;
    //console.log("running");
    console.log(Math.floor(cX - left), Math.floor(cY - top));
    //console.log(coords2);
  };

  return (
    <div
      ref={container}
      style={{
        width: "80%",
        height: "40vh",
        border: "1px solid red",
        margin: "0 auto",
      }}
      onMouseMove={getMouseCords}
    ></div>
  );
};

export default Test2;
