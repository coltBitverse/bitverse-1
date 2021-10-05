
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ArticleListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';
import HomePage from './Pages/HomePage';
import './App.css';

function App() {
  return (

    <BrowserRouter>
       <div className="App">
         <Header />
       </div>

<Switch>
       <Route path="/" component={HomePage} exact/>
       <Route path="/article" component={ArticleListPage} />
       <Route path="/art" component={ArticlePage} />
       
</Switch>
      
    </BrowserRouter>
    
 
  );
}

export default App;
