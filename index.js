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

const removeActiveClass = () =>{
    const buttons = document.getElementsByClassName("remove-btn");
    console.log(buttons)
    for (let btn of buttons){
        btn.classList.remove("active");
    }
}

// Load category pets
const loadCategoryPets = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            // remove active class
            removeActiveClass();

            // Add active class
            const activeBtn = document.getElementById(`btn-${category}`);
            activeBtn.classList.add("active");
            displayAllPets(data)
        })

};

// Load Details
const loadDetails = (petId) => {
    console.log(petId)
}

    // petContainer.innerHTML = "";

    // if(pets.length == 0){
    //     petContainer.classList.remove("grid")
    //     petContainer.innerHTML = `
    //      <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center ">
    //      <img src="assets/error.webp"/>
    //      </div>
    //     `;
    //     return;
    // }
    // else{
    //     petContainer.classList.add("grid")
    // }

// Display All Pets
    const displayAllPets = (data) => {
    const petContainer = document.getElementById("pets");
    data.forEach((pet) => {
            console.log(pet); 
            
        const card = document.createElement("div")
        card.classList = "card card-compact "
        card.innerHTML = `
        <div class=" border rounded-md p-4">
         <figure class="h-[200px] rounded-md ">
    <img
      src=${pet.image}
      class="h-full w-full object-cover "
      alt="Shoes" />
  </figure >
  <div class=" border-b pb-3">
    <h1 class="text-xl font-bold pt-3">${pet.pet_name}</>
    <p class="text-sm text-[#131313B3] font-normal pt-1"> <i class="fa-solid fa-table"></i> Breed: ${pet.breed}</p>
    <p class="text-sm text-[#131313B3] font-normal pt-1"> <i class="fa-solid fa-calendar-days"></i> Birth: ${pet.date_of_birth}</p>
    <p class="text-sm text-[#131313B3] font-normal pt-1"> <i class="fa-solid fa-venus"></i> Gender: ${pet.gender}</p>
    <p class="text-sm text-[#131313B3] font-normal pt-1"> <i class="fa-solid fa-tags"></i> Price: ${pet.price}$</p>
  </div>
    <div class="card-actions pt-3 flex justify-around">
      <button class="btn bg-white hover:bg-green-400"><img src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png"></button>
      <button class="btn bg-white text-[#0E7A81] ">Adopt</button>
      <button class="btn bg-white text-[#0E7A81] ">Details</button>
  </div>
  <div>   
        `;
        petContainer.append(card);
    })
}

// display Catagories
const displayCatagories = (categories) => {
    const categoryContainer = document.getElementById("categories")

    categories.forEach((item) => {

        // button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
             <button id="btn-${item.category}" onclick ="loadCategoryPets('${item.category}')" class="btn remove-btn bg-white lg:px-12 hover:bg-gray-200">
             <img class="h-8 w-8" src="${item.category_icon}"/> <h4 class="text-l font-bold">${item.category} </h4>
             </button>
        `;
        categoryContainer.append(buttonContainer); 
    });
}

loadCatagories();
loadAllPets();