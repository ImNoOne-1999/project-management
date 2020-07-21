import React, { Component } from 'react'
import {connect} from 'react-redux';
import {updateProject} from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom'

class UpdateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value  
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.updateProject(this.state,this.props.match.params.id);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        console.log(this.props);
        if (!auth.uid) return <Redirect to='/signIn' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Update Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id='title' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{auth: state.firebase.auth}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProject: (project,projectId) => dispatch(updateProject(project,projectId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateProject)
