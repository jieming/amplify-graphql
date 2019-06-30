import React, {useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { getMatter } from '../../src/graphql/queries'
import { createProject, deleteProject } from '../../src/graphql/mutations'

export default function ProjectList({ matterId }) {
    const [ projects, updateProjects ] = useState([])
    const [ title, updateTitle ] = useState('')
    const [ description, updateDescription ] = useState('')

    const getProjects =  async () => {
        const response = await API.graphql(graphqlOperation(getMatter, {id: matterId}))
        updateProjects(response.data.getMatter.projects.items)
    }

    const addProject = async () => {
        if (title && title.length > 0) {
            const newProject = {
                title,
                description,
                projectMatterId: matterId
            }
    
            await API.graphql(graphqlOperation(createProject, { input: newProject }))
            updateTitle('')
            updateDescription('')
            getProjects()
        }
    }

    const removeProject = projectId => async () => {
        await API.graphql(graphqlOperation(deleteProject, { input: {id: projectId} }))
        getProjects()
    }

    useEffect(() => {
        getProjects()
    },[matterId])

    const handleTitleChange = e => updateTitle(e.target.value)
    const handleDescriptionChange = e => updateDescription(e.target.value)

    const renderCreateProject = () => (
        <div>
            <label>New Project Name</label>
            <input type="text" name="title" onChange={ handleTitleChange } />
            <br />
            <label>Description</label>
            <input type="text" name="description" onChange={ handleDescriptionChange } />
            <br />
            <button onClick={ addProject }>Create</button>
        </div>
    )

    return (
        <React.Fragment>
            <h3>Project List</h3>
            {
                projects.map((project, index) => (
                    <div>
                    <p key={ index }>{ project.id } - { project.title }</p>
                    <button onClick={ removeProject(project.id) }>Delete Project</button>
                    
                </div>
                ))
            }
            {
                renderCreateProject()
            }
            --------
            <br />
        </React.Fragment>
    )
}