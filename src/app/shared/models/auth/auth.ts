export interface ILogin {
  email: string
  password: string
}

export interface IRegister {
  username?: string
  email: string
  password: string
  confirmPassword: string
}

export interface IForgot {
  email: string
}

export interface IEmail {
  email: string
}