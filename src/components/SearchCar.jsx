import React from 'react';
import axios from 'axios';

class SearchCar extends React.Component {
    constructor() {
        super();
        this.state = {
            queryString: '',
            hasContent: false,
            database: [],
            searchedDetails: []
        }
    }
    componentDidMount() {
        axios.get("/data/data1.json").then((response) => {
            this.setState({ dataBase: response.data })
        })
    }
    handleSearch = (e) => {
        e.preventDefault();
        const { dataBase } = this.state;
        let query = this.state.queryString.split(":")
        let queryLeft = query[0];
        let queryRight = query[1];
        let showdata = dataBase.filter((data) => {
            if (data[queryLeft]) {
                return (data[queryLeft]).toUpperCase() === (queryRight).toUpperCase()

            }
        })
        this.setState({ searchedDetails: showdata })
        console.log(showdata)
    }
    handleChange = (e) => {
        this.setState({ queryString: e.target.value })
    }
    showSearchBar = () => {
        return (
            <div>
                <form className="col-md-12 position" onSubmit={this.handleSearch}>
                    <input type="text" required placeholder="Enter searchId" name="queryString" value={this.state.queryString} onChange={this.handleChange} className="form-control col-md-8 offset-2" /><br />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
    render() {
        let hasContent = false;
        const items = this.state.searchedDetails.map((obj, i) => {
            hasContent = true;
            return (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{obj.Manufacturer}</td>
                    <td>{obj.Name}</td>
                    <td>{obj.Type}</td>
                    <td>{obj.Color}</td>
                </tr>
            )
        })
        return (
            <React.Fragment><br />
                <header>
                    <h4>Show Car Details</h4>
                </header>
                {this.showSearchBar()}<br />
                {hasContent ? <table className="table table-bordered col-md-8 offset-2">
                    <thead>
                        <th>S No</th>
                        <th>Manufaturer</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Color</th>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table> : <p className="text-danger">No results found</p>}
            </React.Fragment>
        )
    }
}
export default SearchCar;