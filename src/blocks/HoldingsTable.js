import React, {Component} from 'react';
import {connect} from 'react-redux';

class HoldingsTable extends Component {
    renderTableBody = () => {
        return (
            <tbody>
                {
                    this.props.holdings.map((holding, index) => {
                        let holdingTotalPrice = (parseInt(holding.quantity) * parseFloat(holding.sharePrice)).toFixed(2);
                        return (
                        <tr key={index}>
                            <th scope="row">{holding.holdingCode}</th>
                            <td>{holding.sharePrice}</td>
                            <td>{holding.quantity}</td>
                            <td>{holdingTotalPrice}</td>
                        </tr>);
                    })
                }
            </tbody>
        );
    }
    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                {this.renderTableBody()}
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        holdings: state.holdings.holdings
    }
}
export default connect(mapStateToProps, null)(HoldingsTable);
