import React, { Component } from "react";
import Countdown from "./countdown.component";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeGratitude = this.onChangeGratitude.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeTodo1 = this.onChangeTodo1.bind(this);
    this.onChangeTodo2 = this.onChangeTodo2.bind(this);
    this.onChangeTodo3 = this.onChangeTodo3.bind(this);
    this.onChangePomo1 = this.onChangePomo1.bind(this);
    this.onChangePomo2 = this.onChangePomo2.bind(this);
    this.onChangePomo3 = this.onChangePomo3.bind(this);
    this.onChangePomo4 = this.onChangePomo4.bind(this);
    this.onChangePomo5 = this.onChangePomo5.bind(this);    
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);


    this.state = {
      id: null,
      title: `${new Date().getFullYear()}-${(new Date().getMonth()+ 1)}-${new Date().getDate()}`,
      description: "", 
      published: false,
      gratitude: "", 
      priority: "",
      todo1: "",
      todo2: "",
      todo3: "",
      pomo1: false,
      pomo2: false,
      pomo3: false,
      pomo4: false,
      pomo5: false,

      submitted: false

    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeGratitude(e) {
    this.setState({
      gratitude: e.target.value
    });
  }

  onChangePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  onChangeTodo1(e) {
    this.setState({
      todo1: e.target.value
    });
  }

  onChangeTodo2(e) {
    this.setState({
      todo2: e.target.value
    });
  }

  onChangeTodo3(e) {
    this.setState({
      todo3: e.target.value
    });
  }


  onChangePomo1(e) {
    this.setState({
      pomo1: e.target.checked
    });
    console.log(e.target.checked)
}


  onChangePomo2(e) {
    this.setState({
      pomo2: e.target.checked
    });
  }

  onChangePomo3(e) {
    this.setState({
      pomo3: e.target.checked
    });
  }

  onChangePomo4(e) {
    this.setState({
      pomo4: e.target.checked
    });
  }

  onChangePomo5(e) {
    this.setState({
      pomo5: e.target.checked
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      gratitude: this.state.gratitude,
      priority: this.state.priority,
      todo1: this.state.todo1,
      todo2: this.state.todo2,
      todo3: this.state.todo3,
      pomo1: this.state.pomo1,
      pomo2: this.state.pomo2,
      pomo3: this.state.pomo3,
      pomo4: this.state.pomo4,
      pomo5: this.state.pomo5
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
          gratitude: response.data.gratitude,
          priority: response.data.priority,
          todo1: response.data.todo1,
          todo2: response.data.todo2,
          todo3: response.data.todo3,
          pomo1: response.data.pomo1,
          pomo2: response.data.pomo2,
          pomo3: response.data.pomo3,
          pomo4: response.data.pomo4,
          pomo5: response.data.pomo5,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,
      gratitude: "", 
      priority: "",
      todo1: "",
      todo2: "",
      todo3: "",
      pomo1: false,
      pomo2: false,
      pomo3: false,
      pomo4: false,
      pomo5: false,
      submitted: false
    });
  }


  
  render() {
    return (
      
      
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>

        ) : (
          
          <div>
            

            {/* 
            
            Todo:
            - Display formatted date to user
            - Submit DateField format as hidden input field
            - new Date().toLocaleString('nl-NL', { month: 'long' }) 
            
            - Create login usability

            - Enable language change feature

            - Add weather widget

            - Add quote generator

            - Make notes section larger

            - Add photos to About Page
            
            */}


            <div className="form-group">
              <label htmlFor="title">Date</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={`${new Date().getFullYear()}-${(new Date().getMonth()+ 1)}-${new Date().getDate()}`}
                name="title"
                onChange={this.onChangeTitle}
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Notes</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
                <label htmlFor="gratitude">Gratitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="gratitude"
                  required
                  value={this.state.gratitude}
                  onChange={this.onChangeGratitude}
                  name="gratitude"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <input
                  type="text"
                  className="form-control"
                  id="priority"
                  required
                  value={this.state.priority}
                  onChange={this.onChangePriority}
                  name="priority"
                />
              </div>

              <div className="form-group">
                <label htmlFor="todo1">Todo 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="todo1"
                  required
                  value={this.state.todo1}
                  onChange={this.onChangeTodo1}
                  name="todo1"
                />
              </div>
  
              
              <div className="form-group">
                <label htmlFor="todo2">Todo 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="todo2"
                  required
                  value={this.state.todo2}
                  onChange={this.onChangeTodo2}
                  name="todo2"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="todo3">Todo 3</label>
                <input
                  type="text"
                  className="form-control"
                  id="todo3"
                  required
                  value={this.state.todo3}
                  onChange={this.onChangeTodo3}
                  name="todo3"
                />
              </div>

              <Countdown duration={1500} message="Time's up!" />

              <div className="form-group">
                <label htmlFor="pomo1">Pomo 1</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo1"
                  required
                  value={this.state.pomo1}
                  onChange={this.onChangePomo1}
                  name="pomo1"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pomo2">Pomo 2</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo2"
                  required
                  value={this.state.pomo2}
                  onChange={this.onChangePomo2}
                  name="pomo2"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pomo3">Pomo 3</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo3"
                  required
                  value={this.state.pomo3}
                  onChange={this.onChangePomo3}
                  name="pomo3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pomo4">Pomo 4</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo4"
                  required
                  value={this.state.pomo4}
                  onChange={this.onChangePomo4}
                  name="pomo4"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pomo5">Pomo 5</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo5"
                  required
                  value={this.state.pomo5}
                  onChange={this.onChangePomo5}
                  name="pomo5"
                />
              </div>


            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
            
          </div>
        )}
      </div>
    );
  }
}