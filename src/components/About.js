import React from 'react';

const About = (props) => {
    
    // const [myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle={
        color:props.mode === 'dark'?'white':'rgb(36 74 104)',
        backgroundColor:props.mode === 'dark'?'rgb(36 74 104)':'white',
    }

    
    return <div>
    <>
            <div className="container my-5" style={{color:props.mode === 'dark'?'white':'rgb(36 74 104)'}}>
            <h1>About us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Analyze Your Text
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                             TextUtils gives you a way to analyze your text quickly and effectively. Be it word count ,character count or
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is a suitable for writing text with word/ character limit 
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                          This word counter software works in any web browsers such as Chrome ,FireFox, Internet Explorer, Safari, Opera. It suits to count character in facebook, book, blog, excel, document, pdf document, essays, etc. 
                        </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        
        
    </>

    </div>;
}


export default About;