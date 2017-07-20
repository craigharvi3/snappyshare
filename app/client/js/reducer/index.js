var alertify = require('alertifyjs');

const defaultState = {
  appName: 'snappyshare',
  links: [],
  link: ""
};

const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, links: action.payload.links };
    case 'LINK_UPDATED':
      return { ...state, link: action.link };
    case 'LINK_ADD':
      let links = state.links.slice(0);
      links.push(action.linkJson);
      alertify.notify('Successfully added link', 'success', 5);
      return { ...state, links: links, link: ''}
    default:
      return state;
  }
};

export { reducer };
