
// Load & show catagories 

// loadCatagories
const loadCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data) => displayCatagories(data.categories))
}

// load All Pets
const loadAllPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then((data) => displayAllPets(data.pets))
}

// Demo
breed
:
"Labrador Retriever"
category
:
"Dog"
date_of_birth
:
"2023-05-15"
gender
:
"Female"
image
:
"https://i.ibb.co.com/hg9XBJV/pet-10.jpg"
petId
:
10
pet_details
:
"This cheerful female Labrador is a playful bundle of joy. Born on May 15, 2023, she loves water and outdoor activities. Fully vaccinated and priced at $1100, she's perfect for families who enjoy active lifestyles."
pet_name
:
"Daisy"
price
:
1100
vaccinated_status
:
"Fully"

// Display Function

// Display All Pets
const displayAllPets = (pets) => {
    const videoContainer = document.getElementById("pets")
    pets.forEach((pet) => {
        console.log(pet)

        const card = document.createElement("div")
        card.classList = "card card-compact "
        card.innerHTML = `
         <figure class="h-[200px] rounded-md">
    <img
      src=${pet.image}
      class="h-full w-full object-cover "
      alt="Shoes" />
  </figure >
  <div class="">
    <h1 class="text-xl font-bold">${pet.pet_name}</>
    <p class="text-sm text-[#131313B3] font-normal">Breed: ${pet.breed}</p>
    <p class="text-sm text-[#131313B3] font-normal">Birth: ${pet.date_of_birth}</p>
    <p class="text-sm text-[#131313B3] font-normal">Gender: ${pet.gender}</p>
    <p class="text-sm text-[#131313B3] font-normal">Price: ${pet.price}</p>
    <div class="card-actions ">
      <button class="btn "><img src=""></button>
      <button class="btn ">Adopt</button>
      <button class="btn ">Details</button>
       

    </div>
  </div>
  <div>

  </div>
  
          
        `;
        videoContainer.append(card);
    })

}


// display Catagories
const displayCatagories = (categories) => {
    const categoryContainer = document.getElementById("categories")
    categories.forEach(item => {
        console.log(item);

        // button
        const button = document.createElement("button");
        button.classList = "btn bg-white lg:px-12 hover:bg-gray-200"
        button.innerHTML = `
             <img class="h-8 w-8" src="${item.category_icon}"/> <h4 class="text-l font-bold">${item.category} <h4/>
        `

        categoryContainer.append(button)

    });

}
loadCatagories();
loadAllPets();