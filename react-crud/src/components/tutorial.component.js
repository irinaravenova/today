import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { withRouter } from '../common/with-router';

class Tutorial extends Component {
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
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
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
        pomo5: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }));
  }

  onChangeGratitude(e) {
    const gratitude = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        gratitude: gratitude
      }
    }));
  }

  onChangePriority(e) {
    const priority = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        priority: priority
      }
    }));
  }

  onChangeTodo1(e) {
    const todo1 = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        todo1: todo1
      }
    }));
  }

  onChangeTodo2(e) {
    const todo2 = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        todo2: todo2
      }
    }));
  }

  onChangeTodo3(e) {
    const todo3 = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        todo3: todo3
      }
    }));
  }

  onChangePomo1(e) {
    const pomo1 = e.target.checked;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        pomo1: pomo1
      }
    }));
  }

  onChangePomo2(e) {
    const pomo2 = e.target.checked;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        pomo2: pomo2
      }
    }));
  }

  onChangePomo3(e) {
    const pomo3 = e.target.checked;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        pomo3: pomo3
      }
    }));
  }

  onChangePomo4(e) {
    const pomo4 = e.target.checked;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        pomo4: pomo4
      }
    }));
  }

  onChangePomo5(e) {
    const pomo5 = e.target.checked;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        pomo5: pomo5
      }
    }));
  }


  getTutorial(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      gratitude: this.state.currentTutorial.gratitude,
      priority: this.state.currentTutorial.priority,
      todo1: this.state.currentTutorial.todo1,
      todo2: this.state.currentTutorial.todo2,
      todo3: this.state.currentTutorial.todo3,
      pomo1: this.state.currentTutorial.pomo1,
      pomo2: this.state.currentTutorial.pomo2,
      pomo3: this.state.currentTutorial.pomo3,
      pomo4: this.state.currentTutorial.pomo4,
      pomo5: this.state.currentTutorial.pomo5,
      published: status
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The entry was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {    
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/tutorials');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>

        {currentTutorial ? (
          <div className="edit-form">
            <h4>Entry</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
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
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gratitude">Gratitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="gratitude"
                  value={currentTutorial.gratitude}
                  onChange={this.onChangeGratitude}
                />
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <input
                  type="text"
                  className="form-control"
                  id="priority"
                  value={currentTutorial.priority}
                  onChange={this.onChangePriority}
                />
              </div>

              <div className="form-group">
                <label htmlFor="todo1">Todo 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="todo1"
                  value={currentTutorial.todo1}
                  onChange={this.onChangeTodo1}
                />
              </div>

              <div className="form-group">
                <label htmlFor="todo2">Todo 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="todo2"
                  value={currentTutorial.todo2}
                  onChange={this.onChangeTodo2}
                />
              </div>

              <div className="form-group">
                <label htmlFor="todo3">Todo 3</label>
                <input
                  type="text"
                  className="form-control"
                  id="todo3"
                  value={currentTutorial.todo3}
                  onChange={this.onChangeTodo3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pomo1">Pomo 1</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo1"
                  checked={currentTutorial.pomo1}
                  onChange={this.onChangePomo1}
                />
              </div>              

              <div className="form-group">
                <label htmlFor="pomo2">Pomo 2</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo2"
                  checked={currentTutorial.pomo2}
                  onChange={this.onChangePomo2}
                />
              </div>     

              <div className="form-group">
                <label htmlFor="pomo3">Pomo 3</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo3"
                  checked={currentTutorial.pomo3}
                  onChange={this.onChangePomo3}
                />
              </div>   

              <div className="form-group">
                <label htmlFor="pomo4">Pomo 4</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo4"
                  checked={currentTutorial.pomo4}
                  onChange={this.onChangePomo4}
                />
              </div>   

              <div className="form-group">
                <label htmlFor="pomo5">Pomo 5</label>
                <input
                  type="checkbox"
                  className="form-control"
                  id="pomo5"
                  checked={currentTutorial.pomo5}
                  onChange={this.onChangePomo5}
                />
              </div> 


              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Tutorial);