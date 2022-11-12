import React from 'react';
import Toolbar from '../Components/Toolbar'
import Auxiliary from '../hoc/Auxiliary';
import Footer from '../Components/Foot';

class Layout extends React.Component {
    render(){
        return (
            <Auxiliary>
                <div className='Container'>
                    <Toolbar />
                    {this.props.children}
                    <Footer />
                </div>
            </Auxiliary>
        );
    }
};
export default Layout;