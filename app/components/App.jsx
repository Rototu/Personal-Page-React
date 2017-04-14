const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const SectionDivBoxes = require( './Boxes.jsx' );
const Loader = require( './Loader.jsx' );
const Nav = require( './Menu.jsx' );
const ParallaxDiv = require( './Parallax.jsx' );

const title = `EMANUEL FARAUANU <br/> Programmer & Volunteer`;

const App = React.createClass( {

   render() {

      const style = {
         margin: 0,
         width: '100%',
         fontFamily: '"Lucida Console", Monaco, monospace'
      };

      return (
         <div style={ style } >
            <Loader />
            <Nav />
            <ParallaxDiv name='title' path='img/me.png' title={ title } height='100vh' />
            <SectionDivBoxes name='page1' height='100vh' />
            <ParallaxDiv name='page2' path='img/code.png' title="Example" height='100vh' />
         </div>
      );
   }

} );

module.exports = App;

// ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
