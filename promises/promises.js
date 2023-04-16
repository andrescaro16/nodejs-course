const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./data/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
