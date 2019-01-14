import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import SimplePopover from './SimplePopover';

class GridCellClickPopover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            columnDefs: [
                { headerName: "Make", field: "make", sortable: true },
                { headerName: "Model", field: "model", sortable: true },
                { headerName: "Price", field: "price", sortable: true }
            ]
        }
    }

    onGridReady(params) {
      this.gridApi = params.api
    }

    onCellClicked(cellClickedEvent) {
        console.log(cellClickedEvent);
        this.setState({ 
            anchorEl: cellClickedEvent.event.target,
            cellValue: cellClickedEvent.value,
        });
    }
    
    handlePopoverClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    componentDidMount() {
      fetch('https://api.myjson.com/bins/15psn9')
        .then(result => result.json())
        .then(rowData => this.setState({rowData}));
    }

    render() {
        return (
                <React.Fragment>
                  <h1>ag-grid with popover</h1>
                  <div>
                    <h3>Demonstrates:</h3>
                    <ul>Showing a material-ui <a rel="noopener noreferrer" href="https://material-ui.com/utils/popover/" target="_blank">popover component</a> when clicking in an ag-grid cell</ul>
                  </div>
                  <br/><hr /><br/><br/>
                  <div 
                    className="ag-theme-material"
                    style={{ 
                    height: '500px', 
                    width: '600px' }} 
                  >
                      <AgGridReact
                          onGridReady={this.onGridReady.bind(this)}
                          columnDefs={this.state.columnDefs}
                          rowData={this.state.rowData}
                          onCellClicked={this.onCellClicked.bind(this)}
                      >
                      </AgGridReact>
                      <SimplePopover 
                          handleClose={this.handlePopoverClose.bind(this)}
                          anchorEl={this.state.anchorEl}
                          cellValue={this.state.cellValue}
                      />
                  </div>
                </React.Fragment>
            );
    }
}

export default GridCellClickPopover;