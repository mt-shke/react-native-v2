import { ScrollView, Text } from "react-native";

const ServiceView = (props) => {
    return (
        <ScrollView>
            <Text>Leisure Travel</Text>
            <Text>
                {
                    "Whether you travel to explore the world, to celebrate with family and friends, or simply need time to relax and decompress, Dream Travel International, Inc. can offer you a personalized vacation with access beyond the extraordinary.\n \n We have the skills, resources, and global connections to allow us to customize the finest travel experiences. Our global access is inclusive of hotels and resorts, cruising, tours, spa experiences, personalized activities and elite concierge services. \n \n We take the time to collaborate with you to create the most exceptional travel experience customized for you."
                }
            </Text>
        </ScrollView>
    );
};
export default ServiceView;
