import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
        redirect: {
            destination: '/auth',
            permanent: false,
        }
        }
    }

    return {
        props: {}
    }
}

const MyList = () => {
    const { data: favorites = [] } = useFavorites();
    const {isOpen, closeModal} = useInfoModalStore();

    return (
        <>
            <InfoModal visible={isOpen} onClose={closeModal} />
            <div className="pt-10">
                <MovieList title="My List" data={favorites} />
            </div>
        </>
    )
}

export default MyList;