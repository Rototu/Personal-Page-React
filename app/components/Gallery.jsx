const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

const achievmentDetails = [
   {
      title: 'First Place at the National Physics Olympiad in 2014',
      path: 'img/phys.jpg'
   }, {
      title: 'Golden Medal at the International Conference of Young Scientists in 2016, Physics section',
      path: 'img/icys.jpg'
   }, {
      title: `Studying Computer Science and Phylosophy at St Anne's College, Oxford`,
      path: 'img/anne.jpg'
   }, {
      title: 'Second place at the "Creatori de viitor" entrepreneurship contest in 2016',
      path: 'img/ano.jpg'
   }, {
      title: 'Member of the team behind "Fabrica de Experimente"',
      path: 'img/fabrica.jpg'
   }, {
      title: 'Participating at the international MATh.en.JEANS 2017 conference in Marseille and Cluj-Napoca',
      path: 'img/matlan.jpg'
   }, {
      title: 'Multiple websites built from scratch',
      path: 'img/websites.png'
   }
];

const Button = React.createClass( {

   render() {

      const style = {
         height: 10,
         width: 10,
         backgroundColor: 'black',
         boxSizing: 'border-box',
         borderRadius: 5,
         margin: '0 20px',
         display: 'inline-block',
         cursor: 'pointer'
      }

      console.log(this.props.id, this.props.displayId);

      if( this.props.id === this.props.displayId ) {
         style.backgroundColor = 'white';
         style.border = 'solid black 2px';
      }

      return (
            <div style={ style } onClick= { this.props.clickHandler.bind( null, this.props.id ) }/>
      );

   }

} );

const GalleryNav = React.createClass( {

   render() {


      const style = {
         height: 20,
         width: '100%',
         zIndex: 2,
         position: 'absolute',
         bottom: 20,
         left: 0,
         textAlign: 'center'
      };

      const Buttons = [];
      for( let i = 0; i < 7; i++ ) {
         Buttons.push( <Button displayId={ this.props.displayId }
            id={ i } key={ i } clickHandler={ this.props.clickHandler } /> )
      }

      return (
            <div style={ style } >
               { Buttons }
            </div>
      );

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
         left: `${ ( this.props.id - this.props.displayId ) * 100 }%`,
         width: '100%',
         height: '100%',
         backgroundImage: `url("${ this.props.imgSrc }")`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         transition: 'left 1s'
      };

      const innerStyle = {
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(255, 255, 255, 0.8)',
         color: 'black',
         position: 'relative',
         margin: 0
      };

      const textStyle = {
         position: 'absolute',
         fontSize: 30,
         lineHeight: '30px',
         color: 'black',
         textAlign: 'center',
         width: '100%',
         padding: '0 10%',
         left: '0',
         top: '50%',
         transform: 'translateY(-50%)',
         boxSizing: 'border-box'
      };

      return (
         <div style={ style } >
            <div style={ innerStyle } >
               <p style={ textStyle } >
                  { this.props.title }
               </p>
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

   clickHandler( data, e ) {
      this.setState( {
         achievment: data
      } );
   },

   render() {

      const style = {
         position: 'relative',
         width: '100%',
         height: '100vh',
         backgroundColor: 'white',
         overflow: 'hidden'
      };

      const Achievments = [];
      for( let i = 0; i < 7; i++ ) {
         Achievments.push( <Achievment key={ i } id={ i } displayId={ this.state.achievment }
            imgSrc={ achievmentDetails[i].path } title={ achievmentDetails[i].title } /> );
      }

      return (
         <div style={ style } >
            { Achievments }
            <GalleryNav displayId={ this.state.achievment } clickHandler={ this.clickHandler }/>
         </div>
      );

   }

} );

module.exports = Gallery;
