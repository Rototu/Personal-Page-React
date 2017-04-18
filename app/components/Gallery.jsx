const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const GalleryNav = React.createClass( {

   getInitialState() {
      return {

      };
   },

   render() {


      const style = {

      };

      return <div style={ style } />;

   }

} );

const Achievment = React.createClass( {

   getInitialState() {
      return {

      };
   },

   render() {


      const style = {
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         backgroundImage: `url("${this.props.imgSrc}")`,
         backgroundPosition: 'center',
         backgroundSize: 'cover'
      };

      const innerStyle = {
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(255, 255, 255, 0.8)',
         color: 'black'
      };

      return (
         <div style={ style } >
            <div style= {innerStyle} >
            </div>
         </div>
      );

   }

} );

const Gallery = React.createClass( {

   getInitialState() {
      return {
         achievment: 0
      };
   },

   render() {

      const style = {
         position: 'relative',
         width: '100%',
         height: '100vh',
         backgroundColor: 'white'
      };

      const achievmentDetails = [
         {
            title: 'First Place at the National Physics Olympiad in 2014',
            path: 'img/phys.jpg'
         }, {
            title: 'Golden Medal at the International Conference of Young Scientists in 2016, Physics section',
            path: 'img/icys.jpg'
         }, {
            title: `Accepted as an undergraduate student at Oxford Univeristy,
            St Anne's College for the "Computer Science and Phylosophy" course`,
            path: 'img/anne.jpg'
         }, {
            title: 'Second place at the "Creators of the Future" / "Creatori de viitor" entrepreneurship contest in 2016',
            path: 'img/ano.jpg'
         }, {
            title: 'Member of the team behind "The Experiment Factory" / "Fabrica de Experimente"',
            path: 'img/fabrica.jpg'
         }, {
            title: 'Participating at the International MATh.en.JEANS 2017 conference in Marseille and Cluj-Napoca',
            path: 'img/matlan.jpg'
         }, {
            title: 'Four websites built from scratch',
            path: 'img/websites.png'
         }
      ];

      const Achievments = [];
      for( let i = 0; i < 7; i++ ) {
         Achievments.push( <Achievment key={ i } id={ i }
            imgSrc={ achievmentDetails[i].path } title={ achievmentDetails[i].title } /> );
      }

      return (
         <div style={ style } >
            { Achievments }
         </div>
      );

   }

} );

module.exports = Gallery;
