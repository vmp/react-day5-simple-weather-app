import React, { Component } from 'react';
import './App.css';
import ButtonGroup from './ButtonGroup';
import WeatherDisplay from './WeatherDisplay';

const PLACES = [
    {name: "Izhevsk",  country: "ru"},
    {name: "Moscow",  country: "ru"},
    {name: "Los Angeles", country: "us"},
    {name: "London", country: "gb"},
    {name: "Paris", country: "fr"},
    {name: "Canberra",  country: "au"}
];

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
            activePlace: 0
        };
    }

    render() {
        const activePlace = this.state.activePlace;
        return (
            <div className="app">
                <header className="app__header">
                    <svg aria-hidden="true" data-prefix="fas" data-icon="sun" class="app__logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M274.835 12.646l25.516 62.393c4.213 10.301 16.671 14.349 26.134 8.492l57.316-35.479c15.49-9.588 34.808 4.447 30.475 22.142l-16.03 65.475c-2.647 10.81 5.053 21.408 16.152 22.231l67.224 4.987c18.167 1.348 25.546 24.057 11.641 35.826L441.81 242.26c-8.495 7.19-8.495 20.289 0 27.479l51.454 43.548c13.906 11.769 6.527 34.478-11.641 35.826l-67.224 4.987c-11.099.823-18.799 11.421-16.152 22.231l16.03 65.475c4.332 17.695-14.986 31.73-30.475 22.142l-57.316-35.479c-9.463-5.858-21.922-1.81-26.134 8.492l-25.516 62.393c-6.896 16.862-30.774 16.862-37.67 0l-25.516-62.393c-4.213-10.301-16.671-14.349-26.134-8.492l-57.317 35.479c-15.49 9.588-34.808-4.447-30.475-22.142l16.03-65.475c2.647-10.81-5.053-21.408-16.152-22.231l-67.224-4.987c-18.167-1.348-25.546-24.057-11.641-35.826L70.19 269.74c8.495-7.19 8.495-20.289 0-27.479l-51.454-43.548c-13.906-11.769-6.527-34.478 11.641-35.826l67.224-4.987c11.099-.823 18.799-11.421 16.152-22.231l-16.03-65.475c-4.332-17.695 14.986-31.73 30.475-22.142l57.317 35.479c9.463 5.858 21.921 1.81 26.134-8.492l25.516-62.393c6.896-16.861 30.774-16.861 37.67 0zM392 256c0-74.991-61.01-136-136-136-74.991 0-136 61.009-136 136s61.009 136 136 136c74.99 0 136-61.009 136-136zm-32 0c0 57.346-46.654 104-104 104s-104-46.654-104-104 46.654-104 104-104 104 46.654 104 104z"></path></svg>
                    React Simple Weather App
                </header>

                <main className="app__container">
                    <div className="app__selector">
                        <h3>Select a city</h3>
                        <ButtonGroup names={PLACES} callback={index => this.setState({activePlace:index})} />
                    </div>

                    <WeatherDisplay key={activePlace} name={PLACES[activePlace].name} country={PLACES[activePlace].country} />
                </main>

            </div>
        );
    }
}

export default App;
