# Health Assistant App (v2)

![alt text](/screenshot.png)

An app which, when asked a query regarding an illness, will reply with its corresponding medicines. 
The app is built like a chat in which you one can converse with the 'assistant'.
This tutorial focuses only on the frontend part ie. building only the app and not setting up the backend server. 
It is built on Windows machine hence supports Android as of now.

### NOTE : 
I've made a version 2 of the app using React Native Gifted Chat. Check it out by changing the branch

## Pre-requisites
- You will need Node, the React Native command line interface, Python2, a JDK, and Android Studio. If you haven't installed these, follow the steps in the "Build Projects with Native Code" tab of :
https://facebook.github.io/react-native/docs/getting-started.html

## Cloning the repository
- Run the following commands (Gitbash or some other linux-based terminal) :
```
git clone https://github.com/raphaeltony/HealthAssistant.git
cd HealthAssistant
npm install
```
- Install axios which will be used for making post requests
```
npm install axios
```
## Running the app on a device 
- Start your android emulator or connect your android phone via USB with USB Debugging enabled
- Run the following command from your project directory:
```
react-native run-android
```
- This will build and run the app on your emulator or device

## APK
Here's the link to the app APK : https://drive.google.com/file/d/19t66KBXK6pZ79W_zu1aYEFE0VdjSkIcZ/view?usp=sharing

## Using the app
- Type in your query and press the medkit button to send it to the bot.
- Examples of queries include :
```
Medicine for cold
What does aspirin cure ?
```
#### NOTE : We are constantly updating the database of illnesses and its corresponding medicines

Cheers ! 
