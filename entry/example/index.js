var good ='w22'

import img1 from './img/pic_1.jpg'
import img2 from './img/pic_2.png'
import React from './helloReact.jsx'
import './index.scss'

    async function hello () {
        const result = await fetch('http://www.baidu.con')
        console.log(result)
    }
    hello()