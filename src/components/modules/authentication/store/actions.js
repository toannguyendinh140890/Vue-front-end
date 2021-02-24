const handleLogin = (commit, access_token) => {
    commit('login', access_token)
}
export const loginSys = ({commit}) => {
    handleLogin(commit,true)
}