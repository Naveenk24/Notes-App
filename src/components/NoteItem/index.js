// Write your code here

import {ListItems, NoteItemTitle, NoteItemParagraph} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {titleInput, noteInput} = noteDetails
  return (
    <ListItems>
      <NoteItemTitle>{titleInput}</NoteItemTitle>
      <NoteItemParagraph>{noteInput}</NoteItemParagraph>
    </ListItems>
  )
}

export default NoteItem
