import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    name: "",
    description: "",
    libraries: "",
    isGoing: false,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        description: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        libraries: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isGoing: e.target.checked,
      });
    } else {
      console.log(e.target.type);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name: </label>
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>description</label>
          <br />
          <textarea
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <select
            name="libraries"
            value={this.state.libraries}
            onChange={this.handleChange}
          >
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <br />
        <div>
          <label>
            Is Going <br />
            <input
              type="checkbox"
              checked={this.state.isGoing}
              name="isGoing"
              onChange={this.handleChange}
              value={this.state.isGoing}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    );
  }
}
