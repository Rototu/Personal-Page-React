const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const Contact = React.createClass( {

   render() {

      return (
         <div className="contact" >
            <a href="https://www.facebook.com/harrypotterCluj" target="_blank" >
               <img src="img/fb.png" />
            </a>
            <a href="mailto:emanuel.farauanu@gmail.com?Subject=Contact%20Page" target="_blank" >
               <img src="img/mail.png" />
            </a>
         </div>
      );
   }

} );

module.exports = Contact;
