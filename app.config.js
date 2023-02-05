module.exports = ({config}) => ({
  name: config.name,
  extra: {
    eas: {
      projectId: "7c940907-fbe8-4d30-bfe5-55637e6d8785",
    },
  },
  android: {
    package: "com.nameci.aet",
    versionCode: 1,
    adaptiveIcon: {
      // foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    }
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.nameci.aet",
    buildNumber: "1.0.0"
  },
});