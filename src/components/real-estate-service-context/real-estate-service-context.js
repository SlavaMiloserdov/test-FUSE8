import React from 'react';

const {
    Provider: RealEstateServiceProvider,
    Consumer: RealEstateServiceConsumer
} = React.createContext();

export {
    RealEstateServiceConsumer,
    RealEstateServiceProvider
}