import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const globalStyle = createGlobalStyle`
${reset}

ul {
  list-style: none;
}
`
