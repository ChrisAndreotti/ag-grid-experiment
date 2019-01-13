import React, { Component } from 'react';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                { headerName: "Make", field: "make", sortable:true, filter:true },
                { headerName: "Model", field: "model", sortable:true, filter:true },
                { headerName: "Price", field: "price", sortable:true, filter:true }

            ],
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
    }

    render() {
        return (
                <div 
                  className="ag-theme-material"
                  style={{ 
	                height: '500px', 
	                width: '600px' }} 
		            >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}

export default App;