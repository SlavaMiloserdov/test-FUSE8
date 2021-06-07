import React from 'react';
import Header from '../header';
import Filter from '../filter';
import List from '../list';
import SeeMoreButton from '../see-more-button';

function HomePage() {

    return (
        <React.Fragment>
            <Header />
            <Filter />
            <List />
            <SeeMoreButton />
        </React.Fragment>        
    );
  }
  
export default HomePage;