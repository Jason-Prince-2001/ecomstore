import toast from 'react-hot-toast'

export const showCartPopup = () => {
  toast.success('Product Added Successfully 🔥', {
    duration: 2000,
    style: {
      background: '#111827',
      color: '#fff',
      padding: '16px',
      borderRadius: '10px',
    },
  })
}