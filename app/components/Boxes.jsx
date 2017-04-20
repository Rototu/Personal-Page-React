const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const Box = React.createClass( {

   getInitialState() {
      return {
         size: 100,
         opacity: 0,
         bottom: '-21vw'
      };
   },

   mouseEnterHandler(e) {
      this.setState( {
         size: 120,
         opacity: 1,
         bottom: 0
      } );
   },

   mouseLeaveHandler(e) {
      this.setState( {
         size: 100,
         opacity: 0,
         bottom: '-21vw'
      } );
   },

   render() {

      const style = {
         backgroundImage: 'url("' + this.props.path + '")',
         backgroundSize: this.state.size + '%' + this.state.size + '%'
      };

      const innerStyle = {
         opacity: this.state.opacity
      };

      const textStyle = {
         bottom: this.state.bottom
      }

      return (
         <div className="box" style={ style } onMouseEnter={ this.mouseEnterHandler } onMouseLeave={ this.mouseLeaveHandler } >
            <div className="box-inner" style={ innerStyle } >
               <div className="box-inner-text" style={ textStyle } >
                  { this.props.text }
               </div>
            </div>
         </div>
      );

   }

} );

const Section = React.createClass( {

   render() {

      return (
         <div className="section" >
            <Box path={ this.props.path } text={ this.props.text } />
         </div>
      );

   }

} );

const SectionDiv = React.createClass( {

   render() {

      const style = {
         height: this.props.height
      };

      const path1 = 'img/js-men.png',
         path2 = 'img/Volunteer.png',
         path3 = 'img/philosoraptor.png';
      const text1 = `I am a JavaScript enthusiast, trying to build all my projects
         with the minimal amount of external libraries, preferring to write as much code as
         possible on my own.`;
      const text2 = `Physics, Mathematics, Programming and Arts
      are my main subjects of interest. Now I'm an undergraduate student at St. Anne's College
      in Oxford, studying Computer Science and Philosophy.`;
      const text3 = `I like spending my free time being in the middle of nature or
         volunteering for projects that have a positive impact on society through
         education or culture.`;

      return (
         <div className="section-div" style={ style } >
            <Section path={ path1 } text={ text1 } />
            <Section path={ path2 } text={ text2 } />
            <Section path={ path3 } text={ text3 } />
         </div>
      );

   }

} );

module.exports = SectionDiv;
