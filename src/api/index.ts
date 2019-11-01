import service from './request'
import { API, UserInfo } from './api'

export default class Service implements API {
  getUserInfo(data: { username: Record<string, number> }) {
    return service(data, 213123, 'asda')
  }
}
