import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { createRoom } from "../store/gameRooms/actions";
import { connect } from "react-redux";

class NewRoomForm extends Component {
  state = {
    roomName: ""
  };

  createRoom = e => {
    e.preventDefault();
    this.props.createRoom(this.state.roomName);
  };

  handleChange = event => {
    this.setState({
      roomName: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h2>Create a new room</h2>
        <form
          noValidate
          onSubmit={this.createRoom}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextField
            onChange={this.handleChange}
            name='roomName'
            value={this.state.roomName}
            label='Room Name'
            variant='filled'
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            style={{
              marginLeft: "15px",
              width: "100px"
            }}
          >
            Create
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { createRoom })(NewRoomForm);
