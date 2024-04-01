import { handleRegister } from '@/lib/actionServer'
import React from 'react'
import styles from './register.module.css'
import RegisterForm from '@/components/registerForm/registerForm'

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
    </div>
  )
}
