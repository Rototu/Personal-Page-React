const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const loadIntervalTime = 0.6 // seconds

const Loader = React.createClass( {

   getInitialState: function () {
      return {
         highlight: 'left'
      };
   },

   componentDidMount: function () {
      const self = this;
      window.loadingInterval = setInterval( () => {
         if ( this.state.highlight === 'left' ) {
            this.setState( { highlight: 'right' } );
         } else {
            this.setState( { highlight: 'left' } );
         }
      }, loadIntervalTime * 1000 );
      setTimeout( () => {
         clearInterval( window.loadingInterval );
         this.setState( { highlight: 'none' } );
      }, 3000);
   },

   render: function () {

      const loaderStyle = {
         width: 200,
         height: 200,
         top: 'calc(50vh - 100px)',
         left: 'calc(50vw - 100px)',
         position: 'absolute',
         fontSize: 100,
         fontFamily: 'Courier New'
      };

      return (
         <div style = { loaderStyle } >
            <LeftBrace highlight={this.state.highlight} />
            <RightBrace highlight={this.state.highlight} />
         </div>
      );

   }

} );

const LeftBrace = React.createClass( {

   render: function () {

      let opacity = 0.4;
      if( this.props.highlight === 'left' ) {
         opacity = 1;
      } else if ( this.props.highlight === 'none' ) {
         opacity = 0;
      }

      const leftBraceStyle = {
         width: 100,
         lineHeight: '200px',
         textAlign: 'center',
         color: 'white',
         float: 'left',
         opacity: opacity,
         transition: 'all ' + loadIntervalTime + 's'
      };

      return <div style = { leftBraceStyle } > { '{' } < /div>;

   }

} );

const RightBrace = React.createClass( {

   render: function () {

      let opacity = 0.4;
      if( this.props.highlight === 'right' ) {
         opacity = 1;
      } else if ( this.props.highlight === 'none' ) {
         opacity = 0;
      }

      const rightBraceStyle = {
         width: 100,
         lineHeight: '200px',
         textAlign: 'center',
         color: 'white',
         float: 'left',
         opacity: opacity,
         transition: 'all ' + loadIntervalTime + 's'
      };

      return <div style = { rightBraceStyle } > { '}' } < /div>;

   }

} );

const App = React.createClass( {

   getInitialState: function () {
      return( {
         opacity: 1,
         display: 'block'
      } );
   },

   componentDidMount: function () {
      setTimeout( () => {

         this.setState( {
            opacity: 0
         } );

         setTimeout( () => {
            this.setState( {
               display: 'none'
            } );
         }, 3100);

      }, loadIntervalTime * 7000);
   },

   render: function () {

      const screenStyle = {
         width: '100%',
         height: '100vh',
         backgroundColor: 'black',
         position: 'fixed',
         zIndex: 100,
         opacity: this.state.opacity,
         transition: 'opacity 3s',
         display: this.state.display
      };

      return <div style = { screenStyle } > < Loader / > < /div>;

   }

} );


module.exports = App;
