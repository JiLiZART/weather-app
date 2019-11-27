import React from 'react';
import styled from '@emotion/styled';
import { Card } from '../card/Card';
import memoize from 'fast-memoize';

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const onRemove = memoize((props, item) => () => props.onItemRemove(item));

export const CardList = ({ items, onItemRemove }) => (
	<List>
		{items.map(item => <Card {...item} onRemove={onRemove({ onItemRemove }, item)} />)}
	</List>
);
