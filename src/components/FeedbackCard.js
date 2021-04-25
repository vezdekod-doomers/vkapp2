import React, {useEffect, useMemo, useState} from 'react';
import {
    Div,
    useAdaptivity,
    ViewWidth,
    Title,
    FormItem,
    Input,
    Button,
    FormStatus
} from "@vkontakte/vkui";
import styles from './FeedbackCard.module.css';
import {debounce} from "@vkontakte/vkjs";

function FeedbackCard() {
    const adaptive = useAdaptivity();
    const isMobile = adaptive.viewWidth <= ViewWidth.MOBILE;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subbed, setSubbed] = useState(false);
    const [subbedFade, setSubbedFade] = useState(false);
    const subFalse = useMemo(() => debounce(() => {
        setSubbedFade(true);
        setSubbed(false);
        setTimeout(() => setSubbedFade(false), 240);
    }, 2000), []);
    useEffect(() => {
        if (subbed) {
            subFalse();
        }
    }, [subbed]);
    return <Div className={styles.container + ' ' + (isMobile ? styles.mobile : '')}>
        <Title weight={'bold'} level={'2'}>Подписаться на новости</Title>
        {(subbed || subbedFade) && (
            <FormItem>
                <FormStatus className={styles.status + ' ' + (subbedFade ? styles.fadeout : '')} header={'Подписка выполнена'} mode={'default'}>Спасибо, что подписались на нас!</FormStatus>
            </FormItem>
        )}
        <FormItem top={'Имя'} className={styles.form}>
            <Input type={'text'} required placeholder={'Иванов Иван'} value={name} onChange={(e) => setName(e.target.value)} />
        </FormItem>
        <FormItem top={'E-mail'} className={styles.form}>
            <Input type={'email'} required placeholder={'test@example.com'} value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormItem>
        <Button disabled={name.length === 0 || email.length === 0} className={styles.button} onClick={() => {
            if (email.length > 0 && name.length > 0) {
                setSubbed(true);
                setName('');
                setEmail('')
            }
        }}>
            Подписаться
        </Button>
    </Div>
}

export default FeedbackCard;
