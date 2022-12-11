import { Vehicle } from "../interface/vehicle/index";
import axios from "axios";

export const convertInitialsName = (name: string) => {
  const splitName = name?.split(" ");
  return splitName.length > 1
    ? splitName[0][0] + splitName[1][0]
    : splitName[0][0];
};

export const getVehicle = (id: string) => {
  let vehicle: any;
  axios
    .get("http://localhost:3000/vehicle/c1ab2e7c-a33e-48bf-855e-c20d075edc4c")
    .then((res) => (vehicle = { ...res.data }));
  return vehicle;
};

export const postCommentVehicle = (id: string, comment: string) => {
  if (sessionStorage.getItem("user")) {
    const token = JSON.parse(sessionStorage.getItem("user") || "");
    axios
      .post(`http://localhost:3000/comment/${id}`, comment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data));
  } else {
    console.log("Comment, não tem token!");
  }
};

//Caso o leilão tenha data menor do que a do momento a função retorna expirado - O ternário está invertido para testes
export const timeAuction = (date: string) => {
  const paramsDateAuction = new Date(date);
  const timeNow = new Date();

  console.log(paramsDateAuction);
  console.log(timeNow);

  const timeUntilAuction = calculateTimeAuction(
    // paramsDateAuction.getUTCMonth(),
    // paramsDateAuction.getUTCFullYear(),
    paramsDateAuction.getUTCDate(),
    paramsDateAuction.getUTCHours(),
    paramsDateAuction.getUTCMinutes()
  );

  return timeNow < paramsDateAuction ? "Expirado" : timeUntilAuction;
};


export const calculateTimeAuction = (
  day: number,
  hour: number,
  minutes: number,
  ) => {
    const timeNow = new Date();
    const seconds = 0;

  let todayDateTime = {
    day: timeNow.getUTCDate(),
    hour: timeNow.getUTCHours(),
    minutes: timeNow.getUTCMinutes(),
    seconds: timeNow.getUTCSeconds(),
  };

  const convertDaysOfHours = 24 * (day - todayDateTime.day);
  const resultTime = { hours: convertDaysOfHours, minutes: 0, seconds: 0 };

  if (seconds - todayDateTime.seconds < 0) {
    resultTime.seconds = seconds + (59 - todayDateTime.seconds);
  } else {
    resultTime.seconds = seconds - todayDateTime.seconds;
  }
  
  if (minutes - todayDateTime.minutes < 0) {
    resultTime.minutes = minutes + (59 - todayDateTime.minutes);
  } else {
    resultTime.minutes = minutes - todayDateTime.minutes;
  }
  
  if (hour - todayDateTime.hour < 0) {
    resultTime.hours += hour + (24 - todayDateTime.hour);
  } else {
    resultTime.hours += hour - todayDateTime.hour;
  }
  
  return `${resultTime.hours}:${resultTime.minutes}:${resultTime.seconds}`
};

