import { useEffect, useState } from "react"
import Card from "./Card"

function Contactdetails() {
  // let data = JSON.parse(localStorage.getItem("user"))?.data ?? []
  
  let [user, setuser] = useState(JSON.parse(localStorage.getItem("user")))
  function remove(i) {
    let index = user.data.findIndex((v, k) => {
      return k == i
    })
    console.log(user)
    console.log("user", { ...user, data: user.data.toSpliced(index, 1) })
    setuser({ ...user, data: user.data.toSpliced(index, 1) });
    // localStorage.setItem("user", JSON.stringify(user))



  }


  function edit(i) {

  }

  useEffect(() => {
    console.log("hi");

    localStorage.setItem("user", JSON.stringify(user))

    let fuser = JSON.parse(localStorage.getItem("fuser"))
    let findindex = fuser.findIndex((v) => {
      return v.email == user.email
    })
    fuser.splice(findindex, 1, user)

    localStorage.setItem("fuser", JSON.stringify(fuser))
  }, [user])

  return (
    <div style={{ display: "flex", gap: "20px", }}>
      {
        user?.data.length != 0 ? <>
          {
            user.data.map((v, k) => {
              console.log(k, v);

              return <div key={k} style={{ background: "yellow", width: "200px", }}>

                <Card v={v} k={k} />
              </div>

            })
          }
        </>
          : <>nodata</>
      }
    </div>
  )
}

export default Contactdetails