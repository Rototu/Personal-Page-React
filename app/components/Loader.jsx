const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const loadIntervalTime = 0.6 // seconds

const Loader = React.createClass( {

   getInitialState() {
      return {
         highlight: 'left'
      };
   },

   componentDidMount() {
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

   render() {

      return (
         <div className="loader" >
            <LeftBrace highlight={this.state.highlight} />
            <RightBrace highlight={this.state.highlight} />
         </div>
      );

   }

} );

const LeftBrace = React.createClass( {

   render() {

      let opacity = 0.4;
      if( this.props.highlight === 'left' ) {
         opacity = 1;
      } else if ( this.props.highlight === 'none' ) {
         opacity = 0;
      }

      const style = {
         opacity: opacity,
         transition: 'all ' + loadIntervalTime + 's'
      };

      return (
         <div className="brace" style={ style } >
            { '{' }
         < /div>
      );

   }

} );

const RightBrace = React.createClass( {

   render() {

      let opacity = 0.4;
      if( this.props.highlight === 'right' ) {
         opacity = 1;
      } else if ( this.props.highlight === 'none' ) {
         opacity = 0;
      }

      const style = {
         opacity: opacity,
         transition: 'all ' + loadIntervalTime + 's'
      };

      return (
         <div className="brace" style={ style } >
            { '}' }
         < /div>
      );

   }

} );

const LoaderScreen = React.createClass( {

   getInitialState() {
      return( {
         opacity: 1,
         display: 'block'
      } );
   },

   componentDidMount() {
      setTimeout( () => {

         this.setState( {
            opacity: 0
         } );

         setTimeout( () => {
            this.setState( {
               display: 'none'
            } );
         }, 1600);

      }, loadIntervalTime * 7000);
   },

   render() {

      const style = {
         opacity: this.state.opacity,
         display: this.state.display
      };

      return (
         <div className="loader-screen" style={ style } >
            < Loader / >
         < /div>
      );

   }

} );


module.exports = LoaderScreen;
