export interface Technology {
  name: string
  icon: string
  color: string
}
export interface Project {

  title: string
  description: string
  images: string[]
  repo?: string
  usedTechnologies: Technology[]
}
