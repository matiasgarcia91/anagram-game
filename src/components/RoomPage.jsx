import React, { Component } from "react";
import { connect } from "react-redux";

class RoomPage extends Component {
  render() {
    const room = this.props.room;
    return (
      <div>
        <h2>Welcome to Game Room: {room.name}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { allRooms, activeRoom } = state.gameRooms;
  const fullRoom = allRooms.find(room => room.id === activeRoom);
  return {
    room: fullRoom
  };
};

export default connect(mapStateToProps)(RoomPage);
