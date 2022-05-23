import { ScrollView, StyleSheet, Text, View } from "react-native";

interface user {
    username: string;
    phone: string;
    mail: string;
    age: Number;
    isLogged: boolean;
    isAdmin: boolean | undefined;
}

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Users</Text>
            {userData.map((elem, index) => (
                <View key={index} style={styles.user}>
                    <Text style={styles.text}>Username: {elem.username}</Text>
                    <Text style={styles.text}>Phone: {elem.phone}</Text>
                    <Text style={styles.text}>Mail: {elem.mail}</Text>
                    <Text style={styles.text}>Age: {elem.age}</Text>
                    <Text style={styles.text}>
                        Is Online: {elem.isLogged ? "true" : "false"}
                    </Text>
                    <Text style={styles.text}>
                        Is Admin: {elem.isAdmin ? "true" : "false"}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 50,
    },
    user: {
        alignSelf: "center",
        width: "90%",
        marginBottom: 50,
        flex: 1,
    },
    sv: {
        flex: 1,
    },
    text: {
        flex: 1,
        marginBottom: 2,
        fontSize: 18,
    },
});

const userData: user[] = [
    {
        username: "John",
        phone: "0123456",
        mail: "johndoe@gmail.com",
        age: 52,
        isLogged: false,
        isAdmin: true,
    },
    {
        username: "Roberto",
        phone: "6541332",
        mail: "robertolarcos@gmail.com",
        age: 46,
        isLogged: true,
        isAdmin: false,
    },
    {
        username: "Jane",
        phone: "9874652",
        mail: "janedoe@gmail.com",
        age: 28,
        isLogged: true,
        isAdmin: true,
    },
];
