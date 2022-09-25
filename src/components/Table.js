import React, {Component} from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import '../App.css';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
            const options = {
                method: 'GET',
                url: 'https://car-data.p.rapidapi.com/cars',
                params: {limit: '10', page: '0'},
                headers: {
                  'x-rapidapi-key': '675d793217mshfa800e3e0f9b82fp16e135jsn56ddd3fff7a8',
                  'x-rapidapi-host': 'car-data.p.rapidapi.com'
                }
              };
              
              axios.request(options)
              .then((response) => {
                  this.setState({usersCollection : response.data})
                  console.log(response.data);
              }).catch(function (error) {
                  console.error(error);
              });
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 offset-md-8">
                            <form>
                                <label>Search : </label>
                                <input type="text" placeholder="Search"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Year</td>
                                <td>Make</td>
                                <td>Model</td>
                                <td>Type</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
                <br></br>
            </div>
        )
    }

}