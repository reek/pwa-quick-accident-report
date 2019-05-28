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

export interface IForgotPassword {
  baseUrl: string
  email: string
}

export interface IResetPassword {
  token?: string
  password: string
}

export interface IEmail {
  email: string
}

