const state = {
  apilimit: 0,
  apibars: [],
  apibuttons: [],
  apibuttonOne: 0,
  apibuttonTwo: 0,
  apibuttonThree: 0,
  apibuttonFour: 0,
}

const getters = {
  apilimit(state){
    return state.apilimit
  },
  apibars(state){
    return state.apibars
  },
  apibuttons(state){
    return state.apibuttons
  },
  apibuttonOne(state){
    return state.apibuttonOne
  },
  apibuttonTwo(state){
    return state.apibuttonTwo
  },
  apibuttonThree(state){
    return state.apibuttonThree
  },
  apibuttonFour(state){
    return state.apibuttonFour
  }
}

const mutations = {
  fetchLimit (state, apilimit) {
    state.apilimit = apilimit;
  },
  fetchButtons (state, apibuttons) {
    state.apibuttons = apibuttons;
  },
  fetchButtonOne (state, apibuttonOne) {
    state.apibuttonOne = apibuttonOne;
  },
  fetchButtonTwo (state, apibuttonTwo) {
    state.apibuttonTwo = apibuttonTwo;
  },
  fetchButtonThree (state, apibuttonThree) {
    state.apibuttonThree = apibuttonThree;
  },
  fetchButtonFour (state, apibuttonFour) {
    state.apibuttonFour = apibuttonFour;
  },
  fetchBars (state, apibars) {
    state.apibars = apibars;
  }
}

const actions = {
  fetchLimit ({commit}) {
    axios.get("http://pb-api.herokuapp.com/bars")
    .then(response => {
      commit('fetchLimit', response.data.limit);
    })
 },

 fetchBars ({commit}) {
  axios.get("http://pb-api.herokuapp.com/bars")
  .then(response => {
    for(var i = 0; i < response.data.bars.length; i++){
      commit('fetchBars', response.data.bars[i]);
    }
    commit('fetchBars', response.data.bars);
  })
 },
 
 fetchButtons ({commit}) {
  axios.get("http://pb-api.herokuapp.com/bars")
  .then(response => {
    for(var i = 0; i < response.data.buttons.length; i++){
      commit('fetchButtons', response.data.buttons[i]);
    }
    commit('fetchButtonOne', response.data.buttons[0]);
    commit('fetchButtonTwo', response.data.buttons[1]);
    commit('fetchButtonThree', response.data.buttons[2]);
    commit('fetchButtonFour', response.data.buttons[3]);
  })
 }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}