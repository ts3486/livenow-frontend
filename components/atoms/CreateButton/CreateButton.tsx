import React from 'react';
import MuiButton from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export interface CreateButtonProps {
  id: string;
}

export default function CreateButton(props: CreateButtonProps) {
  return (
    <MuiButton variant='contained'>
      <AddIcon />
    </MuiButton>
  );
}
