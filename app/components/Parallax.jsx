const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

let title = `EMANUEL FARAUANU <br/> Programmer & Volunteer`;

const ParallaxDiv = React.createClass( {

   getInitialState() {
      return {
         posTop: 0,
         content: this.props.title
      };
   },

   handleScroll( e ) {
      // const domNode = ReactDOM.findDOMNode( this );
      // const elementTop = domNode.getBoundingClientRect().top;
      // let bgY = 0;
      // if( elementTop <= window.innerHeight ) {
      //    bgY = - elementTop;
      // }
      // this.setState( {
      //    posTop: bgY
      // } );
   },

   componentDidMount() {

      // window.addEventListener( 'scroll', this.handleScroll );
      // this.handleScroll();

      if( this.props.name === 'title' ) {

         this.setState( {
            content: ''
         } );

         const self = this;
         setTimeout( () => {
            window.writeTitle = setInterval( () => {
               let text = '';
               if( title[ 0 ] != '<' ) {
                  text = self.state.content + title[ 0 ];
                  title = title.slice( 1 );
                  if( title.length === 0 ) {
                     clearInterval( window.writeTitle );
                  }
               } else {
                  text = self.state.content + '<br/>';
                  title = title.slice( 5 );
               }
               self.setState( {
                  content: text
               } );
            }, 110 );
         }, 6000);

      }

   },

   componentWillUnmount() {
      // window.removeEventListener( 'scroll', this.handleScroll );
   },

   render() {

      const style = {
         width: '100%',
         height: this.props.height,
         backgroundColor: 'black',
         backgroundImage: 'url("' + this.props.path + '")',
         backgroundPosition: '100% 50%',
         backgroundSize: 'auto 100%',
         backgroundRepeat: 'no-repeat',
         backgroundAttachment: 'fixed',
         color: 'white'
      };

      const spanStyle = {
         lineHeight: '30px',
         fontSize: '28px',
         width: '100%',
         fontFamily: '"Lucida Console", Monaco, monospace',
         fontWeight: 100,
         textAlign: 'center',
         display: 'inline-block',
         marginTop: '50vh',
         transform: 'translateY(-50%)'
      };

      return (
         <div style={ style } >
            <span style={ spanStyle } dangerouslySetInnerHTML={ { __html: this.state.content } } >
            </span>
         </div>
      );

   }

} );

module.exports = ParallaxDiv;
