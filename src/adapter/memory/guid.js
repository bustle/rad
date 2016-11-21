let GUID = 0

export default class {
  static async last() {
    return GUID.toString()
  }

  static async next() {
    return (++GUID).toString()
  }
}
