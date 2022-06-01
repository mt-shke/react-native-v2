import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./src/components/Card";
import PRODUITS from "./data";
import { IProduct } from "./src/interfaces";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const allProducts: IProduct[] = PRODUITS;
    const data: IProduct = PRODUITS[0];
    console.log(data);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerSV}>
                    {allProducts.map((product, index) => (
                        // <View style={styles.containerCard} key={index}>
                        <Card product={product} key={index} />
                        // </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey",
    },
    containerSV: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 14,
    },
    containerCard: {
        width: "48%",
        marginBottom: 14,
    },
});
