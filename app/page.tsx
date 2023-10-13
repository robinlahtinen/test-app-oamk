import bottleGif from "./bottle.gif";
import Image from "next/image";

export default function PageHome() {
  return (
    <>
        <h2>This is the homepage!</h2>
        <p>Remember to check out the other pages.</p>
      <Image src={bottleGif} width={200} alt="Opening champagne."/>
    </>
  )
}
