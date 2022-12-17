import React,{FC} from 'react'
import { NoteData, Tag } from './App'
import NoteForm from './NoteForm'

type Props={
onSubmit:(data:NoteData)=>void
onAddTag:(tag:Tag)=>void
availableTags:Tag[]
}
const NewNote:FC<Props> = ({onSubmit,onAddTag, availableTags}) => {
  return (
    <>
   <h1 className='mb-4'>New Note</h1>
   <NoteForm onSubmit={onSubmit} onAddTag={onAddTag}   availableTags={availableTags}/>
   </>
  )
}

export default NewNote