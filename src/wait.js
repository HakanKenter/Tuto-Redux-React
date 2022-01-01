// fonction qui simule une promesse qui met 
// du temps à se résoudre
// permet de simuler un petit délai
export default function wait(duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve({})
        }, duration)
    })
}