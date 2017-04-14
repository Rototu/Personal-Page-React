const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const Bar = React.createClass( {

   getInitialState() {
      return {
         bgColor: 'rgb(80, 80, 80)',
         animated: false
      };
   },

   render() {

      if( !this.state.animated && this.props.id <= this.props.level ) {
         setTimeout( () => {
            this.setState( {
               bgColor: 'white',
               animated: true
            } );
         }, 1000 + this.props.id * 100);
      }

      const style = {
         display: 'inline-block',
         height: '50%',
         width: 2,
         backgroundColor: this.state.bgColor,
         borderRadius: 1,
         marginLeft: 2
      };

      return <div style={ style } />;

   }

} );

const Skill = React.createClass( {

   getInitialState() {
      return {
         animated: false,
         level: 0
      };
   },

   handleScroll( e ) {
      if( !this.state.animated ) {
         const domNode = ReactDOM.findDOMNode( this );
         const elementTop = domNode.getBoundingClientRect().top;
         if( elementTop <= window.innerHeight ) {
            this.setState( {
               animated: true,
               level: this.props.level
            } );
         }
      }
   },

   componentDidMount() {
      window.addEventListener( 'scroll', this.handleScroll );
      this.handleScroll();
   },

   componentWillUnmount() {
      window.removeEventListener( 'scroll', this.handleScroll );
   },

   render() {

      const style = {
         width: '20%',
         margin: '10px 2.5%',
         height: 60,
         float: 'left',
         textAlign: 'center'
      };

      const titleStyle = {
         display: 'inline-block',
         width: '100%',
         margin: '0 20px 0 0',
         lineHeight: '30px',
         fontSize: 20,
         fontWeight: '100',
         color: 'white',
         fontFamily: '"Lucida Console", Monaco, monospace',
      }

      const Bars = [];
      for( i = 1; i <= 40; i++ ) {
         Bars.push( <Bar key={ i } id={ i } level = { this.state.level } /> );
      }

      return (
         <div style={ style } >
            <span style={ titleStyle }>
               { this.props.title }
            </span>
            { Bars }
         </div>
      );

   }

} );

module.exports = Skill;
