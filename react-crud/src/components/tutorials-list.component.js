import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    TutorialDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by date"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Entry List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Entry</h4>
              <div>
                <label>
                  <strong>Date:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.title}</p>
              </div>
              <div>
                <label>
                  <strong>Notes:</strong>
                </label>{" "}
                <p className="body-text"><i>{currentTutorial.description}</i></p>
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.published ? "Published" : "Pending"}</p>
              </div>
              <div>
                <label>
                  <strong>Gratitude:</strong>
                </label>{" "}
                <p className="body-text"><i>{currentTutorial.gratitude}</i></p>
              </div>
              <div>
                <label>
                  <strong>Priority:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.priority}</p>
              </div>
              <div>
                <label>
                  <strong>Todo 1:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.todo1}</p>
              </div>
              <div>
                <label>
                  <strong>Todo 2:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.todo2}</p>
              </div>
              <div>
                <label>
                  <strong>Todo 3:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.todo3}</p>
              </div>
              <div>
                <label>
                  <strong>Pomo 1:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.pomo1}</p>
              </div>
              <div>
                <label>
                  <strong>Pomo 2:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.pomo2}</p>
              </div>
              <div>
                <label>
                  <strong>Pomo 3:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.pomo3}</p>
              </div>
              <div>
                <label>
                  <strong>Pomo 4:</strong>
                </label>{" "}
                <p className="body-text">{currentTutorial.pomo4}</p>
              </div>
              <div>
                <label>
                  <strong>Pomo 5:</strong>
                </label>{" "}
                <p className="body-text"></p>{currentTutorial.pomo5}
              </div>


              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Click to see entry details.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}