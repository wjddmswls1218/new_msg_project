export const testScreen = (req, res) => {
  res.render("base");
};

export const mainController = (req, res) => {
  res.render("main");
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
