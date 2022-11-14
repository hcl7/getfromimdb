import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../Components/Input';

let slContent = [];

class SmartList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    render() {
        slContent = this.props.smartListContents;
        return (
            <div className='container'>
                <table className="table table-bordered table-dark table-striped">
                    <thead>
                        <tr>
                            {this.props.smartListHeaders && Array.isArray(this.props.smartListHeaders) && this.props.smartListHeaders.map(slh => (
                                <th className="th-sm" key={slh.key}>
                                    <div><i className="bi bi-chevron-compact-down"></i>
                                        {slh.label}
                                    </div>
                                </th>
                            ))}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slContent && Array.isArray(slContent) && slContent.map((slc, index) =>
                            <tr key={index}>
                                {Object.keys(slc).map((key, i) => (
                                    this.props.smartListHeaders.some(header => header.key === key) ? 
                                    <td key={i}>
                                        { key !== 'image' ? 
                                        <Input 
                                            isReadOnly={true}
                                            elementType="input"
                                            type="label"
                                            value={slc[key]}
                                        /> : 
                                        <Input
                                            elementType="image"
                                            path={slc[key]}
                                            width={'40px'}
                                        />}
                                    </td> : null
                                ))}
                                <td style={{verticalAlign: "middle", padding: '10px'}}>
                                    {this.props.action === 'navlink' ? 
                                        <NavLink 
                                            className="btn btn-outline-info" 
                                            to={this.props.view + '/' + slc[this.props.where]}>{this.props.actionLabel}
                                        </NavLink>
                                    : this.props.action === 'button' ? 
                                        <button 
                                            className="btn btn-outline-danger" 
                                            onClick={(e) => this.props.clicked(slc[this.props.where])}>{this.props.actionLabel}
                                        </button>
                                    : null}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SmartList;