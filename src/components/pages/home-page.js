import React from 'react';
import Header from '../header';
import Filter from '../filter';
import List from '../list';
import SeeMoreButton from '../see-more-button';

function HomePage() {

    return (
        <React.Fragment>
            <Header />
            <div className="wrapper">
                <Filter />
                <List />
            </div>            
            <SeeMoreButton />
        </React.Fragment>        
    );
  }
  
export default HomePage;