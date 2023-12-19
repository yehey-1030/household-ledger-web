import { TagType } from '@/types';
import { Modal, Input, Select, IconButton } from '../common';
import styled from 'styled-components';
import { useTagCreate } from '@/lib/hooks';
import { useEffect } from 'react';

interface ICreateTagButton {
  parentTagList: TagType[];
  categoryTypeID: number;
}

function CreateTagButton({ parentTagList, categoryTypeID }: ICreateTagButton) {
  const {
    tagForm,
    isModalOpen,
    openModal,
    closeModal,
    setArchvieType,
    handleNameChange,
    handleParentTagSelect,
    handleSubmit,
  } = useTagCreate();

  useEffect(() => {
    setArchvieType(categoryTypeID);
  }, []);

  return (
    <>
      <IconButton iconName="new_label" onClick={openModal} size="3rem" />
      {isModalOpen && (
        <Modal title="태그 추가하기" onClose={closeModal} onComplete={handleSubmit} buttonLabel="추가">
          <Wrapper>
            <Input label="태그 이름" value={tagForm.name} onChange={handleNameChange} isColored />
            <Select
              selectType="color"
              label="부모 태그 선택"
              selectList={parentTagList
                .map((tag) => {
                  return { optionID: tag.tagID, name: tag.name };
                })
                .concat({ optionID: 0, name: '없음' })}
              handleSelect={handleParentTagSelect}
            />
          </Wrapper>
        </Modal>
      )}
    </>
  );
}
export default CreateTagButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  width: 100%;
`;
