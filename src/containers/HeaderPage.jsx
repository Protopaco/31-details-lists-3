import React from 'react';
import { usePagination } from '../hooks/Countries';
import Header from '../components/header/Header';

const HeaderPage = () => {
    const { changePage, page } = usePagination();

    return <Header changePage={changePage} page={page} />
}

export default HeaderPage;