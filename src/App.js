import './App.css';
import { GlobalProvider } from './context/GlobalState';
import {Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import AddEmploee from './component/AddEmploee';
import EditEmployee  from './component/EditEmployee';

function App() {
    
    return (
        <GlobalProvider>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={ Home }/>
                    <Route path="/add" component={ AddEmploee }/>
                    <Route path="/edit/:id" component={ EditEmployee }/>
                </Switch>
            </div>
        </GlobalProvider>
    );
}

export default App;
