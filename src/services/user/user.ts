import { httpRequest } from '~/src/libraries/http-request'
import { TResponseUserList } from './user.model'

const sleep = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000))

interface TGetUserList {
  params: {
    page: number
    per_page: number
    delay?: number
  }
}

export async function getUserList({ params }: TGetUserList) {
  try {
    await sleep(params.delay || 0)

    const response = await httpRequest.get<TResponseUserList>('/users', {
      params: {
        page: params.page,
        per_page: params.per_page,
      },
    })

    return (
      response?.data?.data?.map((user) => ({
        ...user,
        total: response?.data?.total,
      })) || []
    )
  } catch (error) {
    return []
  }
}
