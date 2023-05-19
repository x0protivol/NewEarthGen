import Link from "next/link"
import Image from "next/image"
import "../Style/header.css"
export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logoFlex">
          <Image src='/new_earth.png' alt="New Gen Earth Logo" width={200} height={130} />
          <span>New Gen Earth</span>
        </div>
        <div className="justify">
          <Link href="" className="link">Home</Link>
        </div>
        <div>
          <Link href="" className="link">Project</Link>
        </div>
      </nav>
    </header>
  )
}