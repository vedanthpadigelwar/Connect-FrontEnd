# villageagro

npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
You18:02
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
You18:04
npm install @react-navigation/drawer
You18:05
npm install @react-navigation/stack
npm install @react-navigation/drawer
npm install @react-navigation/bottom-tabs
You18:06
npm install @react-navigation/material-bottom-tabs react-native-paper

# to remove cache

Remove the cache: rm -rf /tmp/metro-\*

# reset cache

npm start -- --reset-cache

# upgrade react native

npx react-native upgrade

# to run project

npx react-native run-android

# to make a release apk

https://reactnative.dev/docs/signed-apk-android
command:

cd android
./gradlew bundleRelease
./gradlew assembleRelease
