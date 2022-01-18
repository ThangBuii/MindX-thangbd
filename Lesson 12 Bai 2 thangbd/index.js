const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const noti = document.getElementById('noti')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Username không được để trống')
  }

  if (password.value.length <= 8) {
    messages.push('Mật khẩu ít nhất là 8 ký tự')
  }

  if (messages.length > 0) {
    e.preventDefault()
    noti.innerText = messages.join(', ')
  }
})