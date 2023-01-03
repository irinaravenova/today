import React, { Component } from "react";
import { withRouter } from '../common/with-router';


class Settings extends Component {

    render() {
        return (
            <div>
            <h1>
                Let's Get Personal.
            </h1>

            <p className="body-text">Soon enough, we'll have some fun new features. Personalized quotes, weather updates, and more!</p>
            </div>
        )
    }
}

export default withRouter(Settings);