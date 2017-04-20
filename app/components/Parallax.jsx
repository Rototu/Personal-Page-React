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
         height: this.props.height,
         backgroundImage: 'url("' + this.props.path + '")'
      };

      const title = (
         <span className="parallax-div-text" dangerouslySetInnerHTML={ { __html: this.state.content } } >
         </span>
      );

      return (
         <div className="parallax-div" style={ style } >
            { this.props.name === 'title' && title }
            { this.props.children }
         </div>
      );

   }

} );

module.exports = ParallaxDiv;
