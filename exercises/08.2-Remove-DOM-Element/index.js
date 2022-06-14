const list = document.getElementById("myList");

if (list.hasChildNodes()) {
  list.removeChild(list.children[0]);
}