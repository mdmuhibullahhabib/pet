
// load Catagories
const loadCatagories = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories));
}

// load pets
const loadPets = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res) => res.json())
    .then((data) => displayPets(data.pets));
}

// remove active class
const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("remove-btn");
  console.log(buttons)
  for (let btn of buttons) {
    btn.classList.remove("active");
  }
}

// load  Category Pets
const loadCategoryPets = (category) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      // remove active class
      removeActiveClass();

      // Add active class
      const activeBtn = document.getElementById(`btn-${category}`);
      activeBtn.classList.add("active");
      displayPets(data.data)
    });
}

// spinner
const loadAllPets =() => {
  document.getElementById("spinner").style.display = "block";

  setTimeout( function () {
    loadAllPet()
  },2000)
}
const loadAllPet = () =>{
  loadPets()
}

// adopt
const loadAdopt= (button) =>{
  const buttonClick = document.getElementById('countdownButton');
  const interval = setInterval(function() {
      buttonClick.click();
      clearInterval(interval)
  });
  loadAdoptModal()
}

// CountDown
const loadAdoptModal= (button) =>{
  const countdownDisplay = document.getElementById('countdownDisplay');
  
  countdownButton.addEventListener('click', () => {
    countdownDisplay.textContent = '3';
  
    const countdownInterval = setInterval(() => {
      const currentCount = parseInt(countdownDisplay.textContent);
  
      if (currentCount === 0) {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = '';
      } else {
        countdownDisplay.textContent = currentCount - 1;
      }
    }, 1000);
  });
}

// auto  Click Button
const button = document.getElementById('autoClickButton');
const intervalId = setInterval(function() {
  button.click(); 
}, 3800);


// const countdownButton = document.getElementById('countdownButton');
// const countdownDisplay = document.getElementById('countdownDisplay');

// countdownButton.addEventListener('click', () => {
//   countdownDisplay.textContent = '3';

//   const countdownInterval = setInterval(() => {
//     const currentCount = parseInt(countdownDisplay.textContent);

//     if (currentCount === 0) {
//       clearInterval(countdownInterval);
//       countdownDisplay.textContent = '';
//     } else {
//       countdownDisplay.textContent = currentCount - 1;
//     }
//   }, 1000);
// });

// Load Details
const loadDetails = (petId) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then((res) => res.json())
    .then((data) => displayDetails(data.petData));
}
// load Liked Pet
const loadLikedPet =(petId) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
  .then((res) => res.json())
  .then((data) => displayLikedPet(data.petData.image));
}

// Sort button
const sotPrice = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res) => res.json())
    .then((data) => sortDisplay(data.pets));
}

const sortDisplay = (pets) => {
  pets.sort((a, b) => b.price - a.price);
  displaySort(pets);
}

// display Liked Pet
const displayLikedPet = (image) => {
  const likedContainer = document.getElementById("liked-pet")
  
  const div = document.createElement("div")
  likedContainer.innerHTML += `
  <div class="w-24 h-24">
  <img
      src=${image}
      class="h-full w-full object-cover "
      alt="Shoes" />
  </div>
  `;
  console.log(image)
  likedContainer.appendChild(div);
}

// display details modal
const displayDetails = (petData) => {
  const detailContainer = document.getElementById("modal-content")

  detailContainer.innerHTML = `
      <div class=" border rounded-md p-4">
         <figure class="h-[200px] rounded-md ">
    <img
      src=${petData.image}
      class="h-full w-full object-cover "
      alt="Shoes" />
  </figure >
  <div class=" border-b pb-3">
    <h1 class="text-xl font-bold pt-3">${petData.pet_name}</>
    <p class="text-sm text-[#131313B3] font-normal pt-1"> <i class="fa-solid fa-table"></i> Breed: ${petData.breed}</p>
    <p class="text-sm text-[#131313B3] font-normal pt-1"> <i class="fa-solid fa-calendar-days"></i> Birth: ${petData.date_of_birth}</p>
    <p class="text-sm text-[#131313B3] font-normal pt-1"> <i class="fa-solid fa-venus"></i> Gender: ${petData.gender}</p>
    <p class="text-sm text-[#131313B3] font-normal pt-1"> <i class="fa-solid fa-tags"></i> Price: ${petData.price}$</p>
  </div>
  <div>
  <h2 class="text-xl font-bold">Details Information</h2>
  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
  The point of using is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
  </div>
    `;

  document.getElementById("showModalData").click();
}

// display sort
const displaySort = (pets) => {
  const petContainer = document.getElementById("pets")
  petContainer.innerHTML = "";
pets.forEach((pet) => {
  console.log(pet);

  const card = document.createElement("div");
  card.classList = "card card-compact"
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
    <button onclick="loadLikedPet(${pet.petId})" class="btn bg-white hover:bg-green-400"><img src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png"></button>
    <button onclick="loadAdopt()" class="btn bg-white text-[#0E7A81] ">Adopt</button>
    <button onclick="loadDetails(${pet.petId})" class="btn bg-white text-[#0E7A81] ">Details</button>
</div>
<div> 
  `;
  petContainer.append(card)
});
};

// display pets
const displayPets = (pets) => {
  document.getElementById("spinner").style.display = "none";

  const petContainer = document.getElementById("pets")
  petContainer.innerHTML = "";

  if (pets.length == 0) {
    petContainer.classList.remove("grid")
    petContainer.innerHTML = `
         <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center text-center">
         <img src="assets/error.webp"/>
         <h1 class="text-3xl font-bold"> No Information Available </h1>
         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br> 
          its layout. The point of using Lorem Ipsum is that it has a.</p>
         </div>
        `;
    return;
  }
  else {
    petContainer.classList.add("grid")
  }
  
  pets.forEach((pet) => {
    console.log(pet);

    const card = document.createElement("div");
    card.classList = "card card-compact"
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
      <button onclick="loadLikedPet(${pet.petId})" class="btn bg-white hover:bg-green-400"><img src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png"></button>
      <button onclick="loadAdopt()" class="btn bg-white text-[#0E7A81] ">Adopt</button>
      <button onclick="loadDetails(${pet.petId})" class="btn bg-white text-[#0E7A81] ">Details</button>
  </div>
  <div> 
    `;
    petContainer.append(card)
  });
};

// display Catagories
const displayCatagories = (categories) => {
  const categoryContainer = document.getElementById("categories")
  categories.forEach((item) => {
    console.log(item)

    // button
    const buttonContainer = document.createElement("div");
    // button.classList = "btn";
    buttonContainer.innerHTML = `
        <button id="btn-${item.category}" onclick ="loadCategoryPets('${item.category}')" class="btn remove-btn bg-white lg:px-12 hover:bg-gray-200">
             <img class="h-8 w-8" src="${item.category_icon}"/> <h4 class="text-l font-bold">${item.category} </h4>
             </button>
        `;

    // Append button
    categoryContainer.append(buttonContainer)
  });
}

loadCatagories()
loadAllPets();