# submitHandler

> This package is used to help react and view developers to be able to access information in the form at ease.

## Instalation

`yarn add submithandler` or `npm install submithandler`


## Usage

```tsx

import { submitHandler } from "submithandler"

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


## Implementation

> The Object parsed to your function is constructed from the formula of keys as input names and values as input values.