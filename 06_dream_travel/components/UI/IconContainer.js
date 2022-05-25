import { View, Image } from "react-native";

const IconContainer = ({ icon, size }) => {
    return (
        <View style={{ width: 36, height: 36 }}>
            <Image source={{ uri: icon }} style={{}} />
        </View>
    );
};
export default IconContainer;
