import React, { Component } from "react";

let styles = {
  cliText: {
    color: "#7CFC00	",
    fontWeight: 300,
    fontSize: 26,
    padding: "0.5em",
  },
};

export default class CLI extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.INIT = this.INIT.bind(this);
    this.LOAD = this.LOAD.bind(this);
    this.LOADINGBAR = this.LOADINGBAR.bind(this);
    this.state = {
      text: "Initializing...",
      loading: "",
      loadingBar: "              ",
      counter: 0,
    };
    this.INIT();
    this.LOAD();
    this.LOADINGBAR();
  }

  INIT() {
    //

    let flickerInterval = setInterval(() => {
      if (this.state.text.endsWith("█")) {
        this.setState({
          text: this.state.text.slice(0, this.state.text.length - 1),
        });
      } else {
        this.setState({ text: this.state.text + "█" });
      }
      this.setState({ counter: this.state.counter + 1 });
      if (this.state.counter == this.props.flickerCount) {
        clearInterval(flickerInterval);
        this.setState({ counter: 0 });
      }
    }, this.props.flickerTimer); //FLICKER TIMER
  }

  LOAD() {
    let flickerTimeout = setTimeout(() => {
      this.setState({
        text: "System Initialized.",
        loading: this.state.loading + "\n\nC\\:>",
      });

      let loadArray = ("LD " + this.props.module).split("");

      setTimeout(() => {
        let index = 0;
        let loadText = setInterval(() => {
          if (!this.state.loading.endsWith("█")) {
            this.setState({ loading: this.state.loading + loadArray[index++] });
          }
          if (index == loadArray.length) {
            clearInterval(loadText);
          }
        }, this.props.typingSpeed);
      }, this.props.flickerTimer); // FLICKER TIMER
      let flickerTimeout = setTimeout(() => {
        let flickerInterval = setInterval(() => {
          // Continue Here, flicker issue
          if (this.state.loading.endsWith("█")) {
            this.setState({
              loading: this.state.loading.slice(
                0,
                this.state.loading.length - 1
              ),
            });
          } else {
            this.setState({ loading: this.state.loading + "█" });
          }
          this.setState({ counter: this.state.counter + 1 });
          if (this.state.counter == this.props.flickerCount) {
            clearInterval(flickerInterval);
            this.setState({ counter: 0 });
          }
        }, this.props.flickerTimer); //FLICKER TIMER
      }, this.props.typingSpeed * loadArray.length + this.props.flickerTextDelay); //ARRAY LENGTH
    }, this.props.initTime);
  }

  LOADINGBAR() {
    setTimeout(() => {
      let LDbar = setInterval(() => {
        if (this.state.loadingBar.endsWith("█")) {
          clearInterval(LDbar);
          this.setState({ loadingBar: "OK" });
          setTimeout(() => {
            this.setState({ loadingBar: "BOOTING" });
            let runSystem = setInterval(() => {
              if (this.state.loadingBar.length == 9) {
                clearInterval(runSystem);
                setTimeout(() => {
                  this.setState({
                    text: "",
                    loading: "",
                    loadingBar: "",
                    counter: 0,
                  });
                }, 200);
              }
              this.setState({ loadingBar: this.state.loadingBar + "." });
            }, 300);
          }, 1500);
        }
        this.setState({ loadingBar: this.state.loadingBar.replace(" ", "█") });
      }, this.props.loadingTime);
    }, this.props.initTime + this.props.flickerCount * this.props.flickerTimer + this.props.flickerTextDelay + this.props.typingSpeed * ("LD".length + this.props.module.length));
  }

  render() {
    return (
      <div>
        <p style={styles.cliText}>{this.state.text}</p>
        <p style={styles.cliText}>{this.state.loading}</p>
        <p style={styles.cliText}>{this.state.loadingBar}</p>
      </div>
    );
  }
}
