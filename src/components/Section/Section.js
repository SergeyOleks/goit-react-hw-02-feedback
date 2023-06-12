import { Component } from 'react';

class Section extends Component {
  state = {};

  render() {
    const { title } = this.props;
    return (
      <div>
            <h2>{title}</h2>
      </div>
    );
  }
}
export default Section;
