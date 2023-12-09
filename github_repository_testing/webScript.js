const hide = document.getElementById("mybtn_hide"); 
const show = document.getElementById("mybtn_show"); 
const nav_show = document.getElementById("container_a"); 
const nav_hide = document.getElementById("container_b");


//for side navigation 


show.addEventListener('click', open);
hide.addEventListener('click', close);
function navDisplay(){
    nav_show.style.display = "block"; 
    nav_hide.style.display = "none"; 
} 
function navHide(){
    nav_show.style.display = "none"; 
    nav_hide.style.display = "block"; 
} 


function open(){

    nav_show.classList.add("in_nav");
    nav_show.classList.remove("out_nav");
    setTimeout(navDisplay, 100); 
    console.log("open successfully");
}
function close(){
    
    nav_show.classList.add("out_nav");
    nav_show.classList.remove("in_nav");
    setTimeout(navHide, 500);
    console.log("close successfully");
}

//FOR reloading logo

function reloadpage(){
    window.location.href = "QCU_SfCampus.html"; 
}



let snav_a = document.getElementById("one-side-n");
let snav_b = document.getElementById("two-side-n");
let snav_c = document.getElementById("three-side-n");
let snav_d = document.getElementById("four-side-n");

snav_a.addEventListener('click',function(){
    window.location.href = "#Offered_c"; 
});
snav_b.addEventListener('click',function(){
    window.location.href = "#FacilitiesDiv"; 
});
snav_c.addEventListener('click',function(){
    window.location.href = "#map_b"; 
});
snav_d.addEventListener('click',function(){
    window.location.href = "#gallery_b"; 
});


var images = document.getElementById("slideimg");



//FOR COURSES BOX

const next_slide = document.getElementById("next-slide"); 
const next_container = document.querySelector('.facilities-new-set'); 
const fbox_1 = document.querySelector('.f-admin');
const fbox_2 = document.querySelector('.f-library');
const fbox_3 = document.querySelector('.f-clinic');




next_slide.addEventListener('click', function(){
   
  if(next_container.style.display == "none"){
    next_container.style.display = "grid";
    next_slide.innerHTML = "<- BACK"; 

    
  }
  
  else{
    next_container.style.display = "none";
    next_slide.innerHTML = "NEXT ->"; 
  } 
});

// TO SHOW FACILITIES 


const query_box_admin = document.querySelector('.f-js-popup-admin');
const query_box_library = document.querySelector('.f-js-popup-library');
const query_box_clinic = document.querySelector('.f-js-popup-clinic');
const query_box_comlab = document.querySelector('.f-js-popup-comlab');
const query_box_faculty = document.querySelector('.f-js-popup-faculty');
const query_box_greenhouse = document.querySelector('.f-js-popup-greenhouse');

function ElementShow(element){
    element.style.display = 'block';
}

const showElements = (element) => {
  element.classList.add("popup-animate");
  setTimeout(ElementShow(element),2000); 
}

const hideElements = () => {
  query_box_admin.style.display = 'none';
  query_box_library.style.display = 'none';
  query_box_clinic.style.display = 'none';
  query_box_comlab.style.display = 'none';
  query_box_faculty.style.display = 'none';
  query_box_greenhouse.style.display = 'none';
};

document.getElementById('show_admin').addEventListener('click', () => showElements(query_box_admin));
document.getElementById('show_library').addEventListener('click', () => showElements(query_box_library));
document.getElementById('show_clinic').addEventListener('click', () => showElements(query_box_clinic));
document.getElementById('show_comlab').addEventListener('click', () => showElements(query_box_comlab));
document.getElementById('show_faculty').addEventListener('click', () => showElements(query_box_faculty));
document.getElementById('show_greenhouse').addEventListener('click', () => showElements(query_box_greenhouse));


document.getElementById('close-this').addEventListener('click', hideElements);
document.getElementById('close-this-1').addEventListener('click', hideElements);
document.getElementById('close-this-2').addEventListener('click', hideElements);
document.getElementById('close-this-3').addEventListener('click', hideElements);
document.getElementById('close-this-4').addEventListener('click', hideElements);
document.getElementById('close-this-5').addEventListener('click', hideElements);

// FOR IMAGE HOVERING

const teamMembers = [
    { element: document.getElementById("christian"), image: "img/dev1.jpg", name: "Christian I. Ancog" },
    { element: document.getElementById("jane"), image: "img/dev3.jpg", name: "Jane M. Abalos" },
    { element: document.getElementById("ryza"), image: "img/dev4.jpg", name: "Ryza C. Sabordo" },
    { element: document.getElementById("cj"), image: "img/dev2.jpg", name: "CJ Gathchalian" },
    { element: document.getElementById("jojit"), image: "img/dev5.jpg", name: "Jojit Oliva Jr." },
    { element: document.getElementById("sam"), image: "img/dev6.jpg", name: "Samuel Mendoza" },
    { element: document.getElementById("jhon"), image: "img/dev7.jpg", name: "Jhon LLoyd Pasacsac" }
  ];
  
  const bar_container = document.querySelector('.side-popup-bar');
  const imagebox = document.querySelector('.side-popup-bar img');
  const txtbox = document.querySelector('.side-popup-bar h3');
  
  function show_bar(){
    bar_container.style.display = "block"; 
  }
  function hide_bar(){
    bar_container.style.display = "none"; 
  }


  function handleMouseover(member) {
    bar_container.classList.add("side-popup-bar-animate");
    bar_container.classList.remove("side-popup-bar-animate-reverse");
    imagebox.src = member.image;
    txtbox.innerHTML = member.name;
    setTimeout(show_bar(), 1000);
  }
  
  function handleMouseout() {
    bar_container.classList.add("side-popup-bar-animate-reverse");
    bar_container.classList.remove("side-popup-bar-animate");
    setTimeout(hide_bar(), 1000);
  }
  
  teamMembers.forEach((member) => {
    member.element.addEventListener('mouseover', () => handleMouseover(member));
    member.element.addEventListener('mouseout', handleMouseout);
  });
  

//FOR REDIRECTING TO QCU MAP
 
const qcumap = document.getElementById("qcumap"); 

qcumap.addEventListener('click', function(){ 
window.location.href = "qcu-map-locator.html";});