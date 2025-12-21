import React from "react";
import styled from "styled-components";

function BackgroundLoopExternal({ count }) {
  const containers = [];
  for (let i = 0; i < count; i++) {
    containers.push(
      <div className="bg-img-container" key={i}>
        <img src="edge.png" className="bg-img1 left" />
        <img src="edge.png" className="bg-img1 right" />
      </div>
    );
  }

  return <BgLoop>{containers}</BgLoop>;
}

export default BackgroundLoopExternal;


const BgLoop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 500vh; /* two containers stacked */
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}
.bg-img-container {
  position: relative;
  scale: 1.02;
  width: 100%;
  height: 100vh; 
  overflow: hidden;
  margin-bottom: -40px;
}

.bg-img1 {
  position: absolute;
  top: 0;
  height: 100vh;      /* fill screen vertically */
  width: auto;
  object-fit: cover;
}

/* Stick right */
.bg-img1.right {
  right: -4rem;          
}

/* Stick left */
.bg-img1.left {
  left: -4rem;           
  transform: scaleX(-1); 
}
`;



