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
let resizeTimeout;

const App = React.createClass( {

   getInitialState() {

      let boxDivHeight = '500px',
         skillsHeight = '420px';

      if( window.innerWidth <= 400 ) {
         boxDivHeight = '700px';
         skillsHeight = '280px';
      } else if( window.innerWidth <= 640 ) {
         boxDivHeight = '180px';
         skillsHeight = '280px';
      } else if( window.innerWidth <= 810 ) {
         boxDivHeight = '280px';
         skillsHeight = '280px';
      }

      return{
         boxDivHeight: boxDivHeight,
         skillsHeight: skillsHeight
      }

   },

   resizeThrottler() {
      if ( !resizeTimeout ) {
         const self = this;
         resizeTimeout = setTimeout( () => {
            resizeTimeout = null;
            self.resizeHandler();
         }, 100);
      }
   },

   resizeHandler() {

      let boxDivHeight = '500px',
         skillsHeight = '420px';

      if( window.innerWidth <= 400 ) {
         boxDivHeight = '700px';
         skillsHeight = '280px';
      } else if( window.innerWidth <= 640 ) {
         boxDivHeight = '180px';
         skillsHeight = '280px';
      } else if( window.innerWidth <= 810 ) {
         boxDivHeight = '280px';
         skillsHeight = '280px';
      }

      this.setState( {
         boxDivHeight: boxDivHeight,
         skillsHeight: skillsHeight
      } );

   },

   componentDidMount() {
      window.addEventListener('resize', this.resizeThrottler, false);
   },

   componentWillUnmount() {
      window.removeEventListener('resize', this.resizeThrottler);
   },

   render() {

      return (
         <div className="app" >
            <Loader />
            <Nav />
            <ParallaxDiv name='title' path='img/me.png' title={ title } height='100vh' />
            <BoxesDiv name='page1' height={ this.state.boxDivHeight } />
            <ParallaxDiv name='page2' path='img/code.png' title="Skills" height={ this.state.skillsHeight } >
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
