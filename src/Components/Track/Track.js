import React from 'react';

import './Track.css';

class Track extends React.Component {
  constructor(props){
    super(props)
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }


  renderAction() {

  if (this.props.isRemoval) {

    return '-'

  } else {

    return '+'

  }

}
addTrack(event){
  this.props.onAdd(this.props.track);
}

removeTrack(event){
this.props.onRemove(this.props.track);
}

   render() {

     return(

       <div className="Track">

        <div className="Track-information">

          <h3>{this.props.tracks.name}</h3>

          <p>{this.props.tracks.artist} | {this.props.tracks.album} </p>

        </div>

        <a className="Track-action" onClick={this.romoveTrack}>-</a>
       <a className="Track-action" onClick={this.addTrack}>+</a>
      </div>

     )

   }

}

 export default Track;
