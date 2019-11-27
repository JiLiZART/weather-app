import React from 'react';
import Autocomplete from './Autocomplete';
import Input from '../input/Input';

const AutocompleteInput = ({ renderAutocomplete, onAutocompleteChange, data, ...props }) => (
	<Autocomplete renderAutocomplete={renderAutocomplete} onAutocompleteChange={onAutocompleteChange} data={data}>
		{(inputProps) => (
			<Input {...props} {...inputProps} />
		)}
	</Autocomplete>
);

export default AutocompleteInput;
