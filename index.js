window.onload = (event) => {
  var client = new XMLHttpRequest();
  client.open('GET', '/assets/poems/gabriel.txt');
  
  
  client.onreadystatechange = function() {
    if (client.status == 200) {
      document.getElementById("poem-content").textContent = client.responseText;
    }
  }
  
  client.send();
  document.getElementById("poem-content").textContent = "Error loading poem :(";
}