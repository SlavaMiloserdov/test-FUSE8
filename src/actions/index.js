
const listOfPropertiesLoaded = (listOfProperties) => {
    return {
        type: 'PROPERTIES_LOADED',
        payload: listOfProperties
    }
}

const filterChanged = (newText) => {
    return {
        type: 'FILTER_CHANGED',
        payload: newText
    }
}

export {
    listOfPropertiesLoaded,
    filterChanged
}