import React, { useState } from 'react';
/**
 * @brief useState
 * @author Kim Dowon
 * @Date 23.09.03.
 * @returns
 * State란
 * -> 컴포넌트가 가질 수 있는 상태
 *
 * useState
 * -> state의 상태를 간편하게 업데이트하고 수정할 수 있게 한다
 * const [state,setState]=useState(초기값);
 * 구조 분해할당 = 배열 비구조화 할당
 */

const nameArray = () => {
    console.log('state다시 작업');
    return ['이순신', '홍범도'];
};

const UseState = () => {
    console.log('시간이 업데이트 됩니다');
    const [time, setTime] = useState(1);
    // 맨처음 렌더링할 때만 그 함수가 불러진다
    const [name, setName] = useState(() => {
        return nameArray();
    });
    const [inputText, setInputText] = useState('');

    const handleUpdateTime = () => {
        let resetTime;
        if (time >= 12) {
            resetTime = 1;
        } else {
            resetTime = time + 1;
        }
        setTime(resetTime);
    };

    const onChangeInputText = (e) => {
        setInputText(e.target.value);
    };

    const handleEnrollName = () => {
        setName((prevData) => {
            console.log('기존 state값', prevData);
            return [inputText, ...prevData];
        });
        setInputText('');
    };

    return (
        <div>
            <h3>시간 변경</h3>
            <span>현재 시간 : {time}시</span>
            <button onClick={handleUpdateTime}>업데이트</button>
            <br />
            <h3>이름 등록</h3>
            <input type="text" value={inputText} onChange={onChangeInputText} placeholder="이름을 작성하세요" />
            <button onClick={handleEnrollName}>등록하기</button>
            {name.map((name, idx) => {
                return <p key={idx}>{name}</p>;
            })}
        </div>
    );
};

export default UseState;
