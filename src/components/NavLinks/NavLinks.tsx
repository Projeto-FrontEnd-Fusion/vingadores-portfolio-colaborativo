import { useContext } from 'react'
import { clsx } from 'clsx'
import { Button } from '../Button/Button'
import NavbarContext from '../../store/NavbarContext'

const NavLinks = () => {
  const baseClass = 'bg-[#1C1A40] absolute top-0 left-0 flex flex-col h-lvh w-screen transition-all duration-1000 ease-in-out hb:flex-row nav:absolute hb:absolute'
  const openClass = 'max-h-lvh touch-none'
  const closedClass = 'max-h-0 overflow-hidden hb:relative hb:h-fit hb:max-h-fit hb:w-fit hb:bg-transparent'
  const links = ['Equipes', 'Projetos', 'Tecnologias']

  const { isOpen, setIsOpen } = useContext(NavbarContext)

  return (
    <ul
      className={clsx(baseClass, { [openClass]: isOpen, [closedClass]: !isOpen })}
    >
      {
        links.map((link) => {
          return (
            <li key={link} className={clsx("m-3 first:mt-28 decoration-2 hb:mt-auto transition-opacity duration-1000 ease-in-out hb:opacity-100 hb:first:mt-auto ",
              { 'opacity-100': isOpen, 'opacity-0': !isOpen })}>
              <a
                className={`
                text-fusion-l-blue
                ml-2 
                transition-colors
                duration-500
                hover:text-fusion-l-blue-hover
                active:text-fusion-blue-active
                hb:text-gray-50 
                hb:hover:underline 
                hb:underline-offset-8 
                hb:decoration-2 
                hb:ease-in-out
                `}
                href={`#${link}`}
                onClick={() => {
                  setIsOpen(false)
                }}
                >
                {link}
              </a>
              <hr className="mt-2 border-fusion-l-blue hb:hidden" />
            </li>
          )
        })
      }
      <li className={clsx("m-3 self-center transition-opacity duration-1000 ease-in-out hb:opacity-100", { 'opacity-100': isOpen, 'opacity-0': !isOpen })}>
        <Button isNavbar={true} />
      </li>
    </ul>

  )
}

export default NavLinks
