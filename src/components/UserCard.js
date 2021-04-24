import React from 'react';
import {Div, Avatar, Caption, Text, useAdaptivity, ViewWidth} from "@vkontakte/vkui";
import {Icon24Linked} from "@vkontakte/icons";
import styles from './UserCard.module.css';

function UserCard(props) {
    const adaptive = useAdaptivity();
    const isMobile = adaptive.viewWidth <= ViewWidth.MOBILE;
    return <Div className={styles.container + ' ' + (isMobile ? styles.mobile : '')}>
        <Div className={styles.header}>
            <Avatar src={props.avatar} className={styles.avatar} size={48} shadow={false} />
            <Div className={styles.headermain}>
                <Text weight={'medium'}>{props.name}</Text>
                <Caption weight={'regular'} level={"2"}>{props.role}</Caption>
            </Div>
            <Icon24Linked onClick={() => window.open(props.link)} />
        </Div>
        <Div>
            <Text weight={'regular'}>{props.description}</Text>
        </Div>
    </Div>
}

export default UserCard;
