import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { api } from "../axios"
type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}
export const getUsers = async (page: number): Promise<User[]> => {
  const { data } = await api('users', {
    params: {
      page
    }
  })
  
  const users: [User] = data.users.map( (user: User) => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR')
    }
  })

  return users;
}

export const useUser = (page: number, initialData: User[]) => {
  
  return useQuery(['users', page], () => getUsers(page), {
    initialData: initialData
   });
}