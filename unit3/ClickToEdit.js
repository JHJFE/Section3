import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

export const InputBox = styled.div`
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
  border: 1px #bbb dashed;
  border-radius: 10px;
  margin-left: 1rem;
`;

export const InputEdit = styled.input`
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
  margin: 10px;
`;

export const InputView = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 3rem;

  div.view {
    margin-top: 3rem;
  }
`;

export const MyInput = ({ value, handleValueChange }) => {
  const inputEl = useRef(null); // input 태그 주소 기억 .current 쓸것으로 예상
  const [isEditMode, setEditMode] = useState(false); // EditMode true면 Edit가능
  const [newValue, setNewValue] = useState(value); // 입력한 값을 기억

  useEffect(() => {
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleClick = (e) => {
    // TODO : isEditMode 상태를 변경합니다.
    e.stopPropagation();
    setEditMode(true)
  };

  const handleBlur = (e) => {
    // TODO : Edit가 불가능한 상태로 변경합니다.
    handleValueChange(newValue); 
    setEditMode(false)
    // 불가능한 상태가 되면서 값을 기억
    
  };

  const handleInputChange = (e) => {
    // TODO : 저장된 value를 업데이트합니다.
    console.log(e.target)
    setNewValue(e.target.value)
  };

  return (
    <InputBox onClick={handleBlur}>
      {isEditMode ? (
        <InputEdit
          type='text'
          value={newValue}
          ref={inputEl}
          onChange = {handleInputChange}
          onBlur = {handleBlur}
          // TODO : 포커스를 잃으면 Edit가 불가능한 상태로 변경되는 메소드가 실행되어야 합니다.
          // TODO : 변경 사항이 감지되면 저장된 value를 업데이트 되는 메소드가 실행되어야 합니다.
        />
      ) : (
        <span 
        // TODO : 클릭하면 Edit가 가능한 상태로 변경되어야 합니다. 
        onClick={handleClick}
        >{newValue}</span>
      )}
    </InputBox>
  );
}

const cache = {
  name: '김코딩',
  age: 20
};

export const ClickToEdit = () => {
  const [name, setName] = useState(cache.name);
  const [age, setAge] = useState(cache.age);

  return (
    <>
      <InputView>
        <label>이름</label>
        <MyInput value={name} handleValueChange={(newValue) => setName(newValue)} />
      </InputView>
      <InputView>
        <label>나이</label>
        <MyInput value={age} handleValueChange={(newValue) => setAge(newValue)} />
      </InputView>
      <InputView>
        <div className='view'>이름 {name} 나이 {age}</div>
      </InputView>
    </>
  );
};