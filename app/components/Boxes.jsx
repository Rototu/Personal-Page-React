const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const Box = React.createClass( {

   getInitialState() {
      return {
         size: 100,
         opacity: 0
      };
   },

   mouseEnterHandler(e) {
      this.setState( {
         size: 120,
         opacity: 1
      } );
   },

   mouseLeaveHandler(e) {
      this.setState( {
         size: 100,
         opacity: 0
      } );
   },

   render() {

      const style = {
         width: '21vw',
         height: '21vw',
         minWidth: 200,
         minHeight: 200,
         backgroundColor: 'black',
         marginLeft: '6vw',
         marginTop: 'calc(50vh - 10.5vw)',
         backgroundImage: 'url("' + this.props.path + '")',
         backgroundPosition: 'center',
         backgroundSize: this.state.size + '%' + this.state.size + '%',
         transition: 'all 0.3s',
         boxSizing: 'border-box',
         border: 'solid black 10px'
      };

      const innerStyle = {
         opacity: this.state.opacity,
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.95)',
         transition: 'opacity 0.3s',
         textAlign: 'center',
         position: 'relative'
      };

      const textStyle = {
         width: '100%',
         position: 'absolute',
         color: 'white',
         fontSize: 12,
         bottom: 0,
         left: 0,
         padding: 10,
         backgroundColor: 'black',
         boxSizing: 'border-box'
      }

      return (
         <div style={ style } onMouseEnter={ this.mouseEnterHandler } onMouseLeave={ this.mouseLeaveHandler } >
            <div style={ innerStyle } >
               <div style={ textStyle } >
                  { this.props.text }
               </div>
            </div>
         </div>
      );

   }

} );

const Section = React.createClass( {

   render() {

      const style = {
         width: '33%',
         height: '100vh',
         float: 'left',
         position: 'relative',
         marginTop: 0,
         marginLeft: 0,
         backgroundColor: 'white'
      };

      return (
         <div style={ style } >
            <Box path={ this.props.path } text={ this.props.text } />
         </div>
      );

   }

} );

const SectionDiv = React.createClass( {

   render() {

      const style = {
         width: '100%',
         height: this.props.height,
         backgroundColor: 'white',
         color: 'black',
         fontFamily: 'sans-serif',
         fontWeight: 100,
         textAlign: 'center',
         position: 'relative'
      };

      const path1 = '../img/js-men.png',
         path2 = '../img/Volunteer.png',
         path3 = '../img/philosoraptor.png';
      const text1 = `I am a JavaScript enthusiast, trying to build all my projects
         with the minimal amount of external libraries, prefering to write as much code as
         possible on my own.`;
      const text2 = `Since a very young age I've been trying to learn physics, mathematics and programming.
         Now I'm an undergraduate student at St. Anne's College in Oxford, studying Computer Science and
         Philosophy.`;
      const text3 = `In my free time I like spending my time by being in the middle of nature or
         volunteering for projects that have a positive impact for those around, especially those focusing
         on education.`;

      return (
         <div style={ style } >
            <Section path={ path1 } text={ text1 } />
            <Section path={ path2 } text={ text2 } />
            <Section path={ path3 } text={ text3 } />
         </div>
      );

   }

} );

module.exports = SectionDiv;
