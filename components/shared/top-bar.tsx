import React from 'react';
import { Container } from '@/components/shared/container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className="sticky top-0 bg-white pb-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories/>
          <SortPopup/>
        </Container>
      </div>
  );
};
