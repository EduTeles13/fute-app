import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export const GreenInputNumber = ({ ...rest }) => {
  return (
    <NumberInput defaultValue={20} min={0} max={40} {...rest}>
      <NumberInputField
        height="2rem"
        borderRadius="sm"
        borderColor="primary.100"
        borderWidth="0.15rem"
        style={{ boxSizing: 'border-box' }}
      />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
