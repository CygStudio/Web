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
    // 確保 browserName 只包含有效的類名字符
    const safeBrowserName = browserName.toLowerCase().replace(/[^a-z0-9-]/g, '-')
    document.documentElement.classList.add(safeBrowserName)
  }, [])

  return { browserName, isSafari, isIOS }
}

export default useBrowserTag
