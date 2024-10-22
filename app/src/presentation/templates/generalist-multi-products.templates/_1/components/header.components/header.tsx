import React from 'react';
import Image from 'next/image';
import HeaderSocialContainer from './header-social-container';
import HeaderAlertNews from './header-alert-news';
import HeaderTopAction from './header-top-actions';
import Input from '../input.components/input';
import HeaderUserActions from './header-user-actions';

const Header: React.FC = () => {
    return (
        <>
            {/* Top Header */}
            <div className="flex flex-row py-3">
                <div className="flex-1 flex justify-start">
                    <HeaderSocialContainer />
                </div>

                <div className="flex-1 flex justify-center">
                    <HeaderAlertNews
                        topic={'Expédition gratuite'}
                        description={'Tout commande à partir de - $55'}
                    />
                </div>

                <div className="flex-1 flex justify-end">
                    <HeaderTopAction />
                </div>
            </div>
            {/* Main Header */}
            <div className="flex flex-row py-3">
                <a href="" className="flex-1 flex justify-start">
                    <b className="text-charcoalgrayP1 text-4xl">Hénoc's shop</b>
                </a>
                <div className="flex-1 flex justify-center">
                    <Input
                        type={'search'}
                        name={'search'}
                        icon={'search'}
                        placeholder={'Saisissez le nom de votre produit...'}
                        required={true}
                    />
                </div>
                <div className="flex-1 flex justify-end">
                    <HeaderUserActions />
                </div>
            </div>
        </>
    );
};

export default Header;
