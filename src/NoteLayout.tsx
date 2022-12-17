import React,{FC} from 'react'
import {useParams ,Navigate,Outlet,useOutletContext} from 'react-router-dom'
import { Note } from './App'


type Props={
    notes:Note[]
}
export  const NoteLayout:FC<Props> = ({notes}) => {
    const {id}=useParams()//to get id stright from url
    const note=notes.find((n)=>n.id ===id)


    
    if (note == null) return <Navigate to="/" replace />

    return <Outlet context={note} />//render whatever inside path='/:id'
  }
  
  export function useNote() {
    return useOutletContext<Note>()//helper function
  }