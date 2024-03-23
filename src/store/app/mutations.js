const mutations = {
  /** popup */
  "set/popup"(state, payload) {
    state.popupState = {
      ...payload,
      $display: true,
      $timestamp: Date.now(),
    };
  },
  "clear/popup"(state) {
    state.popupState = {
      $display: false,
      $timestamp: -1,
    };
  },
  "systm/Loading"(state, payload) {
    // console.log(payload, "mutations");
    state.isLoading = payload;
  },
  "systm/firstLoading"(state, payload) {
    console.log(payload, "mutations");
    state.firstLoading = payload;
  },
};

export default mutations;
