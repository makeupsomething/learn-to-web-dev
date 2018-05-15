import React, { Component } from 'react';

class RenderedHTML extends Component {

    createMarkup = () => {
        const { htmlInput } = this.props;

        return {__html: htmlInput};
    }
    render() {
        return (
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
    );
  }
}

export default RenderedHTML;