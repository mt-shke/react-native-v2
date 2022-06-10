<details>
<summary>Todo</summary>

```js
// style
// image
// button suivant arrow

// need onBlur fix
// refac updateData
```

</details>

<details>
<summary>Setup</summary>

```js
// npm i validator
// npm i --save-dev @types/validator

// expo install react-native-modal-datetime-picker @react-native-community/datetimepicker
```

</details>

<details>
<summary>Date</summary>

```js
// expo install react-native-modal-datetime-picker @react-native-community/datetimepicker
```

</details>

<details>
<summary>Android keyboard fix</summary>

app.json

```json
{
    "expo": {
        "android": {
            "softwareKeyboardLayoutMode": "pan"
        }
    }
}
```

</details>

<details>
<summary>Linear Gradient</summary>

```js
// expo install expo-linear-gradient

<LinearGradient
    style={styles.overlay}
    // where the gradient starts and ends
    start={{ x: 0.05, y: 0 }}
    end={{ x: 0.7, y: 0 }}
    //    set the array of colors of the gradient
    colors={[colors.black, "transparent"]}
    // where each colors start
    locations={[0, 1]}
/>
```

</details>
