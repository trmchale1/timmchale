import React, { Component } from 'react';
import Image_mountain from './Image_Mountain';
import Image_arcadia from './Image_arcadia'
import Image_arcadia_2 from './Image_arcadia_2'
import Image_canyon from './Image_canyon'
import Image_turner from './Image_turner'

class Home extends Component {
  render() {
  return (
    <div style={{ textAlign: 'center' }} >
      <header>
        <p>
          Tim's Website
        </p>
        <p>Email me: tim@timmchale.co</p>
        <a href="https://twitter.com/mctim123">Twitter</a>
        &nbsp; &#160;
        <a href="https://github.com/trmchale1" >Github</a>
        &nbsp; &#160;
        <a href="/art">Art</a>
      </header>
    <Image_mountain />
    <Image_arcadia_2 />
    <Image_turner />
    <Image_arcadia />
    <Image_canyon />
    </div>
    );
  }
}

export default Home;
