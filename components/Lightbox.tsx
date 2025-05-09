'use client'

import type React from 'react'

import { useState, useCallback, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

interface LightboxProps {
  items: ReactNode[]
  currentIndex: number | null
  onIndexChange: (index: number | null) => void
}

export function Lightbox({ items, currentIndex, onIndexChange }: LightboxProps) {
  const handlePrevious = useCallback(() => {
    if (currentIndex === null) return

    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1)
    } else {
      onIndexChange(items.length - 1)
    }
  }, [currentIndex, items.length, onIndexChange])

  const handleNext = useCallback(() => {
    if (currentIndex === null) return

    if (currentIndex < items.length - 1) {
      onIndexChange(currentIndex + 1)
    } else {
      onIndexChange(0)
    }
  }, [currentIndex, items.length, onIndexChange])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    },
    [handleNext, handlePrevious]
  )

  return (
    <Dialog
      open={currentIndex !== null}
      onOpenChange={isOpen => onIndexChange(isOpen ? currentIndex : null)}>
      <DialogOverlay className="bg-black/30" />
      <DialogContent
        className="max-w-full h-screen sm:max-w-5xl border-none bg-transparent shadow-none p-0 flex items-center justify-center"
        onKeyDown={handleKeyDown}
        tabIndex={0}>
        <VisuallyHidden>
          <DialogTitle>Lightbox</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-full flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 rounded-full bg-black/20 hover:bg-black/40 text-white"
            onClick={() => onIndexChange(null)}>
            <X className="h-5 w-5" />
            <span className="sr-only">關閉</span>
          </Button>

          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 rounded-full bg-black/20 hover:bg-black/40 text-white"
                onClick={handlePrevious}>
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">上一張</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-50 rounded-full bg-black/20 hover:bg-black/40 text-white"
                onClick={handleNext}>
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">下一張</span>
              </Button>
            </>
          )}

          <div className="w-full h-full flex items-center justify-center p-4">
            {currentIndex !== null && items[currentIndex]}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
