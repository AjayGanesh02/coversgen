import type { PlasmoCSConfig } from "plasmo"

import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

const storage = new Storage()

async function updateCurPage() {
  const page = document.body.innerText || document.body.textContent

  //   console.log(page)

  await storage.set("curPage", page)
}

document.addEventListener("visibilitychange", (_event) => {
  if (document.visibilityState == "visible") {
    updateCurPage()
  }
})
document.addEventListener("load", (_event) => updateCurPage())
