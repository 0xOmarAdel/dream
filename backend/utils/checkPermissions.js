const checkPermissions = (reqUser, resUserId) => {
  //   console.log(reqUser);
  //   console.log(resUserId);
  //   console.log(typeof resUserId);
  if (reqUser.role === "admin") return;
  if (reqUser.userId === resUserId.toString()) return;
  throw new Error("You don't have permission to perform this action");
};

module.exports = checkPermissions;
