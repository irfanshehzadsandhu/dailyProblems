import React, { Component } from 'react';
import {connect} from "react-redux";
import Datatable from 'react-bs-datatable';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {fetch_shipment} from "../actions/shipmentActions.js"
import store from "../store"
import 'react-datepicker/dist/react-datepicker.css';

class Shipments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    });
  }

  submitDateForm(){
       store.dispatch(fetch_shipment(this.state.startDate,this.state.endDate));
  }

  // componentWillMount(){
  //   console.log('Shipments Component')
  //   store.dispatch(fetch_shipment());
  //  }
   render() {
      return (
        <main role="main">
          <div className="jumbotron">
            <div>
              <div className="row">
                <div className="col-md-12">
                  <form className="form-inline" onSubmit={e => {
                     e.preventDefault();
                     this.submitDateForm();
                   }}>
                    <div className="form-group">
                      <label>Start Date</label>
                      <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleStartDateChange}
                          minDate={moment()}
                          className="form-control"
                      />
                    </div>
                    <div className="form-group">
                    <label>End Date</label>
                      <DatePicker
                          selected={this.state.endDate}
                          onChange={this.handleEndDateChange}
                          minDate={moment()}
                          className="form-control"
                      />
                    </div>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <hr/>
              <div>
                <Datatable
                  tableHeader={[
                    { title: 'From Address', prop: 'fromAddress', sortable: true, filterable: true },
                    { title: 'Shipped', prop: 'Shipped', sortable: true, filterable: true },
                    { title: 'Quote Id', prop: 'QuoteID', sortable: true, filterable: true },
                    { title: 'Spot Quote Id', prop: 'SpotQuoteId', sortable: true, filterable: true },
                    { title: 'Shipment Id', prop: 'ShipmentID', sortable: true, filterable: true },
                    { title: 'To Address', prop: 'toAddress', sortable: true, filterable: true },
                    { title: 'Ship To Company', prop: 'shipToCompany', sortable: true, filterable: true },
                    { title: 'Quote Number', prop: 'QuoteNumber', sortable: true, filterable: true },
                    { title: 'Rate Paid', prop: 'ratepaid', sortable: true, filterable: true },
                  ]}
                  tableBody={this.props.shipments}
                  keyName="userTable"
                  tableClass="striped hover responsive"
                  rowsPerPage={5}
                  rowsPerPageOption={[5, 10, 15, 20]}
                  initialSort={{prop: "QuoteID", isAscending: true}}
                  labels={{
                    first: '<<',
                    last: '>>',
                    prev: '<',
                    next: '>',
                    show: 'Display',
                    entries: 'rows',
                    noResults: 'There is no data to be displayed',
                  }}
                />
              </div>
          </div>
        </main>
      );
   }
}
const mapShipmentStateToProps = (state) => {
  console.log(state.shipments.data);

  return {
    shipments: (state.shipments.data)
  }
}
export default connect(mapShipmentStateToProps)(Shipments);
