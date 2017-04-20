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
      title: 'Second place at the "Creatori de viitor" entrepreneurship team contest in 2016',
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
         backgroundColor: 'black'
      }

      if( this.props.id === this.props.displayId ) {
         style.backgroundColor = 'white';
         style.border = 'solid black 2px';
      }

      return (
            <div className="button" style={ style } onClick= { this.props.clickHandler.bind( null, this.props.id ) }/>
      );

   }

} );

const GalleryNav = React.createClass( {

   render() {

      const Buttons = [];
      for( let i = 0; i < 7; i++ ) {
         Buttons.push( <Button displayId={ this.props.displayId }
            id={ i } key={ i } clickHandler={ this.props.clickHandler } /> )
      }

      return (
            <div className="gallery-nav" >
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
         left: `${ ( this.props.id - this.props.displayId ) * 100 }%`,
         backgroundImage: `url("${ this.props.imgSrc }")`
      };

      return (
         <div className="achievment" style={ style } >
            <div className="achievment-inner" >
               <p className="achievment-inner-text" >
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

      const Achievments = [];
      for( let i = 0; i < 7; i++ ) {
         Achievments.push( <Achievment key={ i } id={ i } displayId={ this.state.achievment }
            imgSrc={ achievmentDetails[i].path } title={ achievmentDetails[i].title } /> );
      }

      return (
         <div className="gallery" >
            { Achievments }
            <GalleryNav displayId={ this.state.achievment } clickHandler={ this.clickHandler }/>
         </div>
      );

   }

} );

module.exports = Gallery;
