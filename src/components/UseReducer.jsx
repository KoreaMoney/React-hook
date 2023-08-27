import React, { useReducer, useState } from "react";
/**
 * @returns kimdowon 김도원 23.08.27
 * 여러개의 하위 값을 통제하려고 할때 쉽게 하기 위해 사용됩니다
 * 유지보수도 쉽다
 *
 * Dispatch(Action) ---> Reducer(State,Action) ---> State (update)
 *
 * ex) 거래 내역은 state(💻)로 해볼게유
 *
 * 1. reducer (은행 🏦)
 * -> state를 업데이트 해주는 역할 - 카카오 뱅크 기록 : 1만원 입금완료
 * ------------------------------------------------------------
 * 2. dispatch (요구하는 행위 🗣️)
 * -> 은행에 입금을 요구한다 - 카카오 뱅크야!! 1만원 입금 해줘라 좀
 * ------------------------------------------------------------
 * 3. action (내용 🧾)
 * -> 요구할때 담는 요구 내용 - 내용 : "1만원 입금"
 */
const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  console.log("reducer가 작동합니다.", state, action);
  // return state + action.payload;
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0); // 0은 초기값, money는 state이다, state가 바뀔때마다 렌더링한다

  const handleMoneyManage = (e) => {
    setNumber(parseInt(e.target.value));
  };

  /**
   * action은 기본적으로 object형태로 진행된다. type은 내가 정한다
   * payload는 input값을 넣어준다
   * */
  const handleDeposit = () => {
    // 입금
    dispatch({ type: ACTION_TYPES.deposit, payload: number });
  };
  const handleWithdraw = () => {
    // 출금
    dispatch({ type: ACTION_TYPES.withdraw, payload: number });
  };

  return (
    <div>
      <h1>카카오 뱅크</h1>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={handleMoneyManage}
        step="1000"
      />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdraw}>출금</button>
    </div>
  );
};

export default UseReducer;
