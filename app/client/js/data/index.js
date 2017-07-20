const data = require('./dummy.json');

const Links = {
  all: () => {
    return new Promise((resolve, reject) => {
      resolve({links: []});
    });
  }
};

export default {
  Links
};
