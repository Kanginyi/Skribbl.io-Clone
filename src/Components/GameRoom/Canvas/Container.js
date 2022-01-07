import React, {useState, useRef, useEffect } from 'react';

function Container({utensil}) {
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
            const ctx = canvasRef.current.getContext("2d")
            ctx.beginPath()
            ctx.fillStyle = `${color}`
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        } else if (tool === "brush"){
            const {offsetX, offsetY} = nativeEvent
            contextRef.current.beginPath()
            contextRef.current.moveTo(offsetX,offsetY)
            canvasRef.current.getContext("2d").strokeStyle = color
            canvasRef.current.getContext("2d").lineWidth = weight
            setIsDrawing(true)

        } else{
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
        console.log(canvasRef.current.getContext("2d"))
    }

    return (
        <>
            <canvas id="canvas" style={magic} 
                onMouseDown={mouseDown} 
                onMouseUp={mouseUp} 
                onMouseMove={draw}
                ref={canvasRef}
            />
        </>
    );
}

export default Container
