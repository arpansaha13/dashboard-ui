import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '../utils'

interface DrawerProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
  children: React.ReactNode
  className?: string
  direction?: 'left' | 'right'
}

const Drawer = (props: DrawerProps) => {
  const {
    open,
    setOpen,
    title,
    children,
    className,
    direction = 'right',
  } = props

  return (
    <Dialog
      open={open}
      onClose={setOpen}
      className={classNames('relative z-10', className)}
    >
      <DialogBackdrop
        transition
        className="bg-dark/40 dark:bg-light/10 fixed inset-0 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={classNames(
              'pointer-events-none fixed inset-y-0 flex max-w-full',
              direction === 'right'
                ? 'right-0 pl-10 sm:pl-16'
                : 'left-0 pr-10 sm:pr-16',
            )}
          >
            <DialogPanel
              transition
              className={classNames(
                'pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out sm:duration-700',
                direction === 'right'
                  ? 'data-closed:translate-x-full'
                  : 'data-closed:-translate-x-full',
              )}
            >
              <div className="bg-light dark:after:bg-light/10 dark:bg-dark relative flex h-full flex-col overflow-y-auto py-6 shadow-xl dark:after:absolute dark:after:inset-y-0 dark:after:left-0 dark:after:w-px">
                <div className="flex items-center justify-between px-4 sm:px-6">
                  <DialogTitle
                    className={classNames(
                      'dark:text-light text-dark text-base font-semibold',
                      !title && 'invisible',
                    )}
                  >
                    {title}
                  </DialogTitle>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-dark dark:text-light block"
                  >
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {children}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default Drawer
