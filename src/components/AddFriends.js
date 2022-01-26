import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriends = () => {
    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    const history = useHistory();

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', form)
        .then(resp => {
            history.push('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
    <div>
        <h2>Add Friends</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Friend Name</label>
                <input 
                name='name'
                onChange={handleChange}

                />
            </div>
            <div>
                <label htmlFor='email'>Friend Email</label>
                <input
                 name='email'
                 onChange={handleChange}
                  />
            </div>
            <button>Submit</button>
        </form>
    </div>
    )
  };


  export default AddFriends;