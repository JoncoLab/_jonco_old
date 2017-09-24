'use strict';

firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode + ' - ' + errorMessage);
});