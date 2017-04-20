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

   clickHandler( e ) {

      const h = window.innerHeight;

      let scrollPositions = [];
      if( window.innerWidth <= 400 ) {
         scrollPositions = [ 0, h, h+700, h+980, h+1380 ]
      } else if( window.innerWidth <= 640 ) {
         scrollPositions = [ 0, h, h+180, h+460, h+860 ];
      } else if( window.innerWidth <= 810 ) {
         scrollPositions = [ 0, h, h+280, h+560, h+960 ];
      } else {
         scrollPositions = [ 0, h, h+500, h+920, h+1320 ];
      }

      const scrollToPos = scrollPositions[ this.props.id ];
      const totalScrollValue = Math.abs( window.scrollY - scrollToPos );

      const animateScrollStep = ( timestamp ) => {

         const currScrollPos = window.scrollY;
         const scrollValue = Math.abs( currScrollPos - scrollToPos );
         const coefficient = Math.abs( 1 - 2 * scrollValue / totalScrollValue );
         const scrollCoefficient = Math.min( 0.9, coefficient );
         const scrollAcceleration = Math.cos( scrollCoefficient * Math.PI / 2 );
         const scrollAmount = 20 * scrollAcceleration;

         console.log(scrollCoefficient);

         if( scrollValue >= 10 ) {

            if( currScrollPos > scrollToPos ) {
               window.scrollTo( 0, currScrollPos - scrollAmount );
            } else {
               window.scrollTo( 0, currScrollPos + scrollAmount );
            }
            window.requestAnimationFrame( animateScrollStep );

         } else {

            window.scrollTo( 0, scrollToPos );

         }

      };

      window.requestAnimationFrame( animateScrollStep );

   },

   render() {

      const style = {
         color: this.state.txtColor
      };

      return (
         <div onClick={ this.clickHandler }
            onMouseEnter={ this.mouseEnterHandler }
            onMouseLeave={ this.mouseLeaveHandler }
            style={ style } className="nav-button" >

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
         top: this.state.top
      };

      return (
         <div className="nav" style={ style } >
            <NavButton id={ 0 } name='Home' hColor={ this.state.highlightColor } />
            <NavButton id={ 1 } name='About Me' hColor={ this.state.highlightColor } />
            <NavButton id={ 2 } name='Skills' hColor={ this.state.highlightColor } />
            <NavButton id={ 3 } name='Achievments' hColor={ this.state.highlightColor } />
            <NavButton id={ 4 } name='Contact' hColor={ this.state.highlightColor } />
         </div>
      );

   }

} );

module.exports = Nav;
