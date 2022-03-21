const timerBlock = document.querySelector(".timer__time");

// ==============Таймер без дедлайна===============
// const updateClock = () => {

//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();

//     const fhours = hours < 10 ? '0' + hours : hours;
//     const fminutes = minutes < 10 ? '0' + minutes : minutes;
//     const fseconds = seconds < 10 ? '0' + seconds : seconds;

//     timerBlock.textContent = `${fhours}:${fminutes}:${fseconds}`
// }
// updateClock()
// setInterval(updateClock, 500)
// 1000 мс меняем на 500мс, чтобы на слабых процессорах не прыгали секунды

// ==============Таймер с дедлайном================
// получим время в мс с 1970 г
const deadLine = "31 march 2022";
let interval;
const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadLine = new Date(deadLine).getTime();
  const timeRemaining = (dateDeadLine - date) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  const fhours = hours < 10 ? "0" + hours : hours;
  const fminutes = minutes < 10 ? "0" + minutes : minutes;
  const fseconds = seconds < 10 ? "0" + seconds : seconds;

  if (days === 1) {
    timerBlock.textContent = `${days} день ${fhours}:${fminutes}:${fseconds}`;
  } else if (days < 1) {
    timerBlock.textContent = `${fhours}:${fminutes}:${fseconds}`;
  } else if (days < 5) {
    timerBlock.textContent = `${days} дня ${fhours}:${fminutes}:${fseconds}`;
  } else {
    timerBlock.textContent = `${days} дней ${fhours}:${fminutes}:${fseconds}`;
  }

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = `00:00:00`;
  }
};

updateClock();
interval = setInterval(updateClock, 500);
