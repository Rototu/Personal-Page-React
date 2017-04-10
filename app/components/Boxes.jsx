const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const Box = React.createClass( {

   getInitialState() {
      return {
         size: 100
      };
   },

   mouseEnterHandler(e) {
      this.setState( {
         size: 120
      } );
   },

   mouseLeaveHandler(e) {
      this.setState( {
         size: 100
      } );
   },

   render() {

      const style = {
         width: '27vw',
         height: '27vw',
         minWidth: 300,
         minHeight: 300,
         backgroundColor: 'black',
         marginLeft: '3vw',
         marginTop: 'calc(50vh - 13.5vw)',
         backgroundImage: 'url("' + this.props.path + '")',
         backgroundPosition: 'center',
         backgroundSize: this.state.size + '%' + this.state.size + '%',
         transition: 'all 0.3s'
      };

      return (
         <div style={ style } onMouseEnter={ this.mouseEnterHandler } onMouseLeave={ this.mouseLeaveHandler } >
         </div>
      );

   }

} );

const Section = React.createClass( {

   render() {

      const style = {
         width: '33vw',
         height: '100vh',
         float: 'left',
         position: 'relative',
         marginTop: 0,
         marginLeft: 0,
         backgroundColor: 'white'
      };

      return (
         <div style={ style } >
            <Box path = '../img/wheel.jpg' />
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

      return (
         <div style={ style } >
            <Section />
            <Section />
            <Section />
         </div>
      );

   }

} );

module.exports = SectionDiv;
