
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage_container'>
        <div className='homepage_left'>
            <p className='homepage_left_h1'>
               <span className='red_color'> Hi, </span>
                 My Name Is
            </p>
            <p className='homepage_left_h2'>Maleena Sultana</p>
            <p className='homepage_left_h3'>
                Upcoming Full Stack Developer From <span className='red_color'>
                    Relevel by Unacademy
                </span>
            </p>
            <p className='homepage_left_description'>
                I am very dedicated and passionate about my work and trying my<br/>
                best to learn everything for my bright future and I want to give <br/>  
                my best to the Company which gives me a chance to grow with it.
            </p>
            <div>
                <a href="https://github.com/maleenasultana" target="_blank">
                    <img src='https://img.icons8.com/3d-fluency/94/null/github.png' alt="my github page"/>
                </a>
                <a href="" target="_blank">
                    <img src='https://img.icons8.com/clouds/100/null/linkedin.png' alt='my linkedin page'/>
                </a>
             
            </div>
              <a href='mailto:maleena.sohail@gmail.com'><button className='homepage_left_button'>Get In Touch</button></a>
            </div> 
            <div className="homepage_right">
                <img src="https://www.bing.com/th/id/OGC.320e3db11f863da81adf63ecf9fed385?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fxT39CV47COkGPZO3HG%2fgiphy.gif&ehk=AjgEMffq0%2fO5tbzHej6hX8HK6WgqtAEYt1qQQUQx3io%3d" alt=""/>
               </div>
    </div>
  )
} 

export default Homepage