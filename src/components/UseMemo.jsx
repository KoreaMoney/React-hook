import React, { useMemo, useState } from 'react';
/**
 * @brief useMemo
 * @author Kim Dowon
 * @Date 23.08.30.
 * @returns
 * 자주 필요한 값은 다시 부르는게 아니라 저장된 값을 부르는 것
 * 렌더링 -> Component함수 호출 -> 모든 내부 변수 초기화
 *
 * useMemo
 * 렌더링 -> Component함수 호출(memoization) -> 렌더링 -> 기억 된 값을 재 사용
 * 1. 두개의 인자가 들어간다
 * ex) const value = useMemo(콜백함수,[배열])
 * -> 콜백함수는 memoization되는 것이다
 * 2. 꼭 필요할 때만 사용하기
 * 3. 무분별하게 남용할 시 성능은 떨어진다.
 */

const calculate = (number) => {
    console.log('함수가 불러옵니다');
    for (let i = 0; i < 999999999; i++) {
        return number + 10000;
    }
};
const otherCalculate = (otherNumber) => {
    console.log('다른 함수가 불러옵니다');
    for (let i = 0; i < 1000000; i++) {
        return otherNumber + 1;
    }
};

const UseMemo = () => {
    const [number, setNumber] = useState(1);
    const [otherNumber, setOtherNumber] = useState(1);

    // const sum = calculate(number);
    const otherSum = otherCalculate(otherNumber);

    const sum = useMemo(() => {
        return calculate(number);
    }, [number]);

    // const otherSum = useMemo(() => {
    //   return otherCalculate(otherNumber);
    // }, [otherNumber]);

    return (
        <div>
            <h2>계산기</h2>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <span> +10000 = {sum}</span>

            <h2>다른 계산기</h2>
            <input type="number" value={otherNumber} onChange={(e) => setOtherNumber(parseInt(e.target.value))} />
            <span> +1 = {otherSum}</span>
        </div>
    );
};

export default UseMemo;
