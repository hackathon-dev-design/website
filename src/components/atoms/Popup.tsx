'use client'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface PopupProps {
  open: boolean
  onClose: () => void
  children?: React.ReactNode
}

function Popup({ open, onClose, children }: PopupProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-lg transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                role="dialog"
                aria-labelledby="dialog1Title"
                className="relative transform overflow-hidden bg-black/50 border-[1px] border-white/30 sm:my-8 rounded-lg rounded-tr-none text-left shadow-xl transition-all sm:w-full sm:max-w-screen-sm "
              >
                <div className="absolute top-2 right-2">
                  <button
                    aria-label="close popup"
                    className="text-gray-500 hover:text-white transition-colors p-1"
                    onClick={onClose}
                  >
                    <XMarkIcon className="w-7 h-7" />
                  </button>
                </div>

                <div className="px-4 pb-4  sm:p-6 pt-7 bg-sky-900/20">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

Popup.Title = function PopupTitle({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Title
      as="h3"
      className="text-2xl font-semibold leading-6 text-white pb-4 text-center"
    >
      {children}
    </Dialog.Title>
  )
}

Popup.Description = function PopupDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dialog.Description className="text-sm font-light leading-5 text-white/50 py-2">
      {children}
    </Dialog.Description>
  )
}

export default Popup
