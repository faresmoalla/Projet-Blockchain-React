import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.year}
                </td>
                <td>
                    {this.props.obj.make}
                </td>
                <td>
                    {this.props.obj.model}
                </td>
                <td>
                    {this.props.obj.type}
                </td>
            </tr>
        );
    }
}

export default DataTable;