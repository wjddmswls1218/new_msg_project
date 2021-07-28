import User from "../models/User";

export const testScreen = (req, res) => {
  res.render("base");
};

export const mainController = (req, res) => {
  const loginFlag = req.userLoginFlag || false;

  let isAthenticated = false;

  if (loginFlag) {
    isAthenticated: true;
  }
};

export const friendsController = (req, res) => {
  res.render("friends");
};

export const messageController = (req, res) => {
  res.render("message");
};

export const profileController = (req, res) => {
  res.render("profile");
};
