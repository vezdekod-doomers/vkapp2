import {Button, Div, PanelHeader, Title, useAdaptivity, ViewWidth} from "@vkontakte/vkui";
import UserCard from "./components/UserCard";
import A from './assets/lico1.jpg';
import B from './assets/lico2.jpg';
import C from './assets/lico3.jpg';
import Me from './assets/lico4.jpg';
import Sun from './assets/sun.svg';
import Mountains from './assets/mountains.svg';
import Background from './assets/background.svg';
import styles from './App.module.css';
import {useEffect, useState} from "react";
import bridge from "@vkontakte/vk-bridge";

function App() {
    const adaptive = useAdaptivity();
    const isMobile = adaptive.viewWidth <= ViewWidth.MOBILE;
    useEffect(() => {
        bridge.subscribe(({ detail: { type, data }}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });
    }, []);
    return <Div className={'vkapp2-root'}>
        <img src={Mountains} className={styles.mountains} />
        <Div className={styles.suncontainer}>
            <img src={Sun} className={styles.sun} />
            <Title className={styles.title} weight={'heavy'} level={'1'}>Думеры</Title>
        </Div>
        <img src={Background} className={styles.background} />
        <Div className={styles.logocont}>
        </Div>
        <Div className={styles.members + ' ' + (isMobile ? styles.mobile : '')}>
            <UserCard avatar={A} name={'Евсеев Роман'} role={'Геймдизайнер'} link={'https://vk.com/iacubovich'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} />
            <UserCard avatar={Me} name={'Алексей Арсеньев'} role={'FullStack разработчик'} link={'https://vk.com/id165148720'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} />
            <UserCard avatar={B} name={'Глеб Фомин'} role={'Робототехник'} link={'https://vk.com/gfomin2017'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} />
            <UserCard avatar={C} name={'Мария Жук'} role={'Дизайнер'} link={'https://vk.com/ukushu_tebya_za_zub'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} />
        </Div>
    </Div>
}

export default App;
