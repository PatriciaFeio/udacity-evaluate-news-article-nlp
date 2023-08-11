import { isValidUrl } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import { updateUi } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/results.scss'
import './styles/header.scss'

import logoImg from './images/natural-language-processing.png'

const logo = document.getElementById('logo-img')
logo.src = logoImg

export {
    isValidUrl,
    handleSubmit,
    updateUi
}

alert("I EXIST")
console.log("CHANGE!!");

