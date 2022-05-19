import { SearchBar } from "@rneui/themed";
import { StyleSheet, Image, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomSearchBar = (props) => {
    return (
        <SearchBar
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainerStyle}
            cancelIcon={SearchIcon}
            rightIconContainerStyle={styles.rightContainer}
            searchIcon={false}
        ></SearchBar>
    );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
    },
    inputContainerStyle: {
        backgroundColor: "#e1e1e1",
    },
    rightContainer: {
        backgroundColor: "blue",
    },
    icon: {
        marginLeft: "auto",
        marginRight: 0,
    },
});

const SearchIcon = (props) => {
    return (
        <View style={styles.icon}>
            <Ionicons name={"search"} size={24} color={"black"} />
        </View>
    );
};
