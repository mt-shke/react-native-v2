import { Dimensions } from "react-native";

export const screenHeight = Math.floor(Dimensions.get("screen").height);
export const randomNumber = () => Math.floor(Math.random() * 39);

export const randomArray = () => {
    let unique = [];
    while (unique.length <= 5) {
        let newNumber = randomNumber();
        unique = [...unique, newNumber];
    }
    return unique;
};
