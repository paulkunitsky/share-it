/** under development */

const config = {
  title: '',
  progressBar: false,
  timeout: 2000,
  position: 'topCenter',
  color: '#fff'
}

let lastMessage = null

export default (msg, overwriteConfig = { static: false }) => {
  if (!msg || msg === lastMessage) return

  lastMessage = msg

  if (!overwriteConfig.static) {
    setTimeout(_ => lastMessage = null, 2000)
  }

  iziToast.show({
    ...config,
    message: msg,
    ...overwriteConfig
  })
}
