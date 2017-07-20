const AjaxPromise = require('ajax-promise');

const Links = {
  all: (boardId) => {
    return new Promise((resolve, reject) => {
      AjaxPromise
        .get(`/api/board/${boardId}`)
        .then((links) => {
          resolve({links: links});
        });

    });
  }
};

export default {
  Links
};
