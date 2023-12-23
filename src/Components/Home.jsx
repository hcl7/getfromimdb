import React from "react";
import {connect} from 'react-redux';
import Auxiliary from "../hoc/Auxiliary";
import Input from '../Components/Input';
import { tableHead } from '../Config/RouterConfig';
import SmartList from '../Components/SmartList';
import Spinner from '../Components/Spinner';
import {getImdbData} from '../store/imdbSlice';

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
        this.props.getImdbData({squery: this.state.squery});
    }
    render(){
        const styled = {
            paddingTop: 2,
            height: 32
        };
        let smartlist = null;
        if(this.props.loading){
            smartlist = (
                <Spinner />
            );
        } else {
            smartlist = <SmartList 
                smartListHeaders={tableHead}
                smartListContents={this.props.data ? this.props.data : []}
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
                {this.props.data ? smartlist : <p className="container text-center">{this.props.error}</p>}
            </Auxiliary>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.imdb.data,
    loading: state.imdb.loading,
    error: state.imdb.error
});

const mapDispatchToProps = {getImdbData};

export default connect(mapStateToProps,mapDispatchToProps)(Home);