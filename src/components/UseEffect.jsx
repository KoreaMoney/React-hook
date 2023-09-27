import React, { useEffect, useState } from 'react';
/**
 * @brief useMemo
 * @author Kim Dowon
 * @Date 23.08.27.
 * @returns
 * useEffect( 콜백 함수, [의존성 배열])
 *
 * 1. 사용하는 조건
 * 함수가 마운트가 되었을때
 * 콜백 함수 이후 의존성 배열의 값이 변할 때
 * 함수가 언 마운트가 되었을 때
 *
 * 2. 불필요한 렌더링을 막아서 데이터 낭비를 줄인다.
 * 3. 렌더링이 자주되면 데이터가 많이 쌓여 코드가 무거워져 웹환경이 느려지는 현상이 생긴다
 *
 * 작동한다.
 */

const UseEffect = () => {
    console.log('함수 전체가 렌더링됩니다');
    const [count, setCount] = useState(0); // State 변경되면 rendering
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    // 의존성 배열이 없는 경우
    useEffect(() => {
        console.log('렌더링을 합니다 🎢');
    });

    // // 의존성 배열만 있는 경우
    // useEffect(() => {
    //     console.log('렌더링을 합니다 🎢');
    // }, []);

    // // 의존성 배열이 있는 경우 (count일 경우)
    // useEffect(() => {
    //     console.log('숫자가 렌더링을 합니다 💡');
    // }, [count]);

    // // 의존성 배열이 있는 경우 (name일 경우)
    // useEffect(() => {
    //     console.log('이름이 렌더링을 합니다 📺');
    // }, [name]);

    return (
        <div>
            <button onClick={handleCountUpdate}>update</button>
            <span>업데이트 : {count}</span>
            <input type="text" value={name} onChange={handleInputChange} />
            <p>name : {name}</p>
        </div>
    );
};

export default UseEffect;
