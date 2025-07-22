import { useState } from "react";
import styled from "styled-components";

function TabMenu() {
    //열림 여부 초기상태는 false [열리지않음]
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("이번 주");
    const options = ["오늘", "이번 주", "이번 달", "올해"];

    //옵션을 선택하면 옵션 값이 선택되고 드롭다운이 열리지 않음 상태로 변경[왜냐면 하나가 선택되었기 때문]
    const handleSelect = (option) => {
        // setSelected 함수를 사용하여 상태 변경
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <TabContainer>
            <LeftTabs>
                <Tab active>
                    <IconImg src="/src/assets/icons/trending_up.svg" alt="트렌딩" />
                    <span>트렌딩</span>
                </Tab>
                <Tab>
                    <IconImg src="/src/assets/icons/schedule.svg" alt="최신" />
                    <span>최신</span>
                </Tab>
                <Tab>
                    <IconImg src="/src/assets/icons/rss_feed.svg" alt="피드" />
                    <span>피드</span>
                </Tab>
            </LeftTabs>

            <RightTabs>
                {/* 드롭다운 여는 버튼 전체 */}
                <DropdownWrapper>
                    {/* Trigger 클릭했을 때 드롭다운 상태를 반대로 바꿈 */}
                    <Trigger onClick={() => setIsOpen(!isOpen)}>
                        {/* 선택된 현재 값을 보여줌 */}
                        <span>{selected}</span>
                        <IconImg src="/src/assets/icons/arrow_drop_down.svg" alt="드롭다운" />
                    </Trigger>
                    {/* isOpen이 true 일때 [드롭다운이 열렸을 때] DropdownList가 렌더링됨 */}
                    {isOpen && (
                        <DropdownList>
                            {options.map((option) => (
                                <DropdownItem key={option} onClick={() => handleSelect(option)}>
                                    {option}
                                </DropdownItem>
                            ))}
                        </DropdownList>
                    )}
                </DropdownWrapper>
                <IconImg src="/src/assets/icons/more_vert.svg" alt="더보기" />
            </RightTabs>
        </TabContainer>
    );
}

export default TabMenu;

const TabContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 12px 16px;
    box-sizing: border-box;
`;

const LeftTabs = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    gap: 20px;
`;

const Tab = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    // $는 템플릿 리터럴 내에서 JavaScript 값을 삽입할 때 사용하는 문법
    // styled-components에서는 props를 받아 스타일에 동적으로 적용할 때 사용됨
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    color: ${(props) => (props.active ? "#212529" : "#868e96")};
    border-bottom: ${(props) => (props.active ? "2px solid #212529" : "none")};
    padding-bottom: 4px;
    cursor: pointer;
`;

const IconImg = styled.img`
    width: 20px;
    height: 20px;
`;

const RightTabs = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    height: 48px;
`;

const DropdownWrapper = styled.div`
    position: relative;
`;

const Trigger = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
`;

const DropdownList = styled.ul`
    position: absolute;
    top: 36px;
    right: 0;
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    list-style: none;
    padding: 8px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

const DropdownItem = styled.li`
    padding: 12px 20px;
    cursor: pointer;
    white-space: nowrap;
    font-weight: 600;
    font-size: 0.875rem;
    color: #212529;

`;