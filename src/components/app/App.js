import './App.scss';
import Header from '../header';
import Filter from '../filter';
import List from '../list';
import SeeMoreButton from '../see-more-button';

function App() {

  return (
    <div className="App">
      <Header />
      <Filter />
      <List />
      <SeeMoreButton />
    </div>
  );
}

export default App;
