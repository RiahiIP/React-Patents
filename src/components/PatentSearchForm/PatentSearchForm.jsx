import './PatentSearchForm.css'

import { useState } from 'react';

import {postPatentId } from '../../utilities/api/patentData';

export default function PatentSearchForm({updateDocument}) {

    const [formData, setFormData] = useState('')

    const handleChange = (evt) => {
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current field's value
        };
        setFormData(newFormData);
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const patentData = await postPatentId(formData)
            // console.log(patentData)
            updateDocument(patentData)
        } catch (error) {
            
        }
    }

    return(
        <form className='PatentSearchForm d-flex flex-column' onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name='patentId' id='patentId' className='form-control' placeholder='Enter Patent ID'/>
            <br />
            <button type="submit" className="btn btn-primary mx-auto">Submit</button>
        </form>
    )
}