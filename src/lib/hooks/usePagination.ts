import { useState, useEffect } from 'react'

export const usePagination = ({ data, limit }: { data: any[]; limit: number }) => {
  const [visibleItems, setVisibleItems] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Initialize with the first "limit" items when data changes
    setVisibleItems(data.slice(0, limit))
  }, [data, limit])

  // Load more items
  const loadMore = () => {
    if (isLoading) return // Prevent loading if already in progress

    setIsLoading(true)

    setTimeout(() => {
      const nextItems = data.slice(visibleItems.length, visibleItems.length + limit)
      setVisibleItems((prevItems) => [...prevItems, ...nextItems])
      setIsLoading(false)
    }, 500) // Simulate network delay, adjust as needed
  }

  return { visibleItems, isLoading, loadMore }
}
