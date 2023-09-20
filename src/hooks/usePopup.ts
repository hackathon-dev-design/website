import { useCallback, useMemo, useState } from 'react'

export default function usePopup(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return useMemo(() => ({ isOpen, open, close }), [open, close, isOpen])
}
