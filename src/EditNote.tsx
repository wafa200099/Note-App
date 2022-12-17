import React,{FC} from 'react'
import { NoteData, Tag } from './App'
import NoteForm from './NoteForm'
import { useNote } from './NoteLayout'

type Props={
onSubmit:(id:string,data:NoteData)=>void
onAddTag:(tag:Tag)=>void
availableTags:Tag[]
}
const EditNote:FC<Props> = ({onSubmit,onAddTag, availableTags}) => {
    const note=useNote()
  return (
    <>
   <h1 className='mb-4'>Edit Note</h1>
   <NoteForm onSubmit={(data)=>onSubmit(note.id,data)} onAddTag={onAddTag}   availableTags={availableTags}   title={note.title}  markdown={note.markdown} tags={note.tags}/>
   </>
  )
}

export default EditNote