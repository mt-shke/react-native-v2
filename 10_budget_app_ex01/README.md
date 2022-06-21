<details>
<summary>Install chocolatey jdk11 - Run android</summary>

```js
// -https://chocolatey.org/install

// In powershell:
// Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

// choco install -y nodejs-lts openjdk11

// -Configure the ANDROID_HOME environment variable
// -Test in powershell:
// Get-ChildItem -Path Env:\

// -Connect usb
// adb devices

// npx react-native init budgetApp --template react-native-template-typescript
// npx react-native run-android
```

</details>

<details>
<summary>Setup</summary>

yupResolver

```js
// npm i @hookform/resolvers
```

React native chart kit

```js
// npm i react-native-chart-kit
// npm install --save react-native-svg
```

reanimated carousel

```js
// npm i react-native-reanimated-carousel
// npm i react-native-reanimated
// npx react-native start --reset-cache
// npx react-native run-android
```

</details>

<details>
<summary>Prettier Fix</summary>

```js
//   endOfLine: 'auto',
```

</details>

<details>
<summary>Vector Icons</summary>

android/app/build.gradle

```js
// project.ext.vectoricons = [
//     iconFontNames: [ 'Ionicons.ttf', 'AntDesign.ttf' ] // Name of the font files you want to copy
// ]

// apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

</details>

<details>
<summary>Todo</summary>

```js
// FieldValues in Form.tsx
```

</details>
