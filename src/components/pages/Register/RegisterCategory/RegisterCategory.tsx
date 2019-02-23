import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import style from '../Register.module.scss';
import localStyle from './RegisterCategory.module.scss';
import { LinkButton, BackButton } from '../../../buttons';
import { Category } from '../../../../types';
import { NameAmountInput } from '../../../form';
import { CATEGORY_OPTIONS } from '../../../../utils/constants';
import CategoryCard from './CategoryCard/CategoryCard';
import { Tip } from '../../../general';

type Props = {
  categories: Category[];
  handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
  handleCategoryAdd: React.MouseEventHandler;
  handleCategoryDelete: (e: React.MouseEvent, name: string) => void;
};

const RegisterCategory: React.FC<Props & RouteComponentProps> = ({
  categories,
  handleCategoryChange,
  handleCategoryAdd,
  handleCategoryDelete
}) => (
  <main className={style.container}>
    <BackButton to="income" />
    <header className={style.header}>
      <h1>Create an Account</h1>
      <p className={style.subtitle}>Step 3 of 4 &mdash; Categories</p>
    </header>
    <form className={style.form}>
      <p>What categories would you like to include in your budget?</p>
      <div className={localStyle.cards}>
        {CATEGORY_OPTIONS.map((name, index) => (
          <CategoryCard
            key={['cc', index].join('')}
            name={name}
            index={index}
            onAdd={handleCategoryAdd}
            onDelete={handleCategoryDelete}
          />
        ))}
      </div>
      <div>
        {categories.map(({ name, amount }, index) => (
          <NameAmountInput
            key={['ctg', index].join('')}
            title={['category', 'budget']}
            name={name}
            amount={amount}
            index={index}
            handler={handleCategoryChange}
            onDelete={handleCategoryDelete}
          />
        ))}
      </div>
      <Tip>We recommend having a maximum of 5 categories so you can focus on what's important.</Tip>
    </form>
    <LinkButton
      to="../goal"
      icon="arrow-right"
      style={{ display: 'flex', justifyContent: 'center' }}
    />
  </main>
);

export default RegisterCategory;