import { useRef } from "react";
import { Container } from "./ElementsDrawing";
import {
  cursorCanvas,
  circle,
  ellipse,
  square,
  straightLine,
  normal,
  location,
  isSameColor,
  cursorFill,
  getDropperColor
} from "./DrawingFunctions";
import CanvasElemt from "./CanvasElemt";
import ComponenteInputRange from "./ImputRangeLinea";
import ButtomTools from "./ButtomTools";
import FloodFill from "q-floodfill";
import { locateAR, moveArrow } from "./ArrowFunction";

//---------------------------------------------
const CanvasComponent = () => {
  //----------Ref Variables-------------------------------
  const containerRef = useRef(null);
  //----------------------------------------
  let drawings = [];
  let ppts = [];
  let ptI = [];
  let finalPointX,
    finalPointY,
    pFx,
    pFy,
    rotation,
    cx,
    cy,
    halfWidth,
    halfHeight;
  let width, height, line, color, fillColor, dropperColor, cursorWidth;
  //------------Element Variables-------------------------------
  let canvas1, canvas2, ctx1, ctx2, rotatorElmt, arrowsElemt, arrowBox;
  //------------State Variables-----------------------------------------
  let erased = false;
  let isDrawing = false;
  let isClik = false;
  let editable = false;
  let control = false;
  let finish = true;
  let type = "normal";
  let dPosition = 0;
  let rotatedValue = 0;
  let droppe = false;
  let typeC, elmtC;
  let move = false;
  let arrow = false;
  let arrowType = "up";
  let isMoveColor = false;
  //--------Document and window Events---------------------------------------------
  function entrarContenedor() {
    document.addEventListener("keydown", controlZ);
    document.addEventListener("keyup", controlzUp);
  }
  function salirContenedor() {
    document.removeEventListener("keydown", controlZ);
    document.removeEventListener("keyup", controlzUp);
  }
  window.addEventListener("resize", function () {
    const zoom = Math.round(window.devicePixelRatio * 100 - 100);
    const cursorZoom = parseFloat(line) + (line * zoom) / 100;
    cursorWidth = cursorZoom > 128 ? 128 : cursorZoom;
    if (droppe === false) {
      if (type !== "filled") {
        lineWidth();
      }
    }
  });
  //---------set Elements values-----------------------------------
  function setElements({ c1, c2, cotx1, cotx2, rotatorRef, arrowsRef }) {
    canvas1 = c1;
    canvas2 = c2;
    ctx1 = cotx1;
    ctx2 = cotx2;
    rotatorElmt = rotatorRef;
    arrowsElemt = arrowsRef;
  }
  //---------set line value-----------------------------------
  function lineWidth(linea) {
    if (linea) {
      line = linea;
      ctx2.lineWidth = line;
      const zoom = Math.round(window.devicePixelRatio * 100 - 100);
      const cursorZoom = parseFloat(line) + (line * zoom) / 100;
      cursorWidth = cursorZoom > 128 ? 128 : cursorZoom;
    }
    if (line) {
      if (type === "eraser") {
        cursorCanvas(canvas2, "white", cursorWidth);
      } else {
        cursorCanvas(canvas2, color, cursorWidth);
      }
    }
  }
  //---------set color value -----------------------------------
  function lineColor({ Ccolor }) {
    color = Ccolor;
    ctx2.strokeStyle = color;
    cursorCanvas(canvas2, color, cursorWidth);
  }
  //----------get fillColor value----------------------------------
  function getFillColor({ Ccolor }) {
    fillColor = Ccolor;
    cursorFill(canvas2, fillColor);
  }
  //------function that is activated when clicking on the canvas2---------------
  function startDrawing(evt) {
    const { offsetX, offsetY } = location(evt, canvas2);
    if (type === "filled") {
      const imgData = ctx1.getImageData(0, 0, width, height);
      if (isSameColor(imgData, offsetX, offsetY, fillColor)) {
        finish = false;
      } else {
        const floodFill = new FloodFill(imgData);
        floodFill.fill(fillColor, offsetX, offsetY, 0);
        ctx1.putImageData(floodFill.imageData, 0, 0);
        finish = true;
      }
    } else {
      if (type === "normal" || type === "eraser") {
        ppts.push({ offsetX, offsetY });
        ctx2.beginPath();
        ctx2.moveTo(offsetX, offsetY);
        ctx2.lineTo(offsetX, offsetY);
        ctx2.stroke();
      }
      isDrawing = true;
    }
    move = false;
  }

  function clickArrow(e) {
    halfWidth = (pFx - ptI[0].offsetX) / 2;
    halfHeight = (pFy - ptI[0].offsetY) / 2;
    arrow = true;
    arrowType = e.target.id;
    ctx2.clearRect(0, 0, width, height);
    if (rotatedValue !== 0) {
      transRotate(cx, cy, rotation);
    }
    drawCanvas2(ptI, pFx, pFy);
    arrowBox = e.target.parentNode.parentNode;
    arrowBox.style.opacity = "0";
    arrowBox.style.zIndex = "6";
  }

  //--------sets values ​​of ( ptI, pFx, pFy, cx, cy )--------------------------------------------------------------
  function setPointsValue() {
    let pIx, pIy;
    if (type === "circle" || type === "straightLine") {
      pFx = finalPointX;
      pFy = finalPointY;
      pIx = ppts[0].offsetX;
      pIy = ppts[0].offsetY;
    } else {
      if (ppts[0].offsetX < finalPointX) {
        pIx = ppts[0].offsetX;
        pFx = finalPointX;
      } else {
        pIx = finalPointX;
        pFx = ppts[0].offsetX;
      }
      if (ppts[0].offsetY < finalPointY) {
        pIy = ppts[0].offsetY;
        pFy = finalPointY;
      } else {
        pIy = finalPointY;
        pFy = ppts[0].offsetY;
      }
    }
    ptI = [{ offsetX: pIx, offsetY: pIy }];
    cx = pIx + (pFx - pIx) / 2;
    cy = pIy + (pFy - pIy) / 2;
  }

  //-----------return Component----------------------------------------
  return (
    <Container
      onMouseEnter={entrarContenedor}
      onMouseLeave={salirContenedor}
      ref={containerRef}
    >
      <CanvasElemt
        startDrawing={startDrawing}
        finishDrawing={finishDrawing}
        draw={draw}
        rotate={rotate}
        leave={leave}
        toEnter={toEnter}
        inRotation={inRotation}
        setSizes={setSizes}
        setElements={setElements}
        goBack={goBack}
        goForward={goForward}
        clickArrow={clickArrow}
        clickEdit={clickEdit}
      />
      <ComponenteInputRange lineWidth={lineWidth} />
      <ButtomTools
        inRotation={inRotation}
        change={change}
        getFillColor={getFillColor}
        lineColor={lineColor}
        clearAll={clearAll}
        moveColor={moveColor}
        downloadImg={downloadImg}
        dropper={dropper}
      />
    </Container>
  );
};

export default CanvasComponent;
