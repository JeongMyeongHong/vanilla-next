import { Home, Layout } from '@/components'
import React, {useEffect} from 'react';
import axios from "axios";
import styles from '../styles/Home.module.css'

export default function HomePage() {
  /*useEffect(() => {
    if (loginUser === null) {
        axios
            .get("http://localhost:5000/api/now")
            .then((res) => {
                var data = res.data;
                document
                    .getElementById("timeZone")
                    .innerHTML = '<h1>현재시간: ' + data.now + '<h1>'
            });
    } else {
        console.log(JSON.stringify(user))
        document.getElementById("timeZone").innerHTML = '<h1>환영합니다: ' + user.name + '<h1>'
    }
}, []);*/
return (
    <Home/>
)
}
