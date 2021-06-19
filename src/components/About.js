import React, { Component } from 'react'
import '../styles/About.scss'
import AboutUs from './sub-components/AboutUs'
import Mission from './sub-components/Mission'
import Structure from './sub-components/Structure'
import Team from './sub-components/Team'

export default class About extends Component {
    state = {
        about:true,
        mission:false,
        structure:false,
        team:false
    }
    constructor(props){
        super(props);
        this.clearState = this.clearState.bind(this);
    }
    clearState(){
        this.setState({
            about:false,
            mission:false,
            structure:false,
            team:false
        });
    }
    render() {
        return (
            <div className="container text-light py-7">
                <h4>About Zenith</h4>
                <div className="about-row">
                    <div className="about-sidebar">
                        <div className={this.state.about?"about-card active text-info":"about-card"} onClick={e=>{this.clearState();this.setState({about:true})}}>
                            <p className="p-big m-0 px-3 py-4">About Us</p>
                        </div>
                        <div className={this.state.mission?"about-card active text-info":"about-card"} onClick={e=>{this.clearState();this.setState({mission:true})}}>
                            <p className="p-big m-0 px-3 py-4">Mission & Vision</p>
                        </div>
                        <div className={this.state.structure?"about-card active text-info":"about-card"} onClick={e=>{this.clearState();this.setState({structure:true})}}>
                            <p className="p-big m-0 px-3 py-4">Business Structure</p>
                        </div>
                        <div className={this.state.team?"about-card active text-info":"about-card"} onClick={e=>{this.clearState();this.setState({team:true})}}>
                            <p className="p-big m-0 px-3 py-4">Team</p>
                        </div>
                    </div>
                    <div className="about-content">
                        {this.state.about && <AboutUs />}
                        {this.state.mission && <Mission />}
                        {this.state.structure && <Structure />}
                        {this.state.team && <Team />}
                    </div>
                </div>
            </div>
        )
    }
}
