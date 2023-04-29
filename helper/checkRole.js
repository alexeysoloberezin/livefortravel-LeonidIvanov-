const roles = [
  {
    email: 'alexeysoloberezinsolo@gmail.com',
    role: 'admin'
  }
]

export default function checkRole(email) {
  let resRole =  null
  roles.forEach(role => {
    if (role?.email === email){
      resRole = role.role
    }
  })

  return resRole
}

export function isAdmin(email) {
  let resRole =  false
  roles.forEach(role => {
    if (role?.email === email){
      if (role.role === 'admin'){
        resRole = true
      }
    }
  })

  return resRole
}

