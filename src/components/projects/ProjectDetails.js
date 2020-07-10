import React from 'react'

const ProjectDetails = (props) => {
    let id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Proj Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore voluptatibus accusantium corporis vel adipisci a rem architecto unde impedit libero, reiciendis harum laborum atque quis minus cumque repellat cupiditate.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by</div>
                    <div>#rd July, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails