import React from 'react'
import { IAppCard } from 'interfaces/IAppCard'
import AppCard from './AppCard'

interface AppListProps {
  apps: IAppCard[]
}

const AppList: React.FC<AppListProps> = ({ apps }) => {
  return (
    <>
      <div className="px-4 pb-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((appData, idx: number) => (
            <AppCard key={idx} data={appData} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AppList
