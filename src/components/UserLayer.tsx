import UserLayerProps from '@/types/UserLayerProps'
import Image from 'next/image'
import React from 'react'

export const UserLayer = ({ userLogoUrl, username, additionalElement, children }: UserLayerProps) => {
  return (
    <>
        <div>
            <div>
                <Image src={userLogoUrl} alt='user logo' fill />
            </div>
            <div>
                <h2>{username}</h2>
                { additionalElement }
            </div>
        </div>
        { children }
    </>
  )
}
