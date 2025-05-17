'use client'

import { useEffect } from 'react'
import { browserName, isSafari, isIOS } from 'react-device-detect'

const useBrowserTag = () => {
  useEffect(() => {
    if (isIOS) {
      document.documentElement.classList.add('ios')
    }
    if (isSafari || isIOS) {
      document.documentElement.classList.add('safari')
    }
    document.documentElement.classList.add(browserName.toLowerCase())
  }, [])

  return { browserName, isSafari, isIOS }
}

export default useBrowserTag
