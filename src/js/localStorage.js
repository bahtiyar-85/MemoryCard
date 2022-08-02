
export const setPlayerToStorage = ( name, score) => {
    const leaderList = JSON.parse(localStorage.getItem("leaderlist")) || []
    const obj = {
        nickname: name,
        score: score
    }
    leaderList.push(obj)
    leaderList.sort((a, b) => a.score - b.score)
    localStorage.setItem("leaderlist", JSON.stringify(leaderList.slice(0, 10)))
}

export const getListFromStorage = () => {
    return  JSON.parse(localStorage.getItem("leaderlist")) || []
}