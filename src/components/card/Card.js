import React from 'react';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import { Actions, Body, Header, Meta, MetaItem, Temp, TempImage, TempName, Title, Type } from './cardStyles';

export const Card = ({ title, temp, weather, wind, humidity, pressure, icon, onRemove }) => (
	<Body>
		<Header>
			<Title>{title}</Title>
			<Temp>
				<TempName>{temp}</TempName>
				<TempImage src={icon} />
			</Temp>
			<Type>{weather}</Type>
			<Actions>
				<Button.Secondary type="outline" rounded onClick={onRemove}><Icon.Remove /></Button.Secondary>
			</Actions>
		</Header>
		<Meta>
			<MetaItem><Icon.Wind />{wind}</MetaItem>
			<MetaItem><Icon.Humidity />{humidity}</MetaItem>
			<MetaItem><Icon.Pressure />{pressure}</MetaItem>
		</Meta>
	</Body>
);
