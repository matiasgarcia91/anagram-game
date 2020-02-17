import React, { Component } from "react";
import { connect } from "react-redux";
import { joinRoom } from "../store/gameRooms/actions";
import { List, ListItem, Button, ListItemText } from "@material-ui/core";

import NewRoomForm from "./NewRoomForm";

class LobbyPage extends Component {
  joinRoom = id => {
    this.props.joinRoom(id);
  };

  render() {
    const renderRooms = this.props.gameRooms.map(room => (
      <ListItem
        style={{
          backgroundColor: "#cdc7c0",
          border: "1px solid black",
          borderRadius: "2px",
          marginTop: "5px",
          marginBottom: "5px"
        }}
      >
        <ListItemText>{room.name}</ListItemText>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => this.joinRoom(room.id)}
        >
          Join
        </Button>
      </ListItem>
    ));
    return (
      <div
        style={{
          display: "flex",
          alignItems: "space-between",
          marginRight: "20px",
          marginLeft: "20px",
          width: "100%"
        }}
      >
        <div style={{ flex: 1 }}>
          <h2>Rooms</h2>
          <List>{renderRooms}</List>
        </div>
        <div style={{ flex: 1 }}>
          <NewRoomForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("reduxState", state);
  return {
    gameRooms: state.gameRooms.allRooms
  };
};

export default connect(mapStateToProps, { joinRoom })(LobbyPage);
