import React from 'react';
import "./Techstack.css";
import "./TechStackIconContainer";
import TechStackIconContainer from './TechStackIconContainer';

function Techstack() {

    const techIcons = [
        {
            iconName: "javascript",
            iconImage:"https://img.icons8.com/dusk/64/null/javascript-logo.png",
            iconAltProp:"java script logo"
        },
        {
            iconName: "HTML 5",
            iconImage:"https://img.icons8.com/color/48/null/html-5--v1.png",
            iconAltProp:"html logo"
        },
        {
            iconName: "CSS 3",
            iconImage:"https://img.icons8.com/stickers/100/null/css3.png",
            iconAltProp:"css logo"
        },
        {
            iconName: "MySql",
            iconImage:"https://img.icons8.com/fluency/48/null/mysql-logo.png",
            iconAltProp:"mysql logo"
        },
        {
            iconName: "MongoDB",
            iconImage:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
            iconAltProp:"MongoDB logo"
        },
        {
            iconName:"Mongoose",
            iconImage:"https://img.icons8.com/color/48/null/mongoose.png",
            iconAltProp:"mongoose icon"
        }
       
    ];
    const techIcons2 =[
        {
            iconName:"NodeJS",
            iconImage:"https://img.icons8.com/color/48/null/nodejs.png",
            iconAltProp:"NodeJS icon"
        },
        {
            iconName:"ExpressJS",
            iconImage:"https://img.icons8.com/color/48/null/express-js.png",
            iconAltProp:"ExpressJS icon"
        },
        {
            iconName:"Sequelize ORM",
            iconImage:"https://th.bing.com/th/id/OIP.0fVy1rYfUhFVWp-e8SoNXQAAAA?w=117&h=128&c=7&r=0&o=5&pid=1.7",
            iconAltProp:"Sequelize ORM icon"
        },
        {
            iconName:  "ReactJS",
            iconImage: "https://img.icons8.com/plasticine/100/null/react.png",
            iconAltProp:'React icon'
        },
        {
            iconName:"Redux",
            iconImage:"https://th.bing.com/th/id/OIP.95qTmeGI_OjwxWZF7q_jOAAAAA?w=251&h=180&c=7&r=0&o=5&pid=1.7",
            iconAltProp:"Redux icon"
        },
        {
            iconName: "Figma",
            iconImage: "https://www.bing.com/th?id=OIP.6zxlNVsqR_UzXWUnZND4DQHaDt&w=217&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            iconAltProp: "Figma icon"
        }
        
    ];
    const techIcons3 =[
        {
            iconName: "AWS",
            iconImage: "https://th.bing.com/th/id/OIP.S-9EjIzAEYqbP1oktJVc5wHaEw?w=247&h=180&c=7&r=0&o=5&pid=1.7",
            iconAltProp: "AWS icon"
        },
        
        {
            iconName: "React-Native(beginners)",
            iconImage: "https://www.bing.com/th?id=OIP.X0lQPk0QnmYgT_T9yW64NwHaEK&w=174&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            iconAltProp: "React-Native icon"
        },
        {
            iconName: "PHP(beginners)",
            iconImage: "https://th.bing.com/th/id/OIP.keXdU0niago_p005Q8JpnAHaEc?w=314&h=188&c=7&r=0&o=5&pid=1.7",
            iconAltProp: "PHP icon"
        },
       
        {
            iconName: "Python(Beginners)",
            iconImage: "https://th.bing.com/th/id/OIP.bB6uSUI832aC8L0qzyCAlgHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7",
            iconAltProp: "Python icon"
        },
        {
            iconName: "AngularJS(Beginners)",
            iconImage: "https://th.bing.com/th/id/OIP.ES1oqWvBEp-UgN6_QRFFVAHaFG?w=219&h=180&c=7&r=0&o=5&pid=1.7",
            iconAltProp:"AngularJS icon"
        }
    ];
  return (
    <div className='techstack_container'>
        <p className='techstack_title'>Tech Stack</p>
        <div className='techstack_icon_container'>
            {
              techIcons.map((item, index) => {
                return (
                    <TechStackIconContainer
                    image ={item.iconImage}
                    altProperty ={item.iconAltProp}
                    name={item.iconName}
                    />
                )
              })  
            }
           
        </div>
        <div className='techstack_icon_container'>
            {
              techIcons2.map((item, index) => {
                return (
                    <TechStackIconContainer
                    image ={item.iconImage}
                    altProperty ={item.iconAltProp}
                    name={item.iconName}
                    />
                )
              })  
            }
           
        </div>
        <div className='techstack_icon_container'>
            {
              techIcons3.map((item, index) => {
                return (
                    <TechStackIconContainer
                    image ={item.iconImage}
                    altProperty ={item.iconAltProp}
                    name={item.iconName}
                    />
                )
              })  
            }
           
        </div>
    </div>
  )
}

export default Techstack