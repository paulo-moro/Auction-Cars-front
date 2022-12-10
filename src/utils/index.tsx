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

const time = new Date(2023, 6, 10, 20, 1, 0);
let auctionDate = {
  date: time.getUTCDate(),
  mounth: time.getMonth() + 1,
  year: time.getFullYear(),
  hour: time.getHours(),
  minutes: time.getMinutes(),
};


const timeNow = new Date();
let todayDateTime = {
  date: timeNow.getUTCDate(),
  mounth: timeNow.getMonth() + 1,
  year: timeNow.getFullYear(),
  hour: timeNow.getHours(),
  minutes: timeNow.getMinutes(),
};




export const timeAuction = () => {
  
  let timeUntilAcouction = {
    days: todayDateTime.date - auctionDate.date ,
    mounths: todayDateTime.mounth - auctionDate.mounth,
    years: todayDateTime.year  - auctionDate.year,
    hours: auctionDate.hour - todayDateTime.hour,
    minutes: auctionDate.minutes - todayDateTime.minutes
  };

  //colocar limitte de 30 ou 45 dias para disponibilidade do leilão
  if(todayDateTime.date > auctionDate.date) {
    timeUntilAcouction.days = auctionDate.date + (31 - todayDateTime.date);
  }

  if(todayDateTime.mounth > auctionDate.mounth) {
    timeUntilAcouction.mounths = auctionDate.mounth + (12 - todayDateTime.mounth);
    timeUntilAcouction.years = auctionDate.year - todayDateTime.year - 1;
  }

  if(todayDateTime.hour > auctionDate.hour ) {
    timeUntilAcouction.hours = auctionDate.hour + (12 - todayDateTime.hour);
  }

  if (todayDateTime.minutes > auctionDate.minutes) {
    timeUntilAcouction.minutes = auctionDate.minutes + (60 - todayDateTime.minutes);
  }

  console.log("O tempo calculado foi de: ", timeUntilAcouction);
};
