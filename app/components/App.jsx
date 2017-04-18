const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const Loader = require( './Loader.jsx' ); // Loading screen
const Nav = require( './Menu.jsx' ); // Nav Bar
const ParallaxDiv = require( './Parallax.jsx' ); // Parallax Divs
const BoxesDiv = require( './Boxes.jsx' ); // Image Boxes with description
const Skill = require( './Skill.jsx' ); // Skill Counter Div
const AchievmentGallery = require( './Gallery.jsx' ); // Gallery for Achievments

const title = `EMANUEL FARAUANU <br/> Programmer & Volunteer`;

const App = React.createClass( {

   componentDidMount() {
      window.scrollTo( 0, 0 );
      this._div.scrollTop = 0;
   },

   render() {

      const style = {
         margin: 0,
         width: '100%',
         fontFamily: '"Lucida Console", Monaco, monospace'
      };

      return (
         <div style={ style } ref={(ref) => this._div = ref} >
            <Loader />
            <Nav />
            <ParallaxDiv name='title' path='img/me.png' title={ title } height='100vh' />
            <BoxesDiv name='page1' height='500px' />
            <ParallaxDiv name='page2' path='img/code.png' title="Example" height='420px' >
               <Skill title='Photography' level={ 13 } />
               <Skill title='JavaScript' level={ 27 } />
               <Skill title='Friendliness' level={ 38 } />
               <Skill title='Mathematics' level={ 18 } />
               <Skill title='C++' level={ 10 } />
               <Skill title='Leadership' level={ 28 } />
               <Skill title='Physics' level={ 26 } />
               <Skill title='English' level={ 34 } />
               <Skill title='German' level={ 21 } />
               <Skill title='Romanian' level={ 40 } />
               <Skill title='Sports' level={ 14 } />
               <Skill title='Node JS' level={ 18 } />
               <Skill title='React JS' level={ 16 } />
               <Skill title='Web Design' level={ 28 } />
               <Skill title='Video Editing' level={ 25 } />
               <Skill title='Image Editing' level={ 28 } />
            </ParallaxDiv>
            <AchievmentGallery />
         </div>
      );
   }

} );

module.exports = App;

// ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
