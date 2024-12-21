import axios, { type AxiosError } from 'axios'

const TIMEOUT = 10000

export const HttpStatus = {
  Unauthorized: 'unauthorized',
}

// Ref: https://github.com/vercel/swr/blob/1585a3e37d90ad0df8097b099db38f1afb43c95d/src/_internal/utils/env.ts#L6C14-L6C23
const isWindowDefined = typeof window != 'undefined'
const IS_SERVER = !isWindowDefined || 'Deno' in globalThis
const baseURL = IS_SERVER ? process.env.NEXT_PUBLIC_API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL

export const httpRequest = axios.create({
  baseURL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface TAxiosResponseData {
  code: number
  data: Record<string, unknown>
  message: string
  status: string
}

httpRequest.interceptors.response.use(
  function (response) {
    return response
  },

  function (error: AxiosError<TAxiosResponseData>): Promise<AxiosError<TAxiosResponseData>> {
    return Promise.reject(error)
  },
)
