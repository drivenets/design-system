import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fireEvent, userEvent, within } from '@storybook/test';
import DsDropdown from './ds-dropdown';
import { delay, DsIcon } from '@design-system/ui';
import './ds-dropdown.stories.scss';

const meta: Meta<typeof DsDropdown> = {
  title: 'Design System/Dropdown',
  component: DsDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to display inside the component',
    },
    contentGap: {
      control: 'number',
      description: 'The gap between the trigger and dropdown content in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsDropdown>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Dropdown with a custom trigger styled to match the design in the provided image. The selected value or a placeholder is shown, and a chevron icon is on the right.',
      },
    },
  },
  args: {
    options: [
      { label: 'Option 1', href: 'value1' },
      { label: 'Option 2', href: 'value2' },
      { label: 'Option 3', href: 'value3' },
    ],
    contentGap: 4,
  },
  render: args => {
    const [selected, setSelected] = useState<string>('');
    const selectedOption = args.options.find(opt => opt.href === selected);

    (args as any).__reset = async () => {
      setSelected('');
      await delay(100);
    };

    return (
      <DsDropdown {...args} selectedHref={selected} onSelect={setSelected}>
        <div className="trigger" role="button">
          <span className="selected">{selectedOption ? selectedOption.label : 'Choose an option'}</span>
          <DsIcon className="arrow" icon="arrow_drop_down" />
        </div>
      </DsDropdown>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const reset = (args as any).__reset;

    // Check initial state - no option selected
    await expect(canvas.getByText('Choose an option')).toBeInTheDocument();

    // Open dropdown
    await userEvent.click(canvas.getByText('Choose an option'));

    // Select an option from dropdown
    const dropdownOption = canvas.getByRole('menuitem', { name: /Option 1/ });
    await userEvent.click(dropdownOption);

    // Check selected option is shown in trigger
    const trigger = canvas.getByRole('button');
    await expect(within(trigger).getByText(/Option 1/)).toBeInTheDocument();

    // Open dropdown again
    await userEvent.click(trigger);

    // Check the option is marked as selected in dropdown
    const selectedOption = canvas.getByRole('menuitem', { name: /Option 1/ });
    await expect(within(selectedOption).getByText('check')).toBeInTheDocument();

    // Test search functionality
    const searchInput = canvas.getByPlaceholderText('Search');
    await userEvent.clear(searchInput);
    await fireEvent.change(searchInput, { target: { value: 'Option 1' } });

    // Check only matching option is shown
    await expect(canvas.getByRole('menuitem', { name: /Option 1/ })).toBeInTheDocument();
    await expect(canvas.queryByRole('menuitem', { name: 'Option 2' })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('menuitem', { name: 'Option 3' })).not.toBeInTheDocument();

    // Clear search
    await userEvent.clear(searchInput);

    // Close dropdown with Escape key
    await userEvent.keyboard('{Escape}');

    // Reset selection using the wrapper's reset method
    await reset();

    // Verify trigger shows placeholder after reset
    await expect(canvas.getByRole('button', { name: /Choose an option/ })).toBeInTheDocument();

    // Open dropdown again
    await userEvent.click(trigger);

    // Check all options are shown again
    await expect(canvas.getByRole('menuitem', { name: 'Option 1' })).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', { name: 'Option 2' })).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', { name: 'Option 3' })).toBeInTheDocument();

    // Close dropdown with Escape key
    await userEvent.keyboard('{Escape}');
  },
};
