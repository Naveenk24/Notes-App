// Style your elements here

import styled from 'styled-components'

export const ListItems = styled.li`
  width: 30%;
  padding: 10px;
  box-shadow: 0px 1px 8px 0px #bfbfbf;
  margin: 0px 23px 15px 0px;
  border-radius: 3px;
  @media screen and (max-width: 767px) {
    width: 100%;
    min-height: 14vh;
    margin-right: 7px;
  }
`

export const NoteItemTitle = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-size: 15px;
`

export const NoteItemParagraph = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 12px;
`
