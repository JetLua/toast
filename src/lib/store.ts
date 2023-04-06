import {writable} from 'svelte/store'

interface Msg {
  id: number
  content: string
}

let id = 0

export const msgs = writable<Msg[]>([])

export function addMsg(content: string) {
  msgs.update(msgs => {
    id++
    setTimeout((id: number) => removeMsg(id), 3e3, id)
    return msgs.concat({content, id})
  })
}

export function removeMsg(id: number) {
  msgs.update(msgs => {
    return msgs.filter(msg => msg.id !== id)
  })
}
