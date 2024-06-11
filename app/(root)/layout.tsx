import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div>
            <main>
                <p className="text-white-1">
                    LEFT SIDEBAR
                </p>
                {children}
                <p className="text-white-1">
                    RIGHT SIDEBAR
                </p>
            </main>
        </div>
    );
};

export default Layout;