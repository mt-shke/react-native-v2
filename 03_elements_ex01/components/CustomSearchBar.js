import { Divider, SearchBar } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomSearchBar = ({ setResearch }) => {
    const [input, setInput] = useState("");

    const searchHandler = (value) => {
        setInput(value);
        setResearch(value);
    };

    return (
        <SearchBar
            value={input}
            onChangeText={searchHandler}
            placeholder={"John Doe"}
            containerStyle={styles.searchBar}
            inputContainerStyle={styles.inputContainerStyle}
            leftIconContainerStyle={styles.leftContainer}
            searchIcon={SearchIcon}
            cancelIcon={false}
            clearIcon={false}
        />
    );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#ffffff",
        borderWidth: 0,
        borderColor: "white",
    },
    inputContainerStyle: {
        backgroundColor: "#e1e1e1",
    },
    leftContainer: {
        position: "absolute",
        right: 0,
    },
    containerIcon: {
        flexDirection: "row",
        marginLeft: "auto",
        height: 40,
        // marginRight: 0,
        // padding: 0,
    },
    icon: {
        marginHorizontal: 10,
        alignSelf: "center",
    },
});

const SearchIcon = (props) => {
    return (
        <View style={styles.containerIcon}>
            <Divider color="black" orientation="vertical" width={1} />
            <Ionicons
                style={styles.icon}
                name={"search"}
                size={24}
                color={"black"}
            />
        </View>
    );
};
