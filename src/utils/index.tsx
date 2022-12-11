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

//Caso o leilão tenha data menor do que a do momento a função retorna expirado 
export const timeAuction = (date: string) => {
  const paramsDateAuction = new Date(date);
  const timeNow = new Date();

  const timeUntilAuction = stopWatchAuction(
    paramsDateAuction.getDate(), 
    paramsDateAuction.getMonth(), 
    paramsDateAuction.getFullYear(), 
    paramsDateAuction.getHours(), 
    paramsDateAuction.getMinutes(), 
    paramsDateAuction.getSeconds());

  return timeNow < paramsDateAuction ?  "Expirado" : timeUntilAuction;
};

const stopWatchAuction = (
  days: number,
  months: number,
  year: number,
  hours: number,
  minutes: number,
  seconds: number
) => {

  if (seconds === 0) {
    seconds = 59;
    minutes = -1;
  } else {
    seconds -= 1;
  }

  if (minutes === 0) {
    minutes = 59;
    hours -= 1;
  } else {
    minutes -= 1;
  }

  if (hours === 0) {
    hours = 23;
    days -= 1;
  } else {
    hours -= 1;
  }

  if (days === 0) {
    days = 30;
    months -= 1;
  } else {
    days -= 1;
  }

  if (months === 0) {
    months = 12;
  } else {
    months -= 1;
  }
    
  const calculateTime = calculateTimeAuction(hours, minutes, seconds);
  return `${calculateTime.hours}:${calculateTime.minutes}:${calculateTime.seconds}`;
};

export const calculateTimeAuction = (hour: number, minutes: number, seconds: number) => {
  
  const timeNow = new Date();
  let todayDateTime = {
    hour: timeNow.getHours(),
    minutes: timeNow.getMinutes(),
    seconds: timeNow.getSeconds(),
  };

  let resultTime = { hours: 0, minutes: 0, seconds: 0 };

  if (hour - timeNow.getHours() < 0) {
    resultTime.hours = hour + (24 - timeNow.getHours());
  } else {
    resultTime.hours = hour - timeNow.getHours();
  }

  if (minutes - timeNow.getMinutes() < 0) {
    resultTime.minutes = minutes + (59 - timeNow.getMinutes());
  } else {
    resultTime.minutes = minutes - timeNow.getMinutes();
  }

  if (seconds - timeNow.getSeconds() < 0) {
    resultTime.seconds = seconds + (59 - timeNow.getSeconds());
  } else {
    resultTime.seconds = seconds - timeNow.getSeconds();
  }

  return resultTime;
};
