import React, {useState, useRef, useEffect } from 'react';
import {BsTrash} from 'react-icons/bs'
import FloodFill from 'q-floodfill'

function DrawingCanvas({utensil}) {
    const {tool, weight, color} = utensil;
    const magic = {
        width: "800px",
        height:"600px",
        backgroundColor: "white",
        borderStyle: "groove",
        cursor: "pointer"
    }

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(()=> {
        const canvas = canvasRef.current;
        canvas.width = 1600;
        canvas.height = 1200;
        canvas.style.width = "800px";
        canvas.style.height = "600px";

        const context = canvas.getContext("2d")
        context.scale(2, 2)
        context.lineCap = "round"
        context.strokeStyle = `${color}`
        context.lineWidth = 5
        contextRef.current = context;
    },[])

    function mouseDown({nativeEvent}){
        if (tool === "bucket"){
            const rect = canvasRef.current.getBoundingClientRect()
            console.log(rect)
            const x = nativeEvent.clientX - rect.left
            const y = nativeEvent.clientY - rect.top
            console.log("x: " + x + " y: " + y)
            // const context = canvasRef.current.getContext("2d")
            // const imgData = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)
            // const floodFill = new FloodFill(imgData)
            // floodFill.fill(color, x, y, 0)
            // context.putImageData(floodFill.imageData, 0, 0)

        } else if (tool === "brush"){
            const {offsetX, offsetY} = nativeEvent
            contextRef.current.beginPath()
            contextRef.current.moveTo(offsetX,offsetY)
            canvasRef.current.getContext("2d").strokeStyle = color
            canvasRef.current.getContext("2d").lineWidth = weight
            setIsDrawing(true)

        } else { 
            const {offsetX, offsetY} = nativeEvent
            contextRef.current.beginPath()
            contextRef.current.moveTo(offsetX,offsetY)
            canvasRef.current.getContext("2d").strokeStyle = "white"
            canvasRef.current.getContext("2d").lineWidth = 10
            setIsDrawing(true)
        }
    }

    function mouseUp(){
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    function draw({nativeEvent}){
        if(!isDrawing){
            return
        }
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }

    function resetCanvas(){
        canvasRef.current.getContext("2d").clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    return (
        <>
            <canvas id="canvas" style={magic} 
                onMouseDown={mouseDown} 
                onMouseUp={mouseUp} 
                onMouseMove={draw}
                ref={canvasRef}
            />
            <div>
                <button id="trash-icon" title="Clear the board" onClick={resetCanvas}><BsTrash className='react-icon-tool'/></button>
            </div>
        </>
    );
}

export default DrawingCanvas