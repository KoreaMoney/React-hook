import React, { useState } from 'react';
import Page from './useContext/Page';
import { UsePage } from './useContext/UsePage';
/**
 * @brief useContext
 * @author Kim Dowon
 * @Date 23.08.27.
 * @returns
 * 🌵컴포넌트 트리 구조
 * 1. App안에서 전역적으로 사용하기 쉽게 하기 위해 사용
 * 2. 상위 컴포넌트에서 하위 컴포넌트에 필요한 값을 전달한다
 * 💡Data를 C와 E에게 전달하려면 쉽게 바로 줄 수 있다. 즉 props를 하지 않아도 된다
 * 3. APP -> A -> C (쉽게 그냥 받을 수 있다.)
 * 4. APP -> B -> D -> E (쉽게 그냥 받을 수 있다.)
 *
 * ⚠️ Context hook을 사용하면 컴포넌트를 재 사용하기 어려워 진다
 * 그러니 꼭 필요한 곳에만 사용해야 한다
 * Prop drilling만 피하려면 사용하지 마라
 */

const UseContext = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <div>
            {/* <Page isDark={isDark} setIsDark={setIsDark} /> */}
            <UsePage.Provider value={{ isDark, setIsDark }}>
                <Page />
            </UsePage.Provider>
        </div>
    );
};

export default UseContext;
