import { Tab, TabView } from "@rneui/themed";
import { useState } from "react";
import ServiceView from "../components/services/ServiceView";
import { colors } from "../global/colors";
import { StyleSheet } from "react-native";
import data from "../data.json";

const ServicesScreen = (props) => {
    const [index, setIndex] = useState(0);
    const tabItems = ["Leisure", "Family", "Cruise", "Wedding"];
    console.log(data[0].services);

    return (
        <>
            <Tab
                containerStyle={styles.containerStyle}
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: colors.white,
                    height: 0,
                    color: colors.black,
                }}
                variant="primary"
            >
                {tabItems.map((item, index) => (
                    <Tab.Item
                        key={index}
                        title={item}
                        titleStyle={{ fontSize: 11 }}
                        icon={false}
                    />
                ))}
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                {data[0].services.map((item, index) => (
                    <ServiceView
                        key={index}
                        name={item.name}
                        content={item.content}
                    />
                ))}
            </TabView>
        </>
    );
};

export default ServicesScreen;

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: colors.black,
    },
});
