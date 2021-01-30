var firebaseConfig = {
  apiKey: "AIzaSyCScw84g2m9AdAeuFZx5qjrNhQSvVkdNjA",
  authDomain: "lb-tech.firebaseapp.com",
  databaseURL: "https://lb-tech.firebaseio.com",
  projectId: "lb-tech",
  storageBucket: "lb-tech.appspot.com",
  messagingSenderId: "812282121675",
  appId: "1:812282121675:web:88a2d1dbb344a1b4d8ba4e",
  measurementId: "G-T1ZR3H0LZD"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const saveButton = document.getElementById("save")
const getButton = document.getElementById("getAll")
const inputTextField = document.getElementById("inputBox")

//ADDS ITEM TO DATABASE
saveButton.addEventListener("click", () => {
  const textToSave = inputTextField.value;
  console.log("save" + textToSave)
  firestore.collection("list")
  .add({
    content: textToSave,
  })
  .then((ref) => {
    console.log(ref.id)
  })
})

// this gets data every time it is updated
firestore.collection("list")
  .onSnapshot((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
  
  //TURNS THE DATA INTO A STRING OF LIST ELEMENTS
  let niceData = data.map(listItem => {
   return '<li>' + listItem.content + '</li>'
  }).join("")
  console.log(niceData)

  //SHOWS THE LIST ELEMENTS ON THE PAGE
  document.getElementById("placeholder").innerHTML = niceData
})

























let listItems = [];

document.getElementById("submit").addEventListener("click", () => {
  //  APPEND THE LIST TO THE PAGE AS YOU MAKE IT
  // let valueFromInput = document.getElementById("inputBox").value;
  // let newElement = document.createElement("p");
  // let content = document.createTextNode(valueFromInput);
  // newElement.appendChild(content);
  // const placeHolder = document.getElementById("placeholder");
  // document.body.insertBefore(newElement, placeHolder);

  // ADD THE ITEMS INTO AN ARRAY
  listItems.push(valueFromInput);
  console.log(listItems);
})



