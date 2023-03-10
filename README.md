# An application for an English teacher

This is a mobile app, that I created just for fun when played with React Native. 

## Motivation

In English classes, we often need to get a random set of letters to make words out of them. Every time searching the Internet for such an application is tiring. So the idea came up to create a mobile application that will always be at hand.  
Later, I also added the Coin Flip mini app. It can be useful to find out who will be the first to answer the teacher's question 😅.
As you can see, this application can be very helpful for your English teacher 😇.

---

<p align="center">Don't forget to click ⭐ if you like the project!<p>

---

## How it looks?

There are two mini apps:  
- Coin Flip
- Letters generator

### Coin Flip

Coin Flip looks like this:  

<img src="https://github.com/victorizbitskiy/aet/blob/main/docs/img/Coin%20flip.gif"/>  

There are 12 GIFs that are shown randomly.  
To determine how long the animation takes, the [gifs.json](https://github.com/victorizbitskiy/elgb/blob/main/src/modules/coinFlip/gifs/gifs.json) file is used.

### Letters generator

Letters generator looks like this:  

<img src="https://github.com/victorizbitskiy/aet/blob/main/docs/img/Letters%20generator.gif"/>  

Here we can set the number of letters and the number of groups.

## How to run it?

Clone it:
```
$ git clone https://github.com/victorizbitskiy/aet
```
Install dependencies:
```
$ npm install
```
Then run it and then press `w`:
```
$ expo start
```
  
## How to buid it?

This is quite difficult for a beginner. Most likely you will have to spend more than one evening to do this. 
But if you don't give up, I am sure that you will succeed. Here are the required steps that you will need to follow.  
<br />
To get the *.apk file, you will first need to create an [expo.dev](https://expo.dev) account.
Then you need to add Credentials.
To do this, you will need to create a keystore...
```
keytool -genkeypair -v -storetype PKCS12 -keystore aet.keystore -alias aet -keyalg RSA -keysize 2048 -validity 10000

```
and get the *.p12 key 
```
keytool -importkeystore -srckeystore aet.keystore -destkeystore new-store.p12 -deststoretype PKCS12

```
After that you will be able to get *.apk file (for android).
```
$ eas build -p android --profile preview
```



