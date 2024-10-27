import Link from "next/link"

export default function Header(){
    return(
        <div className="headerMain-Container">
            <div className="childContainer">
                <h1 className="headerTitle">Blogging Website</h1>
                <ul className="headerItems">
                 <Link href={"./"}><li className="home">Home</li></Link>   
                   <Link href={"./about%20author"}> <li className="about">About Author</li></Link>
                    <Link href={"./contact"}><li className="contact">Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}