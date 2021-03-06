import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions'
import React from 'react';
import Search from '../components/search/search';

export default {
    component: Search,
    title: 'Search'
} as Meta;

export const Default = () => (
    <Search value={''} label={'Search'} onChange={action('onChange')} />
);

export const DifferentInput = () => (
    <Search value={'Snow'} label={'john'} onChange={action('onChange')} />
);