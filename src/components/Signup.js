import React from 'react';
export default class Signup extends React.Component {
  render() {
    return (
        
        <div className="text-center mt-5 mb-5">

            <h1>
                {this.props.head}
            </h1>

            <p>
                {this.props.para}
            </p>

            <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                {this.props.button}
            </button>

        </div>
    );
  }
}
