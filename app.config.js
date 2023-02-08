module.exports = ({config}) => ({
  ...config,
  extra: {
    eas: {
      projectId: "7c940907-fbe8-4d30-bfe5-55637e6d8785",
    },
  },
  android: {
    package: "com.nameci.aet",
    versionCode: 1,
    adaptiveIcon: {
      backgroundColor: "#FFFFFF"
    }
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.nameci.aet",
    buildNumber: "1.0.0"
  },
});