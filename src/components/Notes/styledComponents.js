// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 25vh;
  box-shadow: 0px 4px 16px 4px #bfbfbf;
  width: 70%;
  padding: 10px 20px 20px 20px;
  @media screen and (max-width: 767px) {
    height: 19vh;
    border-radius: 2px;
    margin-top: 25px;
  }
`

export const TitleInput = styled.input`
  font-family: 'Roboto';
  font-size: 13px;
  padding: 4px;
  margin-bottom: 5px;
  border: none;
  outline: none;
`

export const NotesInput = styled.textarea`
  font-family: 'Roboto';
  font-size: 13px;
  padding: 4px;
  margin-bottom: 5px;
  border: none;
  outline: none;
  width: 75%;
`

export const AddButton = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  font-size: 15px;
  padding: 5px 12px 5px 12px;
  border-radius: 4px;
`

export const EmptyNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  width: 75%;
  margin-top: 25px;
  @media screen and (max-width: 767px) {
    margin-top: 100px;
  }
`

export const EmptyNoteImage = styled.img`
  width: 100px;
`

export const EmptyNotesHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-size: 20px;
  margin-top: 10px;
`

export const EmptyNotesParagraph = styled.p`
  font-family: 'Roboto';
  color: #475569;
  line-height: 0;
`
export const NoteItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Lists = styled.ul`
  width: 70%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 8px 5px 8px;
`
