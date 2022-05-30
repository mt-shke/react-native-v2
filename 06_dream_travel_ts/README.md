<details>
<summary>setup</summary>

```js

```

</details>
<details>
<summary>todo</summary>

```js
// change font
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

RootStack

```js
export type MainStackParamList = {
    HomeScreen: HomeScreenProps;
    BottomTabStack: BottomTabStackProps;
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

</details>

<details>
<summary>font</summary>

react-native.config.js

```js
module.exports = {
    assets: ["./assets/fonts"],
};
```

```js
// add font to: assets/fonts
// npx react-native link
```

</details>
