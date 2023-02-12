import React from 'react';
import Marquee from 'react-fast-marquee';
import { useNewsString } from '../../hooks/useNewsString';

import './NewsLine.style.scss';

function NewsLine() {
    const { isLoading, newsString } = useNewsString();

    return (
        <div className="news-line">
            <Marquee gradient={false} speed={1} play>
                {isLoading ? 'Loading...' : newsString}
            </Marquee>
        </div>
    );
}

export default NewsLine;
