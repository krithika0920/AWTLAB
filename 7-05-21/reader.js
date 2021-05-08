var express=require("express")
var firebase=require("firebase")

var app=express();
app.use(express.urlencoded())
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5UlgjdFXFYaYnFfw71BUTKTLqEzX9ZYw",
    authDomain: "emplo-80a33.firebaseapp.com",
    projectId: "emplo-80a33",
    storageBucket: "emplo-80a33.appspot.com",
    messagingSenderId: "108347523840",
    appId: "1:108347523840:web:067ffb9e35bf971a04a9e5",
    measurementId: "G-H1X0MTMN8E"
  };
  firebase.initializeApp(firebaseConfig)

  var dbRef=firebase.database().ref().child("employee")

  app.get("/employee",(req,res)=>{
      dbRef.once("value",(snap)=>{
          res.send(snap.val())
      })
  })
  app.get("/employee/:eid",(req,res)=>{
    var eid=req.params.eid
    dbRef.child(eid).once("value",(snap)=>{
        res.send(snap.val())
    })
  })
  app.post("/addEmployee",(req,res)=>{
      eid=req.body.eid
      dbRef.child(eid).set({
          eid:req.body.eid,
          ename:req.body.ename,
          ebranch:req.body.ebranch
      })
      res.send("Inserted Successfully")
  })
  app.delete("/deleteEmployee/:eid",(req,res)=>{
      var eid=req.params.eid
      dbRef.child(eid).remove()
      res.send("Deleted successfully")
  })
  app.listen(3000,()=>{
    console.log("Server Started.......")
  })