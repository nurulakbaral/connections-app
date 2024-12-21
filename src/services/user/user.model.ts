export interface TResponseUserList {
  page: null | number
  per_page: null | number
  total: null | number
  total_pages: null | number
  data: null | Array<{
    id: null | number
    email: null | string
    first_name: null | string
    last_name: null | string
    avatar: null | string
  }>
  support: null | {
    url: null | string
    text: null | string
  }
}
