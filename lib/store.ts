import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ReadListState {
  readItems: string[]
  addReadItem: (id: string) => void
  removeReadItem: (id: string) => void
  isRead: (id: string) => boolean
  toggleReadItem: (id: string) => void
}

export const useReadListStore = create<ReadListState>()(
  persist(
    (set, get) => ({
      readItems: [],
      addReadItem: id => set({ readItems: [...get().readItems, id] }),
      removeReadItem: id => set({ readItems: get().readItems.filter(item => item !== id) }),
      isRead: id => get().readItems.includes(id),
      toggleReadItem: id =>
        set({
          readItems: get().readItems.includes(id)
            ? get().readItems.filter(item => item !== id)
            : [...get().readItems, id],
        }),
    }),
    {
      name: 'read-list-storage',
    }
  )
)
