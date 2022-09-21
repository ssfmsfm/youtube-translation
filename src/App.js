import { useEffect, useState } from 'react'
import Iframe from './components/iframe/Iframe'

import { ReactComponent as Loader } from './assets/loader.svg'

import './App.css'

const request = [
  {
    id: 1,
    language: "en",
    url: "http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com",
    videoId: "P0LiiXaY3AA"
  },
  {
    id: 2,
    language: "en",
    url: "https://www.youtube.com/embed/P0LiiXaY3AA?autoplay=1",
    videoId: "M7lc1UVf-VE"
  },
  {
    id: 3,
    language: "es",
    url: "https://fr.wikipedia.org/wiki/Espagne",
    videoId: "M7lc1UVf-VE"
  },
  {
    id: 4,
    language: "en",
    url: "http://www.youtube.com/embed/_1so_vqB1Xc?autoplay=1",
    videoId: "P0LiiXaY3AA"
  },
  {
    id: 5,
    language: "en",
    url: "https://www.youtube.com/embed/pKoH9GkEKxQ?autoplay=1",
    videoId: "M7lc1UVf-VE"
  },
]

const App = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState("")


  useEffect(() => {
    const language = window.navigator.language.slice(0, 2).toLowerCase()
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(request), 2000)
    }).then(data => {
      const currentUrls = data.filter(item => item.language === language)
      currentUrls.forEach((item, i) => {
        setTimeout(() => {
          setUrl(item.url)
          setIsLoading(true)
        }, i * 10000)
      })
    })
  }, [window.navigator.language])

  return (
    isLoading
      ?
    <div className="App">
      <Iframe url={url}/>
    </div>
      :
    <Loader />
  )
}

export default App
