const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const SectionDivBoxes = require( './Boxes.jsx' );
const Loader = require( './Loader.jsx' );

let title = `EMANUEL FARAUANU <br/> Programmer & Volunteer`;

const ContentBox = React.createClass( {

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
         </div>
      );

   }

} );

const ParallaxDiv = React.createClass( {

   getInitialState() {
      return {
         posTop: 0,
         content: this.props.title
      };
   },

   handleScroll( e ) {
      const domNode = ReactDOM.findDOMNode( this );
      const elementTop = domNode.getBoundingClientRect().top;
      let bgY = 0;
      if( elementTop <= window.innerHeight ) {
         bgY = - ( window.innerHeight - elementTop ) * 0.1;
      }
      this.setState( {
         posTop: bgY
      } );
   },

   componentDidMount() {

      window.addEventListener( 'scroll', this.handleScroll );
      this.handleScroll();

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
         }, 7700);

      }

   },

   componentWillUnmount() {
      window.removeEventListener( 'scroll', this.handleScroll );
   },

   render() {

      const style = {
         width: '100%',
         height: this.props.height,
         backgroundColor: 'black',
         backgroundImage: 'url("' + this.props.path + '")',
         backgroundPosition: '0px ' + this.state.posTop + 'px',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
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
         color: this.state.txtColor
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
      if( e.pageY >= window.innerHeight + 10 ) {
         this.setState( {
            top: window.innerHeight - e.pageY + 10,
         } );
      } else if( e.pageY >= window.innerHeight ) {
         this.setState( {
            top: 0,
            color: 255,
            highlightColor: 0
         } );
      } else if( e.pageY >= window.innerHeight - 40 ) {
         this.setState( {
            color: 255 * ( 1 - Math.max( ( window.innerHeight - e.pageY) / 40, 0 ) ),
            highlightColor: 255 * ( window.innerHeight - e.pageY ) / 40
         } );
      } else {
         this.setState( {
            top: 0,
            color: 0,
            highlightColor: 255
         } );
      }
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

const App = React.createClass( {

   render() {

      const style = {
         margin: 0,
         width: '100%',
         fontFamily: '"Lucida Console", Monaco, monospace'
      };

      return (
         <div style={ style } >
            <Loader />
            <Nav />
            <ParallaxDiv name='title' path='../img/me.png' title={ title } height='100vh' />
            <SectionDivBoxes name='page1' height='100vh' >
            </SectionDivBoxes>
            <ParallaxDiv name='page2' path='../img/me.png' title="Example" height='100vh' />
         </div>
      );
   }

} );

module.exports = App;

// ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
