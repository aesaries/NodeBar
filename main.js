document.addEventListener("DOMContentLoaded", () => {
    const imgApiElement = document.getElementById("imgapi");
  
    fetch("https://foodish-api.com/api/")
      .then(response => response.json())
      .then(data => {
        imgApiElement.src = data.image;
      })
      .catch(error => {
        console.error("Error fetching the image from API:", error);
      });
  });
