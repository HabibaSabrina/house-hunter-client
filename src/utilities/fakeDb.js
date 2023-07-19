const getStoredCart = () =>{
    let savedUser = {}
    const getUser = localStorage.getItem('logged-user')
    if(getUser){
        savedUser = JSON.parse(getUser)
    }
    return savedUser

}
export {getStoredCart};