import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  ButtonGroup,
  FormErrorMessage,
} from '@chakra-ui/core';
import Layout from '../../components/Layout';
import { addDeal } from '../../lib/data/deals';
import { useMutation } from 'react-query';

const Add = () => {
  const { handleSubmit, errors, register } = useForm();
  const [mutate, { isLoading }] = useMutation(addDeal);

  const onSubmit = (values) => {
    mutate(values);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.title}>
          <FormLabel htmlFor="name">Deal</FormLabel>
          <Input
            name="title"
            size="sm"
            variant="filled"
            isInvalid={errors.title}
            ref={register({ maxLength: 100, minLength: 1 })}
          />
          {errors.title && (
            <FormErrorMessage>Must have 10 to 100 characters</FormErrorMessage>
          )}

          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            variant="filled"
            name="description"
            ref={register({ maxLength: 500, minLength: 1 })}
            isInvalid={errors.description}
            isRequired={true}
            size="sm"
          />
          {errors.description && (
            <FormErrorMessage>Must have 10 to 500 characters</FormErrorMessage>
          )}
        </FormControl>
        <ButtonGroup spacing={4}>
          <Button
            mt={4}
            variantColor="teal"
            isLoading={isLoading}
            type="submit"
          >
            Post
          </Button>
        </ButtonGroup>
      </form>
    </Layout>
  );
};

export default Add;
