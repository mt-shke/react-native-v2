import { ScrollView, StyleSheet, View } from "react-native";
import Card from "./src/components/Card";
import PRODUITS from "./data";
import { IProduct } from "./src/interfaces";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "./src/components/Searchbar";
import { useState } from "react";
import { colors } from "./src/globals";

export default function App() {
    const allProducts: IProduct[] = PRODUITS as IProduct[];

    const [search, setSearch] = useState<string>("");
    const emptySearch = search.trim() === "";

    const filteredProduct: IProduct[] = allProducts.filter(
        (product) =>
            (!emptySearch &&
                product.title
                    .toLowerCase()
                    .includes(search.toLowerCase().trim())) ||
            (!emptySearch &&
                product.brand
                    .toLowerCase()
                    .includes(search.toLowerCase().trim()))
    );

    const productsToRender = emptySearch ? allProducts : filteredProduct;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Searchbar setSearch={setSearch} />
                <ScrollView>
                    <View style={styles.containerSV}>
                        {productsToRender.map((product, index) => (
                            <Card product={product} key={index} />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightgrey,
    },
    containerSV: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 10,
    },
});
