const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const Loader = require( './Loader.jsx' ); // Loading screen
const Nav = require( './Menu.jsx' ); // Nav Bar
const ParallaxDiv = require( './Parallax.jsx' ); // Parallax Divs
const BoxesDiv = require( './Boxes.jsx' ); // Image Boxes with description
const Skill = require( './Skill.jsx' ); // Skill Counter Div
const AchievmentGallery = require( './Gallery.jsx' ); // Gallery for Achievments
const Contact = require( './Contact.jsx' );

const title = `EMANUEL FARAUANU <br/> Programmer & Volunteer`;

const App = React.createClass( {

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
            <ParallaxDiv name='page2' path='img/code.png' title="Skills" height='420px' >
               <Skill title='Photography' level={ 22 } />
               <Skill title='JavaScript' level={ 30 } />
               <Skill title='Friendliness' level={ 34 } />
               <Skill title='Mathematics' level={ 20 } />
               <Skill title='C++' level={ 14 } />
               <Skill title='Leadership' level={ 28 } />
               <Skill title='Physics' level={ 24 } />
               <Skill title='English' level={ 30 } />
               <Skill title='German' level={ 21 } />
               <Skill title='Romanian' level={ 36 } />
               <Skill title='Sports' level={ 14 } />
               <Skill title='Node JS' level={ 18 } />
               <Skill title='React JS' level={ 12 } />
               <Skill title='Web Design' level={ 24 } />
               <Skill title='Video Editing' level={ 22 } />
               <Skill title='Image Editing' level={ 28 } />
            </ParallaxDiv>
            <AchievmentGallery />
            <ParallaxDiv name="page3" path='img/contact.png' title="Contact" height='400px' >
               <Contact />
            </ParallaxDiv>
         </div>
      );
   }

} );

module.exports = App;

// ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
