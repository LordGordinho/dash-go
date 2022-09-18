import { useQuery } from "@tanstack/react-query"
import { api } from "../axios"
type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}
export const getUsers = async (page: number): Promise<User[]> => {
  console.log(page)
  const { data } = await api('users', {
    params: {
      page
    }
  })

  console.log(data)
  
  const users: [User] = data.users.map( (user: User) => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR')
    }
  })

  return users;
}

export const useUser = (page: number) => {
  return useQuery(['users',page], () => getUsers(page))
}