let deadline = new Date("dec 22 2024 19:51:20").getTime();

  let timerInterval = setInterval(() => {
    let timer = deadline - new Date().getTime();

    if (timer < 0) {
      document.getElementById("days").innerText = "0";
      document.getElementById("hours").innerText = "0";
      document.getElementById("minutes").innerText = "0";
      document.getElementById("seconds").innerText = "0";
      clearInterval(timerInterval);
    } else {
      let days = Math.floor(timer / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timer % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }
  }, 1000);