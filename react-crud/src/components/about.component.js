import React, { Component } from "react";
import { withRouter } from '../common/with-router';


class About extends Component {

    render() {
        return (
            <div>
            <h1>
                Why Today?
            </h1>
            
            <p className="body-text">
            As a certified productivity and motivational junkie, I've kept up with all the
            fun, new and effective innovations in the self-help and lifestyle planning space. I've created this app
            to bring together my favorite techniques into one simple, streamlined, and beautiful space.
            Inspired by various creators, entrepreneurs, and psychology experts, I hope that this will be a useful
            tool that you look forward to using not just Today, but every day. 
            </p>

                        <p className="body-text">
                <b>~ The Pomodoro Technique</b> is a countdown timer that designates 25 minute intervals of
                work on a task. It is most effective when used with 2, 5, or 15 minute breaks in between 
                sesssions. Created by Francesco Cirillo, I have come back to this technique time and time again.
                Often times the hardest part of tackling a project or task, is simply hitting "start". 
            </p>

            <p className="body-text">
                <b>~ Tracking "pomodoros"</b> with checkmarks or bubbles is a little tip I learned from the Productivity Planner
                created by Intelligent Change. I discovered the founders of this product back in college, and they've been
                inspiring me ever since with their focus on not just productivity, but wellness. Instagram creator Mrs. Hinch from England also uses a
                "reverse to-do list" on days where she isn't sure how much cleaning she can get done. Sometimes, recording our progress as 
                we work can be just as rewarding as crossing things off of our to-do lists.
            </p>

            <p className="body-text">
                <b>~ Writing down gratitude</b> is another thing I picked up from the founders of Intelligent Change, though 
                being grateful is not a new concept. That being said, consciously acknowledging that which we are grateful for
                has profound effects on our sense of contentness and wellbeing by supporting our mental and emotional health. Blindly chasing the "more" of life begins to
                feel empty if we are not appreciative for what we already have. Inner peace is one of the desireable things we can have,
                and it's accessible every moment when we write down what we're grateful for.
            </p>



            </div>
                
        )
    }
}

export default withRouter(About);