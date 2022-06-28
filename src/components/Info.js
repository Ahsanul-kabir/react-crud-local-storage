import React from 'react'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import View from './View'

// getting the values of local storage
const getDatafromLS = () => {
    const data = localStorage.getItem('items')
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

const Info = () => {
    // main array of objects state || items state || items array of objects
    const [items, setItems] = useState(getDatafromLS())

    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [formErrors, setFormErrors] = useState('')

    // input field states
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    // form submit event
    const handleSubmit = (e) => {
        e.preventDefault()

        setFormErrors(validate(number))

        if (validate(number)) {
            return null
        } else {
            if (name && isEditing) {
                // editing
                setItems(
                    items.map((item) => {
                        if (item.id === editId) {
                            return { ...item, name, number }
                        }
                        return item
                    })
                )

                setName('')
                setNumber('')
                setEditId(null)
                setIsEditing(false)
            } else {
                const newItem = { id: uuid(), name, number }
                setItems([...items, newItem])
                setName('')
                setNumber('')
            }
        }
    }

    const validate = (number) => {
        let errors = ''
        const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/
        if (!number) {
            errors = 'Phone Number is required!'
        } else if (!regex.test(number)) {
            errors = 'Give Bangladeshi phone numbers (likes, +88017XXXXXXXX or 017XXXXXXXX)'
        }
        return errors
    }

    // delete Item from LS
    const deleteItem = (id) => {
        const tempItem = [...items]
        const filteredItems = tempItem.filter((element) => {
            return element.id !== id
        })
        setItems(filteredItems)
    }

    const editItem = (id) => {
        const specificItem = items.find((item) => item.id === id)
        setIsEditing(true)
        setEditId(id)
        setName(specificItem.name)
        setNumber(specificItem.number)
    }

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Explore Crud</h1>
            <form onSubmit={handleSubmit} className='form-container'>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br />
                <input
                    type='number'
                    placeholder='Number'
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    id='phone-number'
                />
                <p style={{ color: 'red' }}>{formErrors}</p>
                <br />
                <button type='submit'>Enter</button>
            </form>

            <div style={{ margin: '15px' }}>
                {items?.map((singleItem) => (
                    <View
                        key={singleItem.id}
                        singleItem={singleItem}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    ></View>
                ))}
            </div>
        </>
    )
}

export default Info
