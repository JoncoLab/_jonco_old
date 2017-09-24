const config = {
    apiKey: "AIzaSyAmsgseYaZreSHZCpfiyRHGGvb-15lgPyw",
    authDomain: "joncolab.pro",
    databaseURL: "https://joncolab-pro.firebaseio.com",
    projectId: "joncolab-pro",
    storageBucket: "joncolab-pro.appspot.com",
    messagingSenderId: "271754923803"
};
firebase.initializeApp(config);
const db = firebase.database();

firebase.auth().signInAnonymously().catch(function(error) {
    alert('Auth failed because of error ' + error.code + ' (' + error.message + ')');
});

firebase.auth().onAuthStateChanged(function (user) {
    const post = {
        "User ID": user.uid,
        "Date": new Date("DD.MM.YYYYTHH:MM:SSZ")
    }
    db.ref("users/")
});