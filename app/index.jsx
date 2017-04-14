const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const App = require( './components/App.jsx' );

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

ReactDOM.render( < App / > , document.getElementById( 'app' ) );
