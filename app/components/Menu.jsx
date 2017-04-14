const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const NavButton = React.createClass( {

   getInitialState() {
      return {
         txtColor: 'rgb(105, 105, 105)'
      };
   },

   mouseEnterHandler( e ) {
      clr = this.props.hColor;
      this.setState( {
         txtColor: 'rgb(' + clr + ', ' + clr + ', ' + clr + ')'
      } );
   },

   mouseLeaveHandler( e ) {
      this.setState( {
         txtColor: 'rgb(105, 105, 105)'
      } );
   },

   render() {

      const style = {
         fontSize: 24,
         textAlign: 'center',
         display: 'inline-block',
         padding: '0 20px',
         fontWeight: 400,
         height: 40,
         lineHeight: '40px',
         fontFamily: '"Lucida Console", Monaco, monospace',
         transition: 'all 0.15s',
         color: this.state.txtColor,
         cursor: 'pointer'
      };

      return (
         <div onMouseEnter={ this.mouseEnterHandler } onMouseLeave={ this.mouseLeaveHandler } style={ style } >
            { this.props.name }
         </div>
      );

   }

} );

const Nav = React.createClass( {

   getInitialState() {
      return {
         top: 0,
         color: 0,
         highlightColor: 255
      };
   },

   handleScroll( e ) {
      // if( e.pageY >= window.innerHeight + 10 ) {
      //    this.setState( {
      //       top: window.innerHeight - e.pageY + 10,
      //    } );
      // } else if( e.pageY >= window.innerHeight ) {
      //    this.setState( {
      //       top: 0,
      //       color: 255,
      //       highlightColor: 0
      //    } );
      // } else if( e.pageY >= window.innerHeight - 40 ) {
      //    this.setState( {
      //       color: 255 * ( 1 - Math.max( ( window.innerHeight - e.pageY) / 40, 0 ) ),
      //       highlightColor: 255 * ( window.innerHeight - e.pageY ) / 40
      //    } );
      // } else {
      //    this.setState( {
      //       top: 0,
      //       color: 0,
      //       highlightColor: 255
      //    } );
      // }
   },

   componentDidMount() {
      window.addEventListener( 'scroll', this.handleScroll );
   },

   componentWillUnmount() {
      window.removeEventListener( 'scroll', this.handleScroll );
   },

   render() {

      const clr = this.state.color;
      const bgColor = 'rgb(' + clr + ', ' + clr + ', ' + clr + ')';

      const style = {
         backgroundColor: bgColor,
         width: '100%',
         height: 40,
         cursor: 'default',
         position: 'fixed',
         top: this.state.top,
         left: 0,
         textAlign: 'center',
         zIndex: 80
      };

      return (
         <div style={ style } >
            <NavButton name='Home' hColor={ this.state.highlightColor } />
            <NavButton name='About Me' hColor={ this.state.highlightColor } />
            <NavButton name='Skills' hColor={ this.state.highlightColor } />
            <NavButton name='Achievments' hColor={ this.state.highlightColor } />
            <NavButton name='Contact' hColor={ this.state.highlightColor } />
         </div>
      );

   }

} );

module.exports = Nav;
