import type { PropsWithChildren } from 'react'
import { classNames } from '../utils/classNames'

// Table
type TableProps = PropsWithChildren<{
  className?: string
}>

export function Table({ children, className }: TableProps) {
  return (
    <table
      className={classNames('w-full border-collapse', className)}
      role="table"
    >
      {children}
    </table>
  )
}

// THead
type THeadProps = PropsWithChildren<{
  className?: string
}>

export function THead({ children, className }: THeadProps) {
  return (
    <thead className={classNames('', className)} role="rowgroup">
      {children}
    </thead>
  )
}

// TBody
type TBodyProps = PropsWithChildren<{
  className?: string
}>

export function TBody({ children, className }: TBodyProps) {
  return (
    <tbody
      className={classNames(
        'divide-dark/5 dark:divide-light/10 divide-y',
        className,
      )}
      role="rowgroup"
    >
      {children}
    </tbody>
  )
}

// TRow
type TRowProps = PropsWithChildren<{
  className?: string
}>

export function TRow({ children, className }: TRowProps) {
  return (
    <tr className={classNames('h-10', className)} role="row">
      {children}
    </tr>
  )
}

// TCell
type TCellProps = PropsWithChildren<{
  className?: string
  isHeader?: boolean
}>

export function TCell({ children, className, isHeader = false }: TCellProps) {
  const Component = isHeader ? 'th' : 'td'
  return (
    <Component
      className={classNames(
        'text-xs',
        isHeader &&
          'dark:text-light/40 text-dark/40 dark:border-light/10 border-b border-[#e5e7eb] text-left font-medium',
        className,
      )}
      role={isHeader ? 'columnheader' : 'cell'}
    >
      {children}
    </Component>
  )
}
