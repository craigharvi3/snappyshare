const defaultState = {
  appName: 'snappyshare',
  links: null,
  link: "https://www.mmafighting.com/2017/7/19/15999584/ufc-fight-night-113-medical-suspensions-gunnar-nelson-out-45-days-after-ko-loss"
};

const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, links: action.payload.links };
    case 'LINK_UPDATED':
      return { ...state, link: action.link };
    default:
      return state;
  }
};

export { reducer };
