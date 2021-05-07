var firebaseConfig = {
    apiKey: "AIzaSyBecXKh0njLWnSkWy1NmX9GLjHP1kZyBhU",
    authDomain: "fir-crud-af4a8.firebaseapp.com",
    projectId: "fir-crud-af4a8",
    storageBucket: "fir-crud-af4a8.appspot.com",
    messagingSenderId: "707750975491",
    appId: "1:707750975491:web:5b5091cae3c62a0c421636"
  };
firebase.initializeApp(firebaseConfig);
var dbref=firebase.database().ref().child("students")
function createUser(){
    let uname=document.getElementById("uname").value
    let email=document.getElementById("email").value
    
    dbref.child(uname).set({
        uname:uname,
        email:email
    })
}
function deleteUser(){
    let uname=window.prompt("enter user")
    dbref.child(uname).remove();
}

function updateUser(){
    let uname=document.getElementById("uname").value
    let email=document.getElementById("email").value
    dbref.child(uname).update({
        uname:uname,
        email:email
    })
}
function readUser(){

    t=document.createElement("TABLE");
    t.border="1"
    var row=t.insertRow(-1);
    var ch1=row.insertCell(-1);
    var ch2=row.insertCell(-1);   
    ch1.innerHTML="UserName".bold();
    ch2.innerHTML="Email".bold();
    dbref.on('child_added',(snap)=>{
        r=t.insertRow(-1)
        c1=r.insertCell(-1);
        c2=r.insertCell(-1);
        c1.innerHTML=snap.val().uname;
        c2.innerHTML=snap.val().email;
    })
    userDisplay=document.getElementById("userList")
    userDisplay.appendChild(t)


}