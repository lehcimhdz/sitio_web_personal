
import { renderHook, act } from '@testing-library/react'
import useScrollPosition from '@/hooks/useScrollPosition'

describe('useScrollPosition', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
  })

  it('returns false when page has not scrolled past the threshold', () => {
    const { result } = renderHook(() => useScrollPosition(20))
    expect(result.current).toBe(false)
  })

  it('returns true when scrollY exceeds the threshold', () => {
    const { result } = renderHook(() => useScrollPosition(20))

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(true)
  })

  it('returns false when scrollY is at the threshold', () => {
    const { result } = renderHook(() => useScrollPosition(20))

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 20, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(false)
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useScrollPosition(20))
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })
})
