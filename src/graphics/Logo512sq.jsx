
import React from 'react'

const Logo512sq = props => {

    const { color } = props
    let c = `#000`
    if (color) {
        c = color
    }

    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 512 512" >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fillRule="nonzero">
                        <rect fillOpacity="0.01" fill="#FFFFFF" x="0" y="0" width="512" height="512"></rect>
                        <g id="phone" transform="translate(131.000000, 59.000000)" fill={c}>
                            <path d="M215.117227,0.179545455 L35.7033595,0 C15.9678342,0 0,16.1590909 0,35.9090909 L0,359.090909 C0,378.840909 15.9678342,395 35.7033595,395 L215.117227,395 C234.852752,395 251,378.840909 251,359.090909 L251,35.9090909 C251,16.1590909 234.852752,0.179545455 215.117227,0.179545455 Z M215.117227,323.181818 L35.7033595,323.181818 L35.7033595,71.8181818 L215.117227,71.8181818 L215.117227,323.181818 Z"></path>
                        </g>
                        <g transform="translate(176.000000, 158.000000)" fill={c}>
                            <circle cx="78" cy="20" r="20"></circle>
                            <path d="M117.010391,60.1835 C113.172372,56.342 106.578851,49.25 93.7854523,49.25 C91.7188264,49.25 79.8111247,49.25 68.7891198,49.25 C41.7261614,49.1515 19.6821516,27.0875 19.6821516,0 L0,0 C0,31.126 20.7646699,57.524 49.205379,66.0935 L49.205379,197 L68.8875306,197 L68.8875306,137.9 L88.5696822,137.9 L88.5696822,197 L108.251834,197 L108.251834,79.2925 L147.124083,118.2 L161,104.3115 L117.010391,60.1835 Z" ></path>
                        </g>
                    </g>
                </g>                
            </svg>
        </React.Fragment>
    )
}
export default Logo512sq
