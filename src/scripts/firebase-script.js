const config = {
    apiKey: "AIzaSyAmsgseYaZreSHZCpfiyRHGGvb-15lgPyw",
    authDomain: "joncolab-pro.firebaseapp.com",
    databaseURL: "https://joncolab.pro",
    projectId: "joncolab-pro",
    storageBucket: "joncolab-pro.appspot.com",
    messagingSenderId: "271754923803"
};
firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + ' - ' + errorMessage);
});