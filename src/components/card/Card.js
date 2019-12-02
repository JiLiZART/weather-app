import React from 'react';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import { Actions, Body, Header, Meta, MetaItem, Temp, TempImage, TempName, Title, Type } from './cardStyles';
import { createExecuteMap, preventedEvent } from '../../helpers/event';
import { KEY_BACKSPACE } from '../../helpers/keycodes';

export const Card = ({ title, temp, weather, wind, humidity, pressure, icon, onKeyDown, onRemove }) => (
	<Body onKeyDown={onKeyDown} tabIndex="0">
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

export default compose(
	withHandlers({
		onBackspace: props => (e) => {
			if (props.onRemove) {
				props.onRemove(e);
			}
		}
	}),
	withHandlers({
		onKeyDown: props => (e) => {
			createExecuteMap({
				key: e.keyCode,
				map: {
					[KEY_BACKSPACE]: preventedEvent(props.onBackspace)
				},
				props: [e]
			});
		}
	})
)(Card);
