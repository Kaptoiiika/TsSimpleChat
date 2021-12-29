export type chanel = {
  id: number
  name: string
  messages: messages[]
}
export type messages = {
  id: number
  userId: number
  msg: string
}
export type member = {
  id: number
  permison?: string
  color?: string
}
export type server = {
  id: number
  name: string
  members: member[]
  chanels: chanel[]

  icon?: string
  discription?: string
}
