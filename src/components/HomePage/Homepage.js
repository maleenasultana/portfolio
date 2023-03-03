
import './Homepage.css'


function Homepage() {
  return (
    <>
    <div className='homepage_container my-5'>
      
        <div className='homepage_left'>
            {/* <p className='homepage_left_h1'>
               <span className='red_color'> HI, I am Maleena </span>
            </p> */}
           
            <p className='homepage_left_h5'>  </p>
            <p className='homepage_left_h4'>
                Upcoming Full Stack Developer From <span className='red_color'>
                    Relevel by Unacademy
                </span>
            </p>
            <p className='homepage_left_description'>
            I am dedicated, passionate and highly motivated to excel in my work <br/>and always strive to learn new skills to enhance my performance. I am confident that I can bring remarkable<br/>
             goals and contribute to a company’s success. </p>





            
            
              
            </div> 
            <div className='row'>
            <div className="homepage_right">
                <img  className="image" src="https://www.bing.com/th/id/OGC.320e3db11f863da81adf63ecf9fed385?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fxT39CV47COkGPZO3HG%2fgiphy.gif&ehk=AjgEMffq0%2fO5tbzHej6hX8HK6WgqtAEYt1qQQUQx3io%3d" alt=""/>
               </div></div>
                <div className='row'>
               <div>
                <a href="mailto:maleena.sohail@gmail.com"><button className='homepage_left_button'>Get In Touch</button ></a>
               </div>
              
               <span>
                <a href="https://github.com/maleenasultana" target="">
                    <img className='icon1' src='https://img.icons8.com/3d-fluency/94/null/github.png' alt="my github page"/>
                </a></span>
                <span>
                <a href="https://www.linkedin.com/in/maleena-sultana-6519a824a/" target="">
                    <img className="icon2"src='https://img.icons8.com/clouds/100/null/linkedin.png' alt='my linkedin page'/>
                </a></span>
             </div>
            
    </div>
    
    </>
  )
} 

export default Homepage