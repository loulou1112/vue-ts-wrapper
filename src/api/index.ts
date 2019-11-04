import service from './request'

export default class Service implements API {
  getName(data: { username: Record<string, number> }): Promise<any> {
    return service(data, 213123, 'asda')
  }
  getUserInfo(data: { username: Record<string, number> }) {
    return service(data, 213123, 'asda')
  }
  getAge(data: { username: Record<string, number> }) {
    return service(data, 213123, 'asda')
  }
}
