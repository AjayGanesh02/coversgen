import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"

import "./style.css"

import React from "react"

function IndexPopup() {
  const [resume, setResume] = useStorage("resume", (v) =>
    v === undefined ? "" : v
  )

  return (
    <div className="flex flex-col justify-center items-center h-96 w-96 p-16">
      <textarea onChange={(e) => setResume(e.target.value)} value={resume} />
      <div
        className="border rounded-md h-20 w-20"
        onClick={async () => {
          const resp = await sendToBackground({
            name: "ping"
          })
          console.log(resp.message)
        }}
      />
    </div>
  )
}

export default IndexPopup
