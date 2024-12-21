import { httpRequest } from '~/src/libraries/http-request'
import { TResponseUserList } from './user.model'

interface TGetUserList {
  params: {
    page: number
    per_page: number
  }
}

export async function getUserList({ params }: TGetUserList) {
  try {
    const response = await httpRequest.get<TResponseUserList>('/users', {
      params,
    })

    return response.data.data || []
  } catch (error) {
    return []
  }
}
