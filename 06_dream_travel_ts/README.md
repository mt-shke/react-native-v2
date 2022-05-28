<details>
<summary>setup</summary>

```js

```

</details>
<details>
<summary>todo</summary>

```js
// fix nav type
// fix textarea
// change font
// fix homescreen aboutUs button
// add more data/content
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

const MainStack: React.FC<{}> = () => {
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
