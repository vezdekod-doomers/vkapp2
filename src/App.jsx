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
            <UserCard
                avatar={A}
                name={'Евсеев Роман'}
                role={'Геймдизайнер'}
                link={'https://vk.com/iacubovich'}
                description={'Геймдизайнер, может сразу найти решение задачи и объяснить его всем членам команды. Легко находит общий язык её членами. Готов помочь и выручить в любой ситуации, сделает все во благо команды.'}
            />
            <UserCard
                avatar={Me}
                name={'Алексей Арсеньев'}
                role={'FullStack разработчик'}
                link={'https://vk.com/id165148720'}
                description={'Является нашим главным мозгом, может с лёгкостью найти ошибку в коде и исправить её. Также Алексей всегда готов прийти, на помощь даже если это будет ему во вред. Человек трудолюбивый, целеустремлённый и решительный.'}
            />
            <UserCard
                avatar={B}
                name={'Глеб Фомин'}
                role={'Робототехник'}
                link={'https://vk.com/gfomin2017'}
                description={'Робототехник, из чего угодно сможет собрать робота, который будет отлично функционировать. Всегда готов взять на себя дополнительный задания и сделать их качественно. Человек слова и хорошей работы.'}
            />
            <UserCard
                avatar={C}
                name={'Мария Жук'}
                role={'Дизайнер'}
                link={'https://vk.com/ukushu_tebya_za_zub'}
                description={'Наш дизайнер; способна концентрироваться не только на внешней, но и на душевной стороне работы. Является душой нашего коллектива, всегда готова подбодрить в трудную минуту; поможет сделать красивый дизайн для любой сферы деятельности.'}

            />
        </Div>
    </Div>
}

export default App;
