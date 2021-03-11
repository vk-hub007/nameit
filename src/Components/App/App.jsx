import React from 'react';
import Header from '../Header/Header';
import SearchHolder from '../SearchHolder/SearchHolder';
import ResultContainer from '../ResultContainer/ResultContainer'

import './App.css'


const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            headerTitle: 'NAME IT !!',
            headerExpand: true,
            SuggestedNames: []
        };
    }


    TextClicked = (inputText) => {
        this.setState({
            headerExpand: inputText.length > 0 ? false : true,
            SuggestedNames: inputText ? name(inputText) : []
        })
        // alert("hello");
        // console.log(inputText)
    }

    render() {
        // console.log(name('cloud'));

        return (
            <div>
                <Header headerExpand={this.state.headerExpand}
                    headerText={this.state.headerTitle} />
                <SearchHolder textChanged={this.TextClicked} />
                <ResultContainer SuggestedNames={this.state.SuggestedNames} />

            </div>
        )
    }
}

export default App;