import Link from "next/link";
import { useRouter } from "next/router";

import style from "./index.module.css"

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("./about");
  }
  return (
    <div >
      <h1 className={style.redLight}>Home Page</h1>
      <Link href="/about">
        <a>
          <h1>Go to about page</h1>
        </a>
      </Link>
      <button onClick={handleClick}>Handle Button</button>
    </div>
  )
}
