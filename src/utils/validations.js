export const validateInput = input => {
    let error = ''
    const { value, type, required } = input
    // console.log(value, type, required)
    switch (type) {
        case 'text':
            if (!value && required) {
                error = 'User Name is required'
            }
            if (value && value.length < 4) {
                error = 'User Name must have atleast 4 characters'
            }
            console.log('username err: ', error)
            break
        case 'password':
            if (!value && required) {
                error = 'Password is a required field'
            }
            if (value && value.length < 8) {
                error = 'Password must have atleast 8 characters'
            }
            break
        default:
            error = ''
    }
    // console.log(error)
    return error
}

export const validateForm = form => {
    let error = false
    for (let key in form) {
        if (key === 'form') {
            continue;
        }
        if (form[key].error) {
            error = true
            break
        }
    }
    return error
}