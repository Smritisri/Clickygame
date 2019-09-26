import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/navbar";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends: friends,
    num: []
  };
  handleclick = id => {
    // console.log(id);
    let isInAraay = this.state.num.indexOf(id);
    // console.log(isInAraay);
    if (isInAraay < 0) {
      let num = [...this.state.num,id]
      this.setState({num:num})
    } else {
      console.log("you lost");
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => {
          return (
            <FriendCard
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              click={this.handleclick}
              id={friend.id}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default App;
