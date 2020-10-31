import React, { Component } from 'react';
import unsplash from "../api/unsplash";
import ImageList from './ImageList';
import SearchBar from './SearchBar';


export default class App extends Component {

    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
       const res = await unsplash.get('https://api.unsplash.com/search/photos',{
           params: {query: term},
       });

       this.setState({images: res.data.results})
    }        

    render() {
        return (
        <div className="ui container" style={{marginTop:"10px"}}>
           <SearchBar onSubmit={this.onSearchSubmit}/>
           <ImageList images={this.state.images} />
        </div>
        )
    }
}
