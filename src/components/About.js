import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btntype, setbtntype] = useState("btn btn-light")

    // const [btnText, setbtnText] = useState("Enable dark mode")


    // const toggleTheme = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtnText("Enable Light Mode")
    //         setbtntype("btn btn-light")
    //     }
    // }


    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h1 className="head my-3" >About Us</h1>
                <p>This is the demo version of our text analyser which shows you preview and word count about your text to help you understand it's complexity and readability. Also it can change text in Uppercase/Lowercase as per needs. </p>

                <ul className="container my-6">
                    <h3>Features:</h3>
                    <li>Total Word Count </li>
                    <li>Number of Characters (all)</li>
                    <li>Conversion to Uppercase</li>
                    <li>Conversion to Lowercase</li>
                    <li>Clear Text</li>
                    <li>Copy Text</li>
                    <li>Remove Extra Spaces</li>
                </ul>
            </div>
        </>
    )
}

