module.exports = {
  regexp: {
    pattern: '^(((ftp|http|https):\\/\\/|(mailto|tel|sms):)(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?|\\/\\S*)$',
    flags: 'g'
  },
  message: 'Must be a full URL or absolute path eg. "http://ginlane.com", "/about-us", "/#our-work"'
}
