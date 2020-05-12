declare module '*.module.css'
declare module 'typography'
declare module 'react-helmet'
declare module 'aos'
declare module 'react-scrollspy'
declare module 'classnames'
declare module 'react-icomoon'
/*
declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}
*/
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const src: any
  export default src
}
/*

declare module '*.svg' {
  const content: string
  export default content
}
*/
declare module '*.jpg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}
