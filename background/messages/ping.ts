import type { PlasmoMessaging } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  const storage = new Storage()
  const resume = await storage.get("resume")
  const doc = await storage.get("curPage")
  console.log(resume)
  console.log(doc)
  res.send({
    message: resume
  })
}

export default handler
