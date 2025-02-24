// components/content/LoadMore.tsx
import { FC } from 'react'
import { Button } from '../ui/button'
import { LoaderCircle } from 'lucide-react'
interface LoadMoreProps {
  onClick: () => void
  isLoading: boolean
  hasMore: boolean
}

const LoadMore: FC<LoadMoreProps> = ({ onClick, isLoading, hasMore }) => {
  return (
    <div className="flex justify-center mt-6">
      {hasMore && (
        <Button
          onClick={onClick}
          className="px-4 py-2 bg-primary text-white rounded-md disabled:bg-muted w-24"
        >
          {isLoading ? (
            <LoaderCircle className="animate-spin mr-2 h-5 w-5 text-white" />
          ) : (
            'Load More'
          )}
        </Button>
      )}
    </div>
  )
}

export default LoadMore
