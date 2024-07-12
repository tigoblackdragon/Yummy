function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    document.getElementById("main").style.left = "250px";
    document.getElementById("opn_btn").classList.add("visually-hidden");
    document.getElementById("cls_btn").classList.remove("visually-hidden");
    document.getElementById("sch").style.top="0";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.getElementById("main").style.left = "0px";
    document.getElementById("opn_btn").classList.remove("visually-hidden");
    document.getElementById("cls_btn").classList.add("visually-hidden");
    document.getElementById("sch").style.top="200px";
  }
  document.getElementById("opn_btn").addEventListener("click",openNav);
  document.getElementById("cls_btn").addEventListener("click",closeNav);