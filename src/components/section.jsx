import React from "react";
import PropTypes from "prop-types";

class Section extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <section className={this.props.className}>
          <h1>{this.props.h1}</h1>
          <code>{this.props.code}</code>
          {this.props.children}
        </section>
      </React.Fragment>
    );
  }
}

export default Section;

//https://stackoverflow.com/questions/44573199/cannot-read-property-string-of-undefined-react-proptypes-layoutproptypes-j
//https://www.npmjs.com/package/prop-types
// To enable nesting of child components https://stackoverflow.com/questions/43712494/why-wont-my-nested-react-components-render
