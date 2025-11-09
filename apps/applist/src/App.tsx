import React, { useState, useEffect } from 'react'
import AppList from 'components/AppList'
import { IAppCard } from 'interfaces/IAppCard'
import Container from 'components/Container'

const App: React.FC = () => {
  const [apps, setApps] = useState<IAppCard[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/apps.json')
        const data = await res.json()
        setApps(data)
      } catch (error) {
        console.error('Failed to load apps:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#111418]">
        FundedYouth.Local - Apps
      </h2>
      <AppList apps={apps} />
    </Container>
  )
}

export default App
