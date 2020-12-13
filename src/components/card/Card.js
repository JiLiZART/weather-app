import React, { useCallback } from 'react';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import { Actions, Body, Header, Meta, MetaItem, Temp, TempImage, TempName, Title, Type } from './cardStyles';
import { createExecuteMap, preventedEvent } from '../../helpers/event';
import { KEY_BACKSPACE } from '../../helpers/keycodes';

export const Card = ({ title, temp, weather, wind, humidity, pressure, icon, style, onRemove }) => {
	const onBackspace = useCallback((e) => {
		if (onRemove) {
			onRemove(e);
		}
	}, [onRemove]);

	const onKeyDown = useCallback((e) => {
		createExecuteMap({
			key: e.keyCode,
			map: {
				[KEY_BACKSPACE]: preventedEvent(onBackspace)
			},
			props: [e]
		});
	}, [onBackspace]);

	return (
		<Body onKeyDown={onKeyDown} tabIndex="0" style={style}>
			<Header>
				<Title>{title}</Title>
				<Temp>
					<TempName>{temp}</TempName>
					<TempImage src={icon} />
				</Temp>
				<Type>{weather}</Type>
				<Actions>
					<Button.Secondary tabIndex="-1" type="outline" rounded onClick={onRemove}><Icon.Remove /></Button.Secondary>
				</Actions>
			</Header>
			<Meta>
				<MetaItem><Icon.Wind />{wind}</MetaItem>
				<MetaItem><Icon.Humidity />{humidity}</MetaItem>
				<MetaItem><Icon.Pressure />{pressure}</MetaItem>
			</Meta>
		</Body>
	);
};

export default Card
