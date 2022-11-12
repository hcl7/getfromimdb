import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import Input from '../Components/Input';
import ax from 'axios';
import { imdbApiBaseUrl, tableHead } from '../Config/RouterConfig';
import SmartList from '../Components/SmartList';
import Spinner from '../Components/Spinner';

class Home extends React.Component{
    state = {
        squery: '',
        data: [],
        loading: false
    }

    onChangeHandle = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
        console.log(evt.target.value);
    }
    onSearch = () =>{
        this.setState({loading: true});
        let path = imdbApiBaseUrl + this.state.squery;
        ax.get(path)
            .then(res => {
                this.setState({
                    data: res.data.results,
                    loading: false
                });
                console.log(res.data.results);
            })
            .catch(function (){
                console.log("Invalid Query!");
            });
    }
    render(){
        const styled = {
            paddingTop: 2,
            height: 32
        };
        let smartlist = null;
        if(this.state.loading){
            smartlist = (
                <Spinner />
            );
        } else {
            smartlist = <SmartList 
                smartListHeaders={tableHead}
                smartListContents={this.state.data}
                actionLabel={'Details'}
                action={'navlink'}
                view={'/details'}
                where="id"
            />
        }
        return(
            <Auxiliary>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <Input
                                styled={{height: 32}}
                                bstyled={styled}
                                elementType={'textbutton'}
                                className={'btn btn-outline-info'}
                                labeled={'Search'}
                                type="button"
                                name={'squery'}
                                value={this.state.squery}
                                changed={this.onChangeHandle}
                                clicked={this.onSearch}
                            />
                        </div>
                    </div>
                </div>
                {smartlist}
            </Auxiliary>
        );
    }
}

export default Home;