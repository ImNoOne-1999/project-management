import React from 'react';
import { Link,NavLink } from 'react-router-dom'
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteProject,updateProject } from '../../store/actions/projectActions';

const ProjectSummary = (props) => {
    const { project,auth } = props;
    return(
        <div className="card z-depth-3 project-summary">
            <div className="card-content grey-text text-darken-3">
                <Link to={'/projects/'+project.id}>
                <span className="card-title black-text">{project.title}</span>
                </Link>
                <p>Posted By: {project.authorFirstName +' '+ project.authorLastName }</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                <div>
                    <NavLink to={'/update/users/'+auth.uid+'/projects/'+project.id}><button className="btn pink lightrn-1 z-depth-1" >
                        Edit
                    </button></NavLink>
                    <button className="btn right pink lightrn-1 z-depth-1" onClick={() => { props.deleteProject(project.id);console.log(project.id) }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{auth: state.firebase.auth}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (projectId) => dispatch(deleteProject(projectId)),
        updateProject: (projectId) => dispatch(updateProject(projectId))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectSummary)