
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("opn_btn").addEventListener("click",openNav);
  document.getElementById("cls_btn").addEventListener("click",closeNav);
  addEventListener("load",getStart);
  document.querySelector(".sch").addEventListener("click",showInput);
});
  
  function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    document.getElementById("main").style.left = "250px";
    document.getElementById("opn_btn").classList.add("visually-hidden");
    document.getElementById("cls_btn").classList.remove("visually-hidden");
    document.querySelector(".nav-hd #sch").style.top="0";
    document.querySelector(".nav-hd .cag").style.top="0";
    document.querySelector(".nav-hd .are").style.top="0";
    document.querySelector(".nav-hd .ing").style.top="0";
    document.querySelector(".nav-hd .cnt").style.top="0";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.getElementById("main").style.left = "0px";
    document.getElementById("opn_btn").classList.remove("visually-hidden");
    document.getElementById("cls_btn").classList.add("visually-hidden");
    document.querySelector(".nav-hd #sch").style.top="200px";
    document.querySelector(".nav-hd .cag").style.top="1200px";
    document.querySelector(".nav-hd .are").style.top="2200px";
    document.querySelector(".nav-hd .ing").style.top="3200px";
    document.querySelector(".nav-hd .cnt").style.top="4200px";
  }
  //first loading
  var allMeals=[];
  async function getStart(){
    try{
      let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      let data = await response.json();
      allMeals = data.meals;
      console.log(allMeals);
      displayMeals(allMeals);
    }catch(error){
      console.error('Error:', error);
    }
  };
// function displayMeals(x){
//   var pack=``;
//   if(x==null)
//     {pack=`<p class="fs-1 text-white fw-bolder">No meals found.</p>`}
//   else {
//     for(var i=0;i<x.length;i++){
//     pack+=`<div class="col-md-6 col-lg-4 col-xl-3">
//               <div class="card overflow-hidden position-relative mt-4">
//                 <img src="${x[i].strMealThumb}" class="" alt="..." />
//                 <div
//                   class="ovr-rly position-absolute d-flex flex-column justify-content-center"
//                 >
//                   <h6 class="ps-2 fs-1">${x[i].strMeal}</h6>
//                 </div>
//               </div>
//             </div>`;  
//           }}
//           document.querySelector(".container .row").innerHTML=pack;
// };
////////////////////////////////////////////////////////////////////////////
//search by name
function showInput(){
  document.querySelector(".container .row").innerHTML=`<div class="loader position-absolute"></div>`;
          document.getElementById("sr-inp").innerHTML=`<input id="bname" class="form-control me-2 mt-5" type="text" placeholder="Search By Name">
          <input id="bfletter" class="form-control mt-5" type="text" maxlength="1" placeholder="Search By First Letter">`;
          document.getElementById("bname").addEventListener("input",searchByName);
          document.getElementById("bfletter").addEventListener("input",searchByFirst);
          closeNav();
};
  var srcMeals=[];
  async function searchByName(){
    try{
      if (document.getElementById('bname').value==null)
      {
        var srNam="";
      }
      else{var srNam = document.getElementById('bname').value};
      console.log(srNam);
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${srNam}`);
      let data = await response.json();
      srcMeals = data.meals;
      console.log(srcMeals);
      displayMeals(srcMeals);
    }catch(error){
      console.error('Error:', error);
    }
  };

  //search by first letter
  var srcLtMeals=[];
  async function searchByFirst(){
    try{
      if (document.getElementById('bfletter').value==null)
      {
        var srNam="a";
      }
      else{var srNam = document.getElementById('bfletter').value};
      console.log(srNam);
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${srNam}`);
      let data = await response.json();
      console.log(data);
      srcLtMeals = data.meals;
      console.log(srcLtMeals);
      displayMeals(srcLtMeals);
    }catch(error){
      console.error('Error:', error);
    }
  };