const initialState = {
  listOfProperties: [],
  loading: true,
  filter: '',
  currency: '£'
}

const checkFilter = (listOfProperties, newFilter) => {
if (newFilter.length < 4) {
  return updateListOfProperties(listOfProperties);
} 

return updateListOfProperties(listOfProperties, newFilter);
}

const updateListOfProperties = (listOfProperties, newFilter = '') => {
const newListOfProperties = listOfProperties.slice();
newListOfProperties.map((property) => {
  if (!newFilter || property.title.toLowerCase().slice(0, newFilter.length) === newFilter.toLowerCase()) {
    property.isHidden = false;
  }
  else {
    property.isHidden = true;
  }
});
return newListOfProperties;
};

const reducer = (state = initialState, action) => {
switch (action.type) {
  case 'PROPERTIES_LOADED':
    return {
      ...state,
      listOfProperties: action.payload,
      loading: false
    }
  case 'FILTER_CHANGED':
    return {
      ...state,
      filter: action.payload,
      listOfProperties: checkFilter(state.listOfProperties, action.payload)
    }

  default:
    return state;
}

};

export default reducer;
