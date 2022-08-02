
export const setPlayerToStorage = ( name, count, time) => {
    const leaderList = JSON.parse(localStorage.getItem("leaderlist")) || []
    const obj = {
        nickname: name,
        clicks: count,
        time: time,
        score: count*time
    }
    leaderList.push(obj)
    leaderList.sort((a, b) => a.score - b.score)
    localStorage.setItem("leaderlist", JSON.stringify(leaderList.slice(0, 10)))
}

export const getListFromStorage = () => {
    return  JSON.parse(localStorage.getItem("leaderlist")) || []
}