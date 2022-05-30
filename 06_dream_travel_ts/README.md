<details>
<summary>setup</summary>

```js

```

</details>
<details>
<summary>todo</summary>

```js
// fix homescreen aboutUs button
// add more data/content
// changeFocusedInput borderColor
```

```js
// input - textarea
```

</details>

<details>
<summary>Type React Navigation</summary>

RootStack - ParamList

```js
export type MainStackParamList = {
    HomeScreen: undefined;
    BottomTabStack: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen
                    name="BottomTabStack"
                    component={BottomTabStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

```

Screen

```js
export type HomeScreenProps = NativeStackScreenProps<
    MainStackParamList,
    "HomeScreen"
>;

const HomeView: React.FC<HomeScreenProps> = ({ navigation, route }) => {
    const { navigate } = navigation;

    return (
        <ScrollView style={styles.container}>
            <LandingView />
            <AboutUsContainer />
        </ScrollView>
    );
};
```

Navigation / Route

```js

// NAVIGATION
export type DetailedCircuitScreenNavigationProp = NativeStackNavigationProp<
    CircuitsStackParamList,
    "DetailedCircuitScreen"
>;

// ROUTE
export type DetailedCircuitScreenRouteProp = RouteProp<
    CircuitsStackParamList,
    "DetailedCircuitScreen"
>;


const DetailedCircuit: React.FC = () => {
    const navigation = useNavigation<BottomTabStackNavigationProp>();
    const route = useRoute<DetailedCircuitScreenRouteProp>();
```

</details>

<details>
<summary>font</summary>

expo install

```js
// add font to: assets/fonts
// expo install expo-font
```

```js
let [fontsLoaded] = useFonts({
    "Playfair-Display": require("../assets/fonts/Playfair-Display.ttf"),
    "Playfair-Display-Bold": require("../assets/fonts/Playfair-Display-Bold.ttf"),
    "Readex-Pro": require("../assets/fonts/Readex-Pro.ttf"),
    "Readex-Pro-Bold": require("../assets/fonts/Readex-Pro-Bold.ttf"),
});
```

</details>
