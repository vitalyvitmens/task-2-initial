import './index.css'
import { getLocalStorage } from './utils/localeStorage'

const modal = document.querySelector(`.cookie-consent`)

const isCookie = getLocalStorage(`cookie`)
if (!isCookie) {
  modal.addEventListener(`click`, ({ target, currentTarget }) => {
    if (target.closest(`.cookie-consent__button`)) {
      currentTarget.remove()
      localStorage.setItem(`cookie`, true)
    }
  })
} else {
  modal.remove()
}
