const handleSubmit = async (event) => {
    event.preventDefault()

    let url = document.getElementById('url-input').value;
    console.log("::: Form Submitted :::")
    console.log(url)

    if(Client.isValidUrl(url)) {
        try {
            const response = await fetch('/analysedData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: url }),
            })
            const data = await response.json()
            console.log(data)
            updateUi(data);
        } catch (error) {
            console.log('Error', error)
        }
    } else {
        alert('Please provide a valid url')
    }
}

const updateUi = async (response) => {
    document.getElementById('result_polarity').innerHTML = checkPolarity(response.score_tag)
    document.getElementById('result_subjectivity').innerHTML = response.subjectivity
    document.getElementById('result_agreement').innerHTML = response.agreement
    document.getElementById('result_confidence').innerHTML = response.confidence
    document.getElementById('result_irony').innerHTML = response.irony
}

const checkPolarity = (val) => {
    if(val === 'P+') return 'STRONG POSITIVE'
    if(val === 'P') return 'POSITIVE'
    if(val === 'NEU') return 'NEUTRAL'
    if(val === 'N') return 'NEGATIVE'
    if(val === 'N+') return 'STRONG NEGATIVE'
    if(val === 'NONE') return 'WITHOUT POLARITY'

}

export { handleSubmit, updateUi }