import {} from '../presentation/protocols/email-validator'

export class EmailValidatorAdapter {
  isValid (email: string): boolean {
    return false
  }
}