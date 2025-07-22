import styled from "styled-components";

const Category = ({ selected, onSelect }) => {
    const categories = [
        { label: "전체", value: "general" },
        { label: "스포츠", value: "sports" },
        { label: "연예", value: "entertainment" },
        { label: "경제", value: "business" },
    ];

    return (
        <CategoryWrapper>
            {categories.map((cat) => (
                <CategoryButton
                    key={cat.value}
                    onClick={() => onSelect(cat.value)}
                >
                    {cat.label}
                </CategoryButton>
            ))}
        </CategoryWrapper>
    );
};

export default Category;

const CategoryWrapper = styled.div`
    width: 100%;
    display: flex;
    border: 1px solid white;
    margin: 40px 0;   //카테코리와 타이틀, 뉴스카드들의 위치를 조정함.
    //부모 태그에서 조정해주면 좋았겠지만 ..? 모르겠음 !!
`;

const CategoryButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;