interface API {
  getName(data: { username: Record<string, number> }): Promise<any>
  getUserInfo(data: { username: Record<string, number> }): Promise<any>
}
