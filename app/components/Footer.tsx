export default function Footer() {
  const now = new Date()
  const year = now.getFullYear()
  return (
    <footer className="text-center w-full bg-[#BBFBD0] mb-6">
      <p className="">
        Copyright © {year} 熙歌慶生網頁｜by
        <a href="https://sid.tw" target="_blank" rel="noopener noreferrer">
          【叭噗叭噗】排氣管 Sid.tw
        </a>
      </p>
    </footer>
  )
}
