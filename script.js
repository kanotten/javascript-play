// Variable function
const showPetNameTwo = function (name) {
  console.log("the pet name is: " + name);
};

const showPetName = (name) => {
  console.log("the pet name is: " + name);
};

const sum = (num1, num2) => {
  console.log(num1 + num2);
};

// Example usage of the sum function
sum(100, 200);

// Example usage of the showPetName and showPetNameTwo functions
showPetName("Fluffy");
showPetNameTwo("Buddy");

// client face - server - database
// get informations from server
//delete something from database
//post something from database/to database
//edit something on database
//create - read - update - delete most importing actions ( CRUD )

// Create / post : Hesh is adding his jackets on finn
// Read / get : Jonas is getting all the jackets on finn when he searches
// update: Truls is updating his ad on finn, because he posted a wrong Post
// delete: Truls doesnt like the post so he decided to delete it .

const API_URL = "https://catfact.ninja/facts"; // Link for the back end application
const factsContainer = document.querySelector(".facts-container");

//GET
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log("data: ", data);
    const totalNumberOfFacts = factsData.data.length;
    {
    }
  });
