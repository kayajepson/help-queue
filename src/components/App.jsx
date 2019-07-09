import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

import MySampleComponent from './ImageLoaderComponentExample';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
  }
  
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={TicketList} />
          <Route path='/newticket' component={NewTicketControl} />
          <Route component={Error404} />
        </Switch>
        <MySampleComponent/>
      </div>
    );
  }
}


export default App;