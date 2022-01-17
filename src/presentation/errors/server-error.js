module.exports = class ServerError extends Error {
  constructor (paramName) {
    super('Internal Server Error, Try Again Later!')
    this.name = 'ServerError'
  }
}
