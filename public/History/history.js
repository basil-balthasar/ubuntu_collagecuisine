let timerInSeconds = 0;
      //let recentImage = localStorage.getItem("recentImageName");

      let imageItem = document.getElementById("recentImage");
      console.log(fileName)
      imageItem.src = "./SavedImages/" + fileName + ".png";

      setInterval(() => {
        timerInSeconds += 1;

        if (timerInSeconds >= 3) {
          window.location.reload();
        }
      }, 1000);