import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Category, FixedExpense, User } from '../../types';
import LinkButton from '../LinkButton/LinkButton';
import FixedExpenseList from './FixedExpenseList/FixedExpenseList';
import style from './Budget.module.scss';
import BackButton from '../BackButton/BackButton';
import PieChart from '../PieChart/PieChart';

type Props = {
  user: User;
  categories: Category[];
  fixedExpenses: FixedExpense[];
};

class Budget extends React.Component<Props & RouteComponentProps, {}> {
  public render() {
    const { income } = this.props.user;
    return (
      <div className={style.container}>
        <BackButton />
        <div className={style.info}>
          <PieChart outerRadius="12rem" innerRadius="7rem">
            {income.toLocaleString('en', { style: 'currency', currency: 'usd' })}
          </PieChart>
        </div>
        <h3 className={style.title}>I would like to:</h3>
        <div>
          <LinkButton style={{ marginBottom: '0.5rem' }} to="./add-monthly-expense">
            Add new monthly expense
          </LinkButton>
          <div style={{ display: 'flex' }}>
            <LinkButton style={{ marginRight: '0.5rem' }} to="/">
              Modify my goal
            </LinkButton>
            <LinkButton to="/">Modify my income</LinkButton>
          </div>
        </div>
        <h3 className={style.title}>Fixed expenses</h3>
        <FixedExpenseList expenses={this.props.fixedExpenses} />
        <h3 className={style.title}>Goal</h3>
      </div>
    );
  }
}

export default Budget;
