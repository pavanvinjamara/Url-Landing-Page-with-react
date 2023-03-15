
import { useEffect, useState } from "react"
import bgMobile from "../../assets/images/bg-shorten-mobile.svg"
import bgDesktop from "../../assets/images/bg-shorten-desktop.svg"
import"./index.css"

const getLocalStorage = () => {
  let links = localStorage.getItem("links")

  if (links) {
    return JSON.parse(localStorage.getItem("links"))
  } else {
    return []
  }
}

export default function Url() {
  const [text, setText] = useState("")
  const [links, setLinks] = useState(getLocalStorage())
  const [buttonText, setButtonText] = useState("Copy")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()
        console.log(data.result)
        setLinks(data.result)
        setText("")
      }

      shortenLink()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link)
    setButtonText("Copied!")
  }

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])

  return (
    <>
      <section className="info1">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-div">
            <input
              type="url"
              placeholder="Shorten a link here"
              className="input-one"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="btn-shorten"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
        </form>

        <div className="">
          <article>
            <h6 className="">{links.original_link}</h6>
          </article>

          <article>
            <ul className="">
              <li className="">
                <button className="">
                  {links.full_short_link}
                </button>
              </li>
              <li>
                <button
                  onClick={handleCopy}
                  className=""
                >
                  {buttonText}
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
