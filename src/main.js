function checkNumber(number) {
  return number > 0 ? number : 0;
}
function sayHello(name) {
  return `Hello, ${name}!`;
}

function getNames() {
  return ["Ahmed", "Ali", "Sara"];
}

function getUser(userId, userName) {
  return {
    id: userId,
    name: userName,
  };
}
function loginUsers(email) {
  if (!email) {
    // null, undefined, empty string " " ,false , 0 or NaN
    throw new Error("Email is required");
  }
  return { id: 1, email: email };
}

module.exports = {
  checkNumber,
  sayHello,
  getNames,
  getUser,
  loginUsers,
};
