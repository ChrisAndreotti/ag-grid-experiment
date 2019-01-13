import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

class BasicGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                { headerName: "Make", field: "make", sortable: true, filter: true, checkboxSelection: true },
                { headerName: "Model", field: "model", sortable: true, filter: true },
                { headerName: "Price", field: "price", sortable: true, filter: true }
            ]
        }
    }

    onGridReady(params) {
      this.gridApi = params.api
    }

    componentDidMount() {
      fetch('https://api.myjson.com/bins/15psn9')
        .then(result => result.json())
        .then(rowData => this.setState({rowData}));
    }

    onButtonClick = e => {
      const selectedNodes = this.gridApi.getSelectedNodes();
      console.log(selectedNodes);
      const selectedData = selectedNodes.map( node => node.data );
      const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

    render() {
        return (
                <React.Fragment>
                  <h1>Basic ag-grid with React</h1>
                  <div>
                    <h3>Demonstrates:</h3>
                    <ul>
                      <li>Fetching and loading data from external API</li>
                      <li>Demonstrates onGridReady callback, use of gridApi</li>
                      <li>Column mapping using columnDefs property</li>
                      <li>Multiple row selection using rowSelection="multiple" attribute on grid, checkboxSelection:true in columnDefs</li>
                    </ul>
                  </div>
                  <br/><hr /><br/><br/>
                  <div 
                    className="ag-theme-material"
                    style={{ 
                    height: '500px', 
                    width: '600px' }} 
                  >
                    <button onClick={this.onButtonClick.bind(this)}>Get selected rows</button>
                      <AgGridReact
                          onGridReady={this.onGridReady.bind(this)}
                          columnDefs={this.state.columnDefs}
                          rowData={this.state.rowData}
                          rowSelection="multiple"
                      >
                      </AgGridReact>
                  </div>
                </React.Fragment>
            );
    }
}

export default BasicGrid;