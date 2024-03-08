// Write your code here

import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  Form,
  TitleInput,
  NotesInput,
  AddButton,
  EmptyNotesContainer,
  EmptyNoteImage,
  EmptyNotesHeading,
  EmptyNotesParagraph,
  NoteItemContainer,
  Lists,
} from './styledComponents'

const Notes = () => {
  const [titleInput, updateTitle] = useState('')
  const [noteInput, updateNote] = useState('')
  const [notes, updateNotes] = useState([])

  const onChangeTheTitle = event => {
    updateTitle(event.target.value)
  }

  const onChangeTheNote = event => {
    updateNote(event.target.value)
  }

  const onSubmitTheDetails = event => {
    event.preventDefault()
    const noteItem = {
      id: uuidv4(),
      titleInput,
      noteInput,
    }
    updateNotes(prevState => [...prevState, noteItem])
    updateTitle('')
    updateNote('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onSubmitTheDetails}>
        <TitleInput
          type="text"
          onChange={onChangeTheTitle}
          placeholder="Title"
          value={titleInput}
        />
        <NotesInput
          type="text"
          onChange={onChangeTheNote}
          placeholder="Take a Note..."
          value={noteInput}
        />
        <AddButton type="submit">Add</AddButton>
      </Form>
      {notes.length === 0 && (
        <>
          <EmptyNotesContainer>
            <EmptyNoteImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
            <EmptyNotesParagraph>
              Notes you add will appear here
            </EmptyNotesParagraph>
          </EmptyNotesContainer>
        </>
      )}
      <NoteItemContainer>
        <Lists>
          {notes.map(eachItem => (
            <NoteItem key={eachItem.id} noteDetails={eachItem} />
          ))}
        </Lists>
      </NoteItemContainer>
    </MainContainer>
  )
}

export default Notes
