import Image from "next/image"

export default function Logo(){
    return(
        <div>
            <h3>Brunch.js</h3>
            <Image src="/img/brunch-icon.png" height="70" width="70" alt="brunch logo" priority />
        </div>
    )
}