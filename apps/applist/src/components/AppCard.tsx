import React from 'react'
import { IAppCard } from 'interfaces/IAppCard'

interface AppCardProps {
  data: IAppCard
}

const AppCard: React.FC<AppCardProps> = ({ data }) => {
  let finalUrl = '#'

  if (typeof window !== 'undefined') {
    const isExternal =
      data.url?.startsWith('http://') || data.url?.startsWith('https://')

    if (isExternal) {
      finalUrl = data.url
    } else {
      const { protocol, hostname } = window.location
      const port = data.port ? `:${data.port}` : ''
      const path = data.url?.startsWith('/') ? data.url : `/${data.url ?? ''}`
      finalUrl = `${protocol}//${hostname}${port}${path}`
    }
  }

  return (
    <div className="flex h-full min-w-40 flex-1 flex-col gap-4 rounded-lg">
      <a href={finalUrl} target="_blank" rel="noopener noreferrer">
        <div
          className="flex aspect-square w-full flex-col rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${data.image}")` }}
        />
      </a>
      <div>
        <p className="text-base font-medium leading-normal text-[#111418]">
          {data.title}
        </p>
        <p className="text-sm font-normal leading-normal text-[#60758a]">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default AppCard
