import { useCounterStore } from '@/stores/useCounterStore'
import { storeToRefs } from 'pinia'

export const canUserAccess = () => {
  const store = useCounterStore()
  const { count } = storeToRefs(store)
  return count.value % 2 == 0
}
