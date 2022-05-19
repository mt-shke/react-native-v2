import { ListItem, Avatar } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

const CustomListItem = (props) => {
    return (
        <View>
            {list.map((item, i) => {
                return (
                    <ListItem key={i} bottomDivider>
                        <Avatar
                            source={{ uri: item.avatar_url }}
                            avatarStyle={styles.avatar}
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                {item.firstName} {item.lastName}
                            </ListItem.Title>
                            <ListItem.Subtitle>{item.promo}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                );
            })}
        </View>
    );
};

export default CustomListItem;

const list = [
    {
        firstName: "Amy",
        lastName: "Farha",
        avatar_url:
            "https://picsum.photos/" + Math.floor(Math.random() * 200 + 1),
        promo: "Appi Mobile P1",
    },
    {
        firstName: "Chris",
        lastName: "Jackson",
        avatar_url:
            "https://picsum.photos/" + Math.floor(Math.random() * 200 + 1),
        promo: "Développeur web Z7",
    },
];

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 50,
    },
});
