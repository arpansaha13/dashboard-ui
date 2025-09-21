// Accordion.tsx
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react'
import { classNames } from '../utils'
import { selectIsDark } from '../store/features/dark/dark.slice'
import { useAppSelector } from '../store/hooks'

type AccordionContextType = {
  isOpen: boolean
  toggle: () => void
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
)

type AccordionProps = {
  children: React.ReactNode
  initialOpen?: boolean
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  initialOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const toggle = useCallback(() => setIsOpen(prev => !prev), [setIsOpen])

  const value = useMemo(() => ({ isOpen, toggle }), [isOpen, toggle])

  return (
    <AccordionContext.Provider value={value}>
      <div className={className} aria-expanded={isOpen}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within <Accordion>')
  }
  return context
}

type AccordionButtonProps = {
  children: React.ReactNode
  className?: string
}

export const AccordionButton: React.FC<AccordionButtonProps> = props => {
  const { children, className = '' } = props

  const isDark = useAppSelector(selectIsDark)
  const { isOpen, toggle } = useAccordionContext()

  return (
    <button
      className={classNames(
        'hover:bg-dark/5 flex w-full cursor-pointer items-center gap-1.5 rounded py-1.5 text-left text-sm',
        className,
      )}
      onClick={toggle}
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && toggle()}
      aria-expanded={isOpen}
      aria-controls="accordion-panel"
    >
      <img
        className={classNames('size-icon', isOpen ? 'rotate-90' : '')}
        src={isDark ? '/icons/arrow-dark.svg' : '/icons/dropArrow.svg'}
        alt="Drop Arrow"
      />

      {children}
    </button>
  )
}

type AccordionPanelProps = {
  children: React.ReactNode
  className?: string
}

export const AccordionPanel: React.FC<AccordionPanelProps> = props => {
  const { children, className = '' } = props

  const { isOpen } = useAccordionContext()

  if (!isOpen) {
    return null
  }

  return (
    <div className={className} id="accordion-panel" aria-hidden={!isOpen}>
      {children}
    </div>
  )
}
