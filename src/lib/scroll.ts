export function jumpToTop() {
  const root = document.documentElement
  root.classList.remove('scroll-smooth')
  window.scrollTo(0, 0)
  root.scrollTop = 0
  document.body.scrollTop = 0
  requestAnimationFrame(() => {
    root.classList.add('scroll-smooth')
  })
}
