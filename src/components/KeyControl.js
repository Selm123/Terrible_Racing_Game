import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";



class KeyControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: "20vw",
      top: "60vh",
      carWidth: "560px",
      carHeight: "220px",
    };
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  componentDidMount() {
    // const event = new KeyboardEvent('keypress', {
    //     key: 'ArrowDown',
    // });
    // setInterval(() => {
    //     event.repeat;
    // }, 1000);
    $(window).on("keydown", (e) => {
      //   console.log(e.key);
      if (e.key === "ArrowRight") {
        this.setState({
          left: `${
            this.state.left
              .split("")
              .slice(0, this.state.left.length - 2)
              .join("") -
            0 +
            1
          }vw`,
        });
        // console.log("move right");
      }
      if (e.key === "ArrowLeft") {
        this.setState({
          left: `${
            this.state.left
              .split("")
              .slice(0, this.state.left.length - 2)
              .join("") -
            0 -
            1
          }vw`,
        });
        // console.log("move left");
      }
      if (e.key === "ArrowUp") {
        this.setState({
          top: `${
            this.state.top
              .split("")
              .slice(0, this.state.top.length - 2)
              .join("") -
            0 -
            1
          }vh`,
        });
        console.log($("#car").position().left);
        if ($("#car").position().left < 560) {
          this.setState({
            left: `${
              this.state.left
                .split("")
                .slice(0, this.state.left.length - 2)
                .join("") -
              0 +
              1
            }vw`,
          });
        }
        if ($("#car").position().left > 560) {
          console.log($("#car").position().left);
          this.setState({
            left: `${
              this.state.left
                .split("")
                .slice(0, this.state.left.length - 2)
                .join("") -
              0 -
              1
            }vw`,
          });
        }

        this.setState({
          carWidth: `${
            this.state.carWidth
              .split("")
              .slice(0, this.state.carWidth.length - 2)
              .join("") -
            0 -
            5
          }px`,
        });
        this.setState({
          carHeight: `${
            this.state.carHeight
              .split("")
              .slice(0, this.state.carHeight.length - 2)
              .join("") -
            0 -
            5
          }px`,
        });
        // console.log("move up");
      }
      if (e.key === "ArrowDown") {
        this.setState({
          top: `${
            this.state.top
              .split("")
              .slice(0, this.state.top.length - 2)
              .join("") -
            0 +
            1
          }vh`,
        });
        console.log($("#car").position().left);
        if ($("#car").position().left < 560) {
          this.setState({
            left: `${
              this.state.left
                .split("")
                .slice(0, this.state.left.length - 2)
                .join("") -
              0 -
              1
            }vw`,
          });
        }
        if ($("#car").position().left > 560) {
          this.setState({
            left: `${
              this.state.left
                .split("")
                .slice(0, this.state.left.length - 2)
                .join("") -
              0 +
              1
            }vw`,
          });
        }
        this.setState({
          carWidth: `${
            this.state.carWidth
              .split("")
              .slice(0, this.state.carWidth.length - 2)
              .join("") -
            0 +
            5
          }px`,
        });
        this.setState({
          carHeight: `${
            this.state.carHeight
              .split("")
              .slice(0, this.state.carHeight.length - 2)
              .join("") -
            0 +
            5
          }px`,
        });
        // console.log("move down");
      }
      $("#car").css("left", this.state.left);
      $("#car").css("top", this.state.top);
      $("#car").css("width", this.state.carWidth);
      $("#car").css("height", this.state.carHeight);
    });
    
    // $("button").on("click", () => {
    //   console.log("clicked");
    //   console.log($("#car").position());
    //   $("#hi").text("123");
    //   $("#car").text("carrrr");
    //   this.setState({ left: this.state.left + 100 });
    //   $("#car").css("left", this.state.left);
    // });
  }

  render() {
    return (
      <div className="container">
        <button id="car" />
        <button id='enemy'/>
      </div>
    );
  }
}

export default KeyControl;
