import React from 'react';
import Loader from './Loader';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    const {progress} = this.state;

    const startProgress = (i, p) => {
      setTimeout(() => {
        if (p === 100) {
          p = 0;
        }
        const progress = p + 10;
        this.setState({progress});
        if (!this.props.hidden) {
          startProgress(i, progress);
        }
      }, i);
    };

    startProgress(500, progress);
  }

  render() {
    if (!this.props.hidden) {
      return (
        <Loader progress={this.state.progress}/>
      );
    }
    return this.props.children;
  }
}
