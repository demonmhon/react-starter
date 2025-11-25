import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BlankPage } from '@/components'
import { useLanguage } from '@/contexts/language-context'

const LocationPage = () => {
  const { changeLanguage } = useLanguage()
  const navigate = useNavigate()

  const setLanguage = (lang: string) => {
    console.log(`Language changed to: ${lang}`)
    changeLanguage(lang)
    navigate('/')
  }

  return (
    <BlankPage title={`Location`}>
      <ul>
        <li>
          <a href="#" onClick={() => setLanguage('en-US')}>
            United States
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setLanguage('ja-JP')}>
            日本 | Japan
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setLanguage('th-TH')}>
            ประเทศไทย | Thailand (Thai)
          </a>
        </li>
      </ul>
    </BlankPage>
  )
}

export default LocationPage
