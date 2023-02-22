import { useState } from 'react';
import styled from 'styled-components';

// TODO: Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현합니다.

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  

  > .submenu{
    display: flex;
    align-items: center;
    display:flex;
    width: 100px;
    height: 30px;
   
  }

  > .focused {
    background-color : #F0A04B;
    color : white;
  }

  & div.desc {
    text-align: center;
  }
`

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.
  let [currentTab, setCurrentTab] = useState(0)


  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = (index) => {
    // 다른 방법!!  
    //핸들러 고차함수로 만들어서 함수 호출 기능을 함수 자체로 넘길 수 있도록 함
    // const selectMenuHandler = (index) => () => {}
    // 불러올때 selectMenuHandler(index)로 가져오기 가능
    // 이렇게 고차로 구성하면 해당 기능을 활용해 다른 케이스 


    // TIP: parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않습니다
    // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신되도록 함수를 완성하세요.
    setCurrentTab(index)
  };

  return (
    <>
      <div>
        <TabMenu>
          {/*TODO: 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정합니다.*/}
          {/*TIP: li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused' 가 되며, 
                  나머지 2개의 tab은 'submenu' 가 됩니다.*/}
          {
            menuArr.map((el, index) => {
              if (index === currentTab) {
                return <li onClick={() => selectMenuHandler(index)} className='submenu focused'>{el.name}</li>
              }
              return <li onClick={() => selectMenuHandler(index)} className="submenu">{el.name}</li>
            })
          }

        </TabMenu>
        <Desc>
          {/*TODO: 아래 하드코딩된 내용 대신에, 현재 선택된 메뉴 따른 content를 표시하세요*/}
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};
