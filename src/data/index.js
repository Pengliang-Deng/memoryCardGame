
import aws_img from './icons/aws.svg';
import css3_img from './icons/css3.svg';
import github_img from './icons/github.svg';
import heroku_img from './icons/heroku.svg';
import html5_img from './icons/html5.svg';
import js_img from './icons/js.svg';
import linkedin_img from './icons/linkedin.svg';
import front_img from './icons/m.png';
import nodejs_img from './icons/nodejs.svg';
import react_img from './icons/react.svg';
import sass_img from './icons/sass.svg';
import apple_img from './icons/apple.png';
import orange_img from './icons/orange.png';
import pear_img from './icons/pear.png';
import tree_img from './icons/tree.png';
import sun_img from './icons/sun.png';
import moon_img from './icons/moon.png';
import cat_img from './icons/cat.png';


export const uniqueCardsArray = [
    {
        type:'aws',
        img: aws_img
    },
    {
        type:'css3',
        img:css3_img
    },
    {
        type:'github',
        img:github_img
    },
    {
        type:'heroku',
        img:heroku_img
    },
    {
        type:'html5',
        img:html5_img
    },
    {
        type:'js',
        img:js_img
    },
    {
        type:'linkedin',
        img:linkedin_img
    },
    {
        type:'nodejs',
        img:nodejs_img
    },
    {
        type:'react',
        img:react_img
    },
    {
        type:'sass',
        img:sass_img
    },
    {
        type:'heroku',
        img:heroku_img
    },    
    {
        type:'apple',
        img:apple_img
    },    
    {
        type:'orange',
        img:orange_img
    },    
    {
        type:'pear',
        img:pear_img
    },    
    {
        type:'tree',
        img:tree_img
    },    
    {
        type:'sun',
        img:sun_img
    },    
    {
        type:'moon',
        img:moon_img
    },    
    {
        type:'cat',
        img:cat_img
    },      
    {
        type:'front',
        img:front_img
    },
    
]

export const initGameData = [
    {
        initScore: 0,
        initLevel: 1,
        initTimer: 60
    }
]

export const levelInfo = [
    {
      level : 1,
      layout : '1fr 1fr',
      numOfType : 2,
      cards:[0, 0, 1, 1] 
    },
    { level : 2,
      layout : '1fr 1fr 1fr 1fr',
      numOfType : 8,
      cards: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
    },
    {
      level : 3,
      layout : '1fr 1fr 1fr 1fr 1fr 1fr',
      numOfType : 18,
      cards: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
            11, 11, 12, 12, 13,13,14,14,15,15,16,16,17,17]
    }
  ]

// export default uniqueCardsArray, initGameData};