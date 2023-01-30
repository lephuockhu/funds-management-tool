import * as React from 'react';
import Button from '@mui/material/Button';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
        <div>
            <Button variant="contained">Hello World</Button>
        </div>
    </MainLayout>
  );
}
