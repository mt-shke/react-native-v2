import * as React from "react";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CustomCard = ({ data }) => {
    const hours = Math.floor(data.length / 60);
    const minutes = data.length % 60;

    const img =
        data.type === "Marche à pied"
            ? "https://cache.magazine-avantages.fr/data/photo/w1000_ci/1jv/marche-a-pied-poifs-minceur-maigrir.webp"
            : "https://www.numerama.com/wp-content/uploads/2021/10/velo-pure-2-2048x1152.jpg?resize=512,288";

    return (
        <Card style={styles.card}>
            <Card.Content style={styles.containerTop}>
                <Card.Content style={styles.containerTitle}>
                    <Paragraph style={styles.para}>{data.date}</Paragraph>
                    <Title style={styles.type}>{data.type}</Title>
                </Card.Content>
                <Card.Cover style={styles.cover} source={{ uri: img }} />
            </Card.Content>
            <Card.Content style={styles.containerBot}>
                <Card.Content style={styles.containerTitle}>
                    <Title style={styles.title}>Distance</Title>
                    <Paragraph style={styles.text}>
                        {data.distance} Km
                    </Paragraph>
                </Card.Content>
                <Card.Content style={styles.containerTitle}>
                    <Title style={styles.title}>Durée</Title>
                    <Paragraph style={styles.text}>{`${
                        hours ? `${hours}h` : ""
                    }${minutes}mn`}</Paragraph>
                </Card.Content>
            </Card.Content>
        </Card>
    );
};

export default CustomCard;

const styles = StyleSheet.create({
    card: {
        marginVertical: 20,
        marginHorizontal: 12,
        borderColor: "black",
        borderWidth: 1,
        overflow: "hidden",
    },
    containerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "blue",
        paddingHorizontal: 0,
    },
    cover: {
        width: "50%",
        aspectRatio: 5 / 3,
        margin: 14,
        borderColor: "black",
        borderWidth: 1,
    },
    containerBot: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "green",
        paddingHorizontal: 0,
    },
    containerTitle: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        margin: 0,
        marginVertical: 0,
        paddingVertical: 0,
    },
    type: {
        fontWeight: "bold",
        fontSize: 20,
    },
    para: {
        textAlign: "left",
        padding: 0,
        alignSelf: "flex-start",
    },
    title: {
        fontSize: 18,
        padding: 0,
        // marginVertical: 0,
    },
    text: {
        color: "#4c4c4c",
    },
});
