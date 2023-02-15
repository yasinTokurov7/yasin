let create = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let imageUrl = document.getElementById("imageUrl").value;
  let phone = document.getElementById("phone").value;
  let newObject = {
    name: name,
    email: email,
    imageUrl: imageUrl,
    phone: phone,
  };
  localStorage.setItem(name, JSON.stringify(newObject));
  alert(`${name} has been added!`);
};
let read = () => {
  let outputData = "";
  for (let i = 0; i < localStorage.length; i++) {
    let keyName = localStorage.key(i);
    let valueStringified = localStorage.getItem(keyName);
    let valueParsed = JSON.parse(valueStringified);
    outputData += `Name: ${valueParsed.name}, Email: ${valueParsed.email}, Image URL: ${valueParsed.imageUrl}, Phone: ${valueParsed.phone}\n`;
  }
  alert(outputData);
};
let update = () => {
  let name = document.getElementById("name").value;
  if (!localStorage[name]) {
    alert("No such item exists.");
    return false;
  }
  let email = document.getElementById("email").value;
  let imageUrl = document.getElementById("imageUrl").value;
  let phone = document.getElementById("phone").value;
  let updatedObject = {
    name: name,
    email: email,
    imageUrl: imageUrl,
    phone: phone,
  };
  localStorage.setItem(name, JSON.stringify(updatedObject));
  alert(`${name} has been updated!`);
};

let deleteItem = () => {
  let name = document.getElementById("name").value;
  if (!localStorage[name]) {
    alert("No such item exists.");
    return false;
  }
  localStorage.removeItem(name);
  alert(`${name} has been deleted!`);
};
