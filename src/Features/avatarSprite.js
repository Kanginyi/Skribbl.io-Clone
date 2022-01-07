import {createSlice} from "@reduxjs/toolkit";

// Inside of this "slice", it contains all of the information about the reducer, the actions it will take, the name of the state, and the initial values of the state
// createSlice from redux toolkit makes it easier to create everything inside of one file and export it all as one thing as well
// We're exporting this, the slice here is not the same as the reducer we want
export const avatarSlice = createSlice({
    // Name of the state
    name: "avatar",

    // Initial values of the state, passed in through the value object
    initialState: {
        value: {
            top: 0,
            hatColor: 0,
            hairColor: 0,
            accessories: 0,
            accessoriesColor: 0,
            facialHair: 0,
            facialHairColor: 0,
            clothes: 0,
            clothesColor: 0,
            eyes: 0,
            eyebrow: 0,
            mouth: 0,
            skin: 0,
            clotheGraphics: 0
        }
    },

    // The different reducers we want to run inside of here
    //The state here will keep track of whatever the initialState is, hover over state to see!🔽  Will change accordingly to whatever the current state is
    reducers: {
        leftArrow: (state, action) => {
            // We're trying to change the value of the state, so we get the "state.value" and assign it the "action.payload" object. We use "action.payload" to change the state
            state.value = action.payload;
        },

        rightArrow: (state, action) => {
            state.value = action.payload;
        },

        // random: {
            
        // }
    }
})

// Here we're exporting the individual actions of each thing inside of this slice
export const {leftArrow, rightArrow, random} = avatarSlice.actions;

// Don't forget to export; again the reducer and the slice are not the same!!
export default avatarSlice.reducer;