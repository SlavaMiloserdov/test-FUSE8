import React from 'react';
import { RealEstateServiceConsumer } from '../real-estate-service-context';

const withRealEstateService = () => (Wrapped) => {

    return (props) => {
        return (
            <RealEstateServiceConsumer>
                {
                    (realEstateService) => {
                        return(<Wrapped {...props}
                            realEstateService={realEstateService}/>)
                    }
                }
            </RealEstateServiceConsumer>
        )
    }
}

export default withRealEstateService;