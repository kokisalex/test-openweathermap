import React from 'react';
import Loader from './Loader';

export const setProgress = (p) => {
  if (p === 100) {
    p = 0;
  }
  return p + 10;
};

export const startProgress = (i, p, h, setState) => {
  setTimeout(() => {
    const progress = setProgress(p);

    setState({progress});

    if (!h) {
      startProgress(i, progress, h, setState);
    }
  }, i);
};

export default class extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
    this._setState = this.setState.bind(this);
  }

  componentDidMount() {
    const {progress} = this.state;
    startProgress(500, progress, this.props.hidden, this._setState);
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
