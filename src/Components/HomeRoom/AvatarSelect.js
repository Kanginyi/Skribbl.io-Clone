import React from 'react';
import "../../Stylings/AvatarSelect.css";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

// Redux Elements
import {useDispatch} from "react-redux";
import {leftArrow, rightArrow, random} from "../../Features/avatarSprite";

function AvatarSelect({avatar, name, number}) {
    const dispatch = useDispatch();

    let modNum = 0;
    switch(name){
        case 'top':
            modNum = 37;
            break;
        case 'hatColor':
        case 'clothesColor':
        case 'accessoriesColor':
            modNum = 18;
            break;
        case 'hairColor':
        case 'facialHairColor':
        case 'clothes':
            modNum = 12;
            break;
        case 'accessories':
            modNum = 6;
            break;
        case 'facialHair':
        case 'clotheGraphics':
            modNum = 10;
            break;
        case 'eyes':
            modNum = 15;
            break;
        case 'eyebrow':
            modNum = 19;
            break;
        case 'mouth':
            modNum = 13;
            break;
        case 'skin':
            modNum =  7;
            break;
        default:
            break;
    }

    const clickLeft = () => {
        if (number - 1 < 0) {
            number = modNum;
        }

        dispatch(leftArrow({
            ...avatar,
            [name]: number - 1
        }))
    } 

    const clickRight = () => {
        dispatch(rightArrow({
            ...avatar,
            [name]: (number + 1) % modNum
        }))
    }

    return (
        <div title={name} className="avatar-select-div">
            <BsFillArrowLeftCircleFill onClick={clickLeft}/>
                <div className="avatar-image-container">
                    {name}
                </div>
            <BsFillArrowRightCircleFill onClick={clickRight}/>
        </div>
    );
}

export default AvatarSelect;