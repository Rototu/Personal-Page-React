const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const Contact = React.createClass( {

   render() {

      const style = {
         width: '100%',
         textAlign: 'center',
         height: 50,
         marginTop: 135,
         position: 'relative'
      };

      const aStyle = {
         width: 50,
         height: 50,
         display: 'inline-block',
         margin: '0 20px'
      };

      const imgStyle = {
         width: '100%',
         height: '100%'
      }

      return (
         <div style={ style }>
            <a href="https://www.facebook.com/harrypotterCluj" target="_blank" style={ aStyle } >
               <img src="img/fb.png" style={ imgStyle } />
            </a>
            <a href="mailto:emanuel.farauanu@gmail.com?Subject=Contact%20Page" target="_blank" style={ aStyle } >
               <img src="img/mail.png" style={ imgStyle } />
            </a>
         </div>
      );
   }

} );

module.exports = Contact;
