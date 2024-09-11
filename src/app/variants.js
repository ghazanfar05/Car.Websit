 export const fadein = (directin, delay) => {
    return {
        hidden: {
            y: directin === 'up' ? 40 : directin === 'down' ? -40 : 0,
            x: directin === 'left' ? 40 : directin === 'right' ? -40 : 0,
        },
        show: {
            y:0,
            x:0,
            oposity:1,
            transition: {
                type: 'tween',
                duration:0.6,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75],

            }
        }
    }
}