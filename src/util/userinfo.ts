import { atom } from 'recoil'

export interface UserInfo {
  name: string
  belong: string
  age: number
}

// key value로 이루어진 작은 store
export const userInfoStore = atom<UserInfo>({
  key: 'userInfo',
  default: { name: '', belong: '', age: 0 },
})
