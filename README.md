# irumvanselme/submitHandler

> This package is used to help react and view developers to be able to access information in the form at ease.

## Instalation

`yarn add @irumvanselme/submithandler` or `npm install @irumvanselme/submithandler`


# Usage

```tsx

import { submitHandler } from "@irumvanselme/submithandler"

export function MyComponent(){

  async function register(data){
    /**
     * data's schema is {
     *  login: "",
     *  password: ""
     * }
     * 
     * You can use data.login to access data submitted in form on login input as well as data.password
     */
  }

  return (
    <form onSubmit={submitHandler(register)}>
      <input name="login" placeholder="eg: username" />
      <input name="password" placeholder="***" />
    </form>
  )
}


```