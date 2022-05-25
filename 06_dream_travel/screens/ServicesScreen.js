import { Tab, TabView, Text } from "@rneui/themed";
import { useState } from "react";
import ServiceView from "../components/services/ServiceView";

const ServicesScreen = (props) => {
    const [index, setIndex] = useState(0);

    return (
        <>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: "white",
                    height: 3,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="Leisure"
                    titleStyle={{ fontSize: 11 }}
                    icon={false}
                />
                <Tab.Item
                    title="Family"
                    titleStyle={{ fontSize: 11 }}
                    icon={false}
                />
                <Tab.Item
                    title="Cruise"
                    titleStyle={{ fontSize: 11 }}
                    icon={false}
                />
                <Tab.Item
                    title="Wedding"
                    titleStyle={{ fontSize: 11 }}
                    icon={false}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
                    <Text h1>Leisure</Text>
                </TabView.Item>
                <TabView.Item
                    style={{ backgroundColor: "blue", width: "100%" }}
                >
                    <ServiceView />
                </TabView.Item>
                <TabView.Item
                    style={{ backgroundColor: "green", width: "100%" }}
                >
                    <Text h1>Cruise</Text>
                </TabView.Item>
                <TabView.Item
                    style={{ backgroundColor: "green", width: "100%" }}
                >
                    <Text h1>Wedding</Text>
                </TabView.Item>
            </TabView>
        </>
    );
};
export default ServicesScreen;
