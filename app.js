function openTab(evt, tabName) {
  var i, sections, tabs;
  
  sections = document.getElementsByClassName("menuSection");

  for(i = 0; i < sections.length; i++){
    sections[i].style.display = "none";
  }

  tabs = document.getElementsByClassName("tab");
  console.log(tabs);
  for(i = 0; i < tabs.length; i++){
    tabs[i].className = tabs[i].className.replace(" active", "");
    tabs[i].style.backgroundColor = "#ffde88"
    tabs[i].style.fontWeight = 500;
  }

  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
  evt.currentTarget.style.backgroundColor = "white";
  evt.currentTarget.style.fontWeight = 700;
}