import React, { Component } from 'react';

import './index.scss';


class Home extends Component {
  catRef: React.RefObject<HTMLCanvasElement>;
  constructor(props: Readonly<object>) {
    super(props);
    this.catRef = React.createRef();
  }

  componentDidMount() {
    this.initCat()
  }

  initCat () {
    if (this.catRef.current) {
      const canvas  = this.catRef.current
      const ctx = canvas.getContext('2d')
      console.log(ctx)
    }
  }

  

  render() {
    return (
      <main className="home">
        <section className="wrapper">
          <section className="cat-top"></section>
          <section className="cat-bottom"></section>
          <canvas ref={this.catRef} ></canvas>
        </section>
      </main>
    );
  }
}

export default Home;
