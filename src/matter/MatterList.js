import React, {useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listMatters } from '../../src/graphql/queries'
import { createMatter, deleteMatter } from '../../src/graphql/mutations'
import ProjectList from '../project/ProjectList'

export default function MatterList(props) {
    const [ matters, updateMatters] = useState([])
    const [ title, updateTitle ] = useState('')
    const [ description, updateDescription ] = useState('')

  const getMatters =  async () => {
    const response = await API.graphql(graphqlOperation(listMatters))
    updateMatters(response.data.listMatters.items)
  }

  const addMatter = async () => {
    if (title && title.length > 0) {
        const newMatter = {
            title,
            description,
        }

        await API.graphql(graphqlOperation(createMatter, { input: newMatter }))
        updateTitle('')
        updateDescription('')
        getMatters()
    }
  }

  const removeMatter =  matterId => async () => {
    await API.graphql(graphqlOperation(deleteMatter, { input: {id: matterId} }))
    getMatters()
  }

  useEffect(() => {
    getMatters()
  }, [])

  const handleTitleChange = e => updateTitle(e.target.value)
  const handleDescriptionChange = e => updateDescription(e.target.value)
  
  const renderCreateMatter = () => {
      return (
        <div>
          <label>New Matter Name</label>
          <input type="text" name="title" onChange={ handleTitleChange } />
          <br />
          <label>Description</label>
          <input type="text" name="description" onChange={ handleDescriptionChange } />
          <br />
          <button onClick={ addMatter }>Create</button>
        </div>
      )
  }

  return (
      <React.Fragment>
        <h2>Matter List</h2>
        {
            matters.map((matter, index) => (
                <div>
                    <p key={ index }>{ matter.id } - { matter.title }</p>
                    <ProjectList matterId={matter.id} />
                    <button onClick={ removeMatter(matter.id) }>Delete Matter</button>
                    <br />
                    ----------------------------------------------
                </div>
            ))
        }
        <br />
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        {
            renderCreateMatter()
        }
      </React.Fragment>
  )
}