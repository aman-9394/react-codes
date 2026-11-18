import React, { useState } from 'react'

function Contact() {
  
    let [contact, setcontact] = useState({
        name: "",
        number: "",
        email: "",
        profession: ""

    })
    let inputhandler = ((e) => {
        setcontact({ ...contact, [e.target.name]: e.target.value })
    })

    let formhandler = ((e) => {
        e.preventDefault()
        console.log(contact);
        localStorage.setItem("ucontact",JSON.stringify(contact))


    })


    return (
        <form onSubmit={formhandler}>
            <h1>Contact Details</h1>
            <div>
                Name:<input type="name"
                    name='name'
                    value={contact.name}
                    onChange={inputhandler}
                />
            </div>

            <div>
                Contact:<input type="number"
                    name='number'
                    value={contact.number}
                    onChange={inputhandler}
                />
            </div>

            <div>
                Email:<input type="email"
                    name='email'
                    value={contact.email}
                    onChange={inputhandler}
                />
            </div>

            <div>
                Profession:<input type="profession"
                    name='profession'
                    value={contact.profession}
                    onChange={inputhandler}
                />

            </div>

            <div>
                <button>
                    saved contacts
                </button>
            </div>
        </form>

    )
}

export default Contact