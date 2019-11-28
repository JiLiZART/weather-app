import React from 'react';
import Autocomplete from './Autocomplete';
import Input from '../input/Input';

const AutocompleteInput = ({ renderAutocomplete, onAutocompleteChange, data, error, value, isLoading, ...props }) => (
	<Autocomplete
		renderAutocomplete={renderAutocomplete}
		onAutocompleteChange={onAutocompleteChange}
		data={data}
		error={error}
		value={value}
		isLoading={isLoading}
	>
		{(inputProps) => (
			<Input {...props} {...inputProps} value={value} />
		)}
	</Autocomplete>
);

export default AutocompleteInput;
