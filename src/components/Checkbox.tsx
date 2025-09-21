import React from 'react'
import { classNames } from '../utils'
import { useAppSelector } from '../store/hooks'
import { selectIsDark } from '../store/features/dark/dark.slice'

interface CheckboxProps {
  checked: boolean
  partial?: boolean
  className?: string
  onChange: (checked: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = props => {
  const { checked, partial = false, onChange, className = '' } = props

  const isDark = useAppSelector(selectIsDark)

  return (
    <button /* NOSONAR */
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={() => onChange(!checked)}
      onKeyDown={e => e.key === 'Enter' && onChange(!checked)}
      className={classNames(
        'flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded transition-colors',
        getCheckboxStateClass(checked, partial),
        className,
      )}
    >
      {checked && (
        <img
          src={isDark ? '/icons/checkbox_dark.svg' : '/icons/checkbox.svg'}
          alt=""
        />
      )}
      {partial && !checked && (
        <div className="bg-light dark:bg-dark h-0.5 w-1.5 rounded-sm" />
      )}
    </button>
  )
}

function getCheckboxStateClass(checked: boolean, partial: boolean): string {
  if (checked) return 'bg-light dark:bg-dark'
  if (partial) return 'bg-dark dark:bg-light'
  return 'border-dark/20 dark:border-light/20 border-2'
}
