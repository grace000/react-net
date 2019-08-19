
import React, { Component } from 'react';

export class Values extends Component {
  static displayName = FetchData.name;

  constructor (props) {
    super(props);
    this.state = { values: [], loading: true };

    fetch('api/Values/Get')
      .then(response => response.json())
      .then(data => {
        this.setState({ values: data, loading: false });
      });
  }

  static rendeValueTable (values) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Line</th>
          </tr>
        </thead>
        <tbody>
          {values.map(value =>
            <tr key={value}>
              <td>{value}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderValueTable(this.state.values);

    return (
      <div>
        <h1>Just some strings here</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
