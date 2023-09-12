'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {SocialInput} from '@/components/ui/social-input'
import {useData} from '@/lib/context/LinkContext'
import React, {FC} from 'react'

const socialLinksProvider: SocialLinkProviderProps[] = [
  {name: 'facebook', icon: 'mdi:facebook', id: 'f'},
  {name: 'twitter', icon: 'mdi:twitter', id: 't'},
  {name: 'instagram', icon: 'mdi:instagram', id: 'ig'},
  {name: 'telegram', icon: 'mdi:telegram', id: 'tg'},
  {name: 'youtube', icon: 'mdi:youtube', id: 'y'},
  {name: 'email', icon: 'mdi:envelope', id: 'e'},
  {name: 'github', icon: 'mdi:github', id: 'gh'},
  {name: 'linkedin', icon: 'mdi:linkedin', id: 'l'},
  {name: 'whatsapp', icon: 'mdi:whatsapp', id: 'w'},
]

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

interface SocialLinksFormProps {}

const SocialLinksForm: FC<SocialLinksFormProps> = () => {
  const {data, updateSocialInfo} = useData()

  const handleInputChange = (event: InputChangeEvent) => {
    const {name, value} = event.target
    updateSocialInfo(name, value)
  }

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Social Links</CardTitle>
        <CardDescription>Enter your social media links here.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-4">
        {socialLinksProvider.map((link) => {
          return (
            <SocialInput
              key={link.name}
              id={link.name}
              name={link.id}
              icon={link.icon}
              placeholder={`${link.name}.com/johndoe`}
              value={data[link.id]}
              onChange={handleInputChange}
            />
          )
        })}
      </CardContent>
    </Card>
  )
}

export default SocialLinksForm
