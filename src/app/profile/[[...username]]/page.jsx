import React from 'react'

async function page({params}) {
    const {username} = await params;
    console.log(username)
  return (
    <div>this is dynamic profile page- {username}</div>
  )
}

export default page