import React, {Component} from 'react';
import PreHeader from './components/PreHeader/PreHeader';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Trending from './components/Trending/Trending';
import MainNew from './components/MainNew/MainNew';
import MainBlock from './components/MainBlock/MainBlock';
import New from './components/New/index';
import Footer from './components/Footer/Footer';



class App extends Component {
    state = {  }
    render() {
        return (
            <>
                
                <div class="body-inner"></div>
                <PreHeader></PreHeader>
                <Header></Header>
                <Menu></Menu>
                <Trending></Trending>
                <MainNew></MainNew>
                <MainBlock></MainBlock>
                <New></New>
                <Footer></Footer>
            </>
        );
    }
}

export default App;