import React from 'react';
import Input from '../Components/Input';
import axios from 'axios';
import { imdbApiWikipedia } from '../Config/RouterConfig';

class Details extends React.Component {
    state = {
        awards: '',
        title: '',
        genres: '',
        writers: '',
        keywords: '',
        directors: '',
        imDbRating: '',
        plot: '',
        contentRating: '',
        releaseDate: ''
    }

    componentDidMount(){
        this.getDetailsById();
    }

    getDetailsById = () =>{
        const id = this.props.match.params.id;
        const path = imdbApiWikipedia(id);
        axios.get(path)
        .then(res => {
            this.setState({
                awards: res.data.awards,
                title: res.data.title,
                genres: res.data.genres,
                writers: res.data.writers,
                keywords: res.data.keywords,
                directors: res.data.directors,
                imDbRating: res.data.imDbRating,
                plot: res.data.plot,
                contentRating: res.data.contentRating,
                releaseDate: res.data.releaseDate
            });
            console.log(res.data);
        })
        .catch(function (){
            console.log("Check Id field!");
        });
    }

    render(){
        return(
            <div className="container bg-dark text-light">
                <div className="row">
                    <div className="col-sm">
                        <Input 
                            label={'Awards'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.awards}
                        />
                    </div>
                    <div className="col-sm">
                        <Input 
                            label={'Title'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.title}
                        />
                    </div>
                    <div className="col-sm">
                        <Input 
                            label={'Genres'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.genres}
                        />
                    </div>
                    <div className="col-sm">
                        <Input
                            label={'Writers'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.writers}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Input
                            label={'Rating'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.contentRating}
                        />
                    </div>
                    <div className="col-sm">
                        <Input 
                            label={'Directors'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.directors}
                        />
                    </div>
                    <div className="col-sm">
                        <Input 
                            label={'Release Date'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.releaseDate}
                        />
                    </div>
                    <div className="col-sm">
                        <Input
                            label={'imdb Rating'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.imDbRating}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Input 
                            label={'Keywords'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.keywords}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Input 
                            label={'Description'}
                            isReadOnly={true}
                            elementType="input"
                            type="label"
                            value={this.state.plot}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;