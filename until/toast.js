function toast(title, icon = 'none', duration = 3000) {
  uni.showToast({
    title,
    icon,
    duration
  })
}
toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration
  })
}
toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'success',
    duration
  })
}
toast.loading = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'loading',
    duration
  })
}
export default toast
