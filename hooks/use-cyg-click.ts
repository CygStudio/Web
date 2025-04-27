import { useEffect } from 'react'

export function useCygClick() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const elements = ['歌']
      const target = document.createElement('span')
      target.textContent = elements[0]
      const x = event.pageX
      const y = event.pageY
      Object.assign(target.style, {
        zIndex: '999',
        top: `${y - 42}px`,
        left: `${x + Math.floor(Math.random() * 60 - 30)}px`,
        position: 'absolute',
        fontWeight: 'bold',
        color: 'red',
        fontSize: '22pt',
        pointerEvents: 'none',
        userSelect: 'none',
        transition: 'none'
      })
      document.body.appendChild(target)
      // 動畫
      target.animate(
        [
          { top: `${y - 42}px`, opacity: 1 },
          { top: `${y - 380}px`, opacity: 0 }
        ],
        {
          duration: 1500,
          easing: 'ease-out'
        }
      ).onfinish = () => {
        target.remove()
      }
    }
    document.body.addEventListener('click', handleClick)
    return () => {
      document.body.removeEventListener('click', handleClick)
    }
  }, [])
}
