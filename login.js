let form = document.querySelector("#formData");
let output = document.querySelector("#showData");
form.addEventListener("submit",(e)=>{

    e.preventDefault();

    let userData = {

        name: document.querySelector("#signup-name").value,
        email: document.querySelector("#signup-email").value,
        pass: document.querySelector("#signup-password").value
    };

    // Store data in localStorage
    localStorage.setItem("data", JSON.stringify(userData));
    // Show alert
    alert("Data Stored Successfully");
    // Display stored data
    output.innerHTML = `
        <h3>Stored Data</h3>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Password:</strong> ${userData.pass}</p>
    `;
    console.log(userData);
    form.reset();

});

// Show old stored data after refresh
let savedData = JSON.parse(localStorage.getItem("data"));
if(savedData){

    output.innerHTML = `
        <h3>Stored Data</h3>
        <p><strong>Name:</strong> ${savedData.name}</p>
        <p><strong>Email:</strong> ${savedData.email}</p>
        <p><strong>Password:</strong> ${savedData.pass}</p>
    `;
}
 else{

        output.innerHTML = "No Data Stored";
 }

// Remove Button
removeBtn.addEventListener("click",()=>{
    localStorage.removeItem("data");
    output.innerHTML = "No Data Stored";
    alert("Stored Data Removed");

});

// Auto show after refresh
showData();
