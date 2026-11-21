import React from 'react'

function Home() {
    let user = JSON.parse(localStorage.getItem("user"))||""
    return (
        <>
            <h1>welcome {user.name}</h1>
            <div>hi i am Home page </div>
        </>

    )
}

export default Home