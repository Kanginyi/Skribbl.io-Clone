import React from 'react';
import "../../Stylings/AvatarSelect.css";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

// Redux Elements
import {useDispatch} from "react-redux";
import {leftArrow, rightArrow, random} from "../../Features/avatarSprite";

function AvatarSelect({avatar, name, number}) {
    const dispatch = useDispatch();

    // console.log(avatar);
    // console.log("Element:", name, "Number:", number);

    const clickLeft = (e) => {
        console.log(e);
        dispatch(leftArrow({
            name: number - 1
        }))
    } 

    const clickRight = (e) => {
        dispatch(rightArrow({
            name: number + 1
        }))
    }


    return (
        <div title={name} className="avatar-select-div">
            <BsFillArrowLeftCircleFill onClick={clickLeft}/>
                <div className="avatar-image-container">
                    {name} {number}
                </div>
            <BsFillArrowRightCircleFill onClick={clickRight}/>
        </div>
    );
}

export default AvatarSelect;