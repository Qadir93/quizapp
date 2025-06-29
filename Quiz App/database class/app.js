const firebaseConfig = {
  apiKey: "AIzaSyAIiO0brywXLvWxaH3KcetdrRCVeMcO_I0",
  authDomain: "mydata-e5ab7.firebaseapp.com",
  databaseURL: "https://mydata-e5ab7-default-rtdb.firebaseio.com",
  projectId: "mydata-e5ab7",
  storageBucket: "mydata-e5ab7.firebasestorage.app",
  messagingSenderId: "615868105015",
  appId: "1:615868105015:web:2d62711f294961bc62dab2"
};


db.ref("students").on("value", (snapshot) => {
  let data = snapshot.val();
  let list = "";
  for (let key in data) {
    list += `<li>data[key].name -{key}
    <button onclick="editStudent('key')">Edit</button>
    <button onclick="deleteStudent('{key}')">Delete</button></li>`;
  }
  document.getElementById("studentList").innerHTML = list;
});
 function editStudent(){
    let newname = prompt("enter newneme")
    if(newname){
        db.ref("student"+"roll").update({name:newname})
    }
 }

function deleteStudent(){
    db.ref("student/"+"roll").remove();
}