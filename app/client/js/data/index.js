const data = require('./dummy.json');

const Links = {
  all: () => {
    return new Promise((resolve, reject) => {
      resolve({links: data});
    });
  }
};

export default {
  Links
};