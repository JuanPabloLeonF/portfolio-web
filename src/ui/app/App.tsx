import { useEffect } from 'react'
import { Header } from '../layouts/header/Header'
import './App.css'
import { applyTheme, getSystemLocalStorage, getSystemTheme } from '../../domain/utilsmodstheme'
import { SectionInit } from '../layouts/section-init/SectionInit'
import { SectionProjects } from '../layouts/section-projects/SectionProjects'
import { ProjectContextProvider } from '../layouts/section-projects/context/project-context'
import { SectionAbout } from '../layouts/section-about/SectionAbout'
import { SectionContact } from '../layouts/contact/SectionContact'

export const App = () => {

  useEffect(() => {
    applyTheme(getSystemLocalStorage() || getSystemTheme());
  }, [])

  return (
    <>
     <main>
      <Header/>
      <SectionInit/>
      <ProjectContextProvider>
        <SectionProjects/>
      </ProjectContextProvider>
      <SectionAbout/>
      <SectionContact/>
     </main>
     <div className="section-structure-1"></div>
     <div className="section-structure-2"></div>
    </>
  )
}