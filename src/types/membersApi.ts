interface IGetMemberResponse {
  id: string
  name: string
  profile_image: string
  stack: string
  community_level: string
  professional_profile_url: [
    {
      platform: string
      url: string
    }
  ]
  skills: {id: string, name: string}[]
  projects: [{
    id: string
    project_cover: string
    project_name: string
    description: string
    technologies: [string]
    project_url: string
  }
  ]
}

export type { IGetMemberResponse }
