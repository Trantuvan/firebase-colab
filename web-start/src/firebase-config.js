/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBr4D6GdWDx6vQ6ROAyLaRS9r_lNCm7zH4",
  authDomain: "friendlychat-de9af.firebaseapp.com",
  projectId: "friendlychat-de9af",
  storageBucket: "friendlychat-de9af.appspot.com",
  messagingSenderId: "342651607158",
  appId: "1:342651607158:web:1591e5e9b038b48ff06757",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
